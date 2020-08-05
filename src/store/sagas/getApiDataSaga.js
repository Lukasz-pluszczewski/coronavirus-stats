import { put, takeLatest } from 'redux-saga/effects';
import { GET_API_DATA_REQUEST, GET_API_DATA_SUCCESS, GET_API_DATA_ERROR } from '../actions/actionTypes';

function getSumData(res, propertyName) {
  const data = res[propertyName].locations;

  const combineDataSum = data.reduce((countries, province) => {
    const existing = countries.find(country => country.country === province.country);

    if (existing) {
      existing.latest += province.latest;
      existing.province = '';
      Object.keys(existing.history).map((date) => {
        return existing.history[date] += province.history[date];
      });
    } else {
      countries.push(province);
    }

    return countries;
  }, []);

  const sortCombinedData = combineDataSum.sort((a, b) => parseFloat(b.latest) - parseFloat(a.latest));

  return sortCombinedData;
}

function* getApiData() {
  try {
    const data = yield fetch('https://coronavirus-tracker-api.herokuapp.com/all')
      .then(allDataRes => fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations').then(async locationsRes => ({
        all: await allDataRes.json(),
        locations: await locationsRes.json(),
      })))
      .then(({ all, locations }) => {
        const countryConfirmedDataSum = getSumData(all, 'confirmed');
        const countryDeathsDataSum = getSumData(all, 'deaths');
        const countryRecoveredDataSum = getSumData(all, 'recovered');

        const recoveredMap = countryRecoveredDataSum.reduce((recoveredMap, country) => {
          recoveredMap[country.country_code] = country;
          return recoveredMap;
        }, {});

        const sumData = [{
          countryConfirmedDataSum,
          countryDeathsDataSum,
          countryRecoveredDataSum,
          countryActiveDataSum: countryConfirmedDataSum.map(country => ({
            ...country,
            latest: country.latest - recoveredMap[country.country_code].latest,
          })),
        }];

        const populationData = locations.locations.reduce((populationData, country) => {
          populationData[country.country_code] = country.country_population;
          return populationData;
        }, {});
        console.log('res', countryRecoveredDataSum);

        return [all, sumData, populationData];
      })
      .catch(e => console.log(e));

    yield put({ type: GET_API_DATA_SUCCESS, data });
  } catch (e) {
    console.log('getApiData saga Error: ', e);
    yield put({ type: GET_API_DATA_ERROR, error: 'Something went wrong while retrieving API data. Try again.' });
  }
}

export function* getApiDataWatcher() {
  yield takeLatest(GET_API_DATA_REQUEST, getApiData);
}
