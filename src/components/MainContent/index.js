import React from 'react';
import { connect } from 'react-redux';

import { roundNumber, sortDataByDate } from '../../common';

import PieChart from './Charts/PieChart';
import LineChart from './Charts/LineChart';

import '../../styles/_style.scss';
import './style.scss';

const MainContent = (props) => {

  let confirmed,
    deaths,
    recovered,
    currentlySick,
    sortedConfirmedHistoryDates,
    sortedConfirmedHistoryNumbers,
    sortedDeathsHistoryDates,
    sortedDeathsHistoryNumbers,
    sortedRecoveredHistoryDates,
    sortedRecoveredHistoryNumbers,
    inTheLast24h;

  if (props.country) {
    confirmed = props.data.confirmed.locations.find(country => country.country === props.country);
    deaths = props.data.deaths.locations.find(country => country.country === props.country);
    recovered = props.data.recovered.locations.find(country => country.country === props.country);
    currentlySick = confirmed.latest - deaths.latest - recovered.latest;

    const sortedConfirmedData = sortDataByDate(confirmed);
    sortedConfirmedHistoryDates = sortedConfirmedData[1];
    sortedConfirmedHistoryNumbers = sortedConfirmedData[2];

    const sortedDeathsData = sortDataByDate(deaths);
    sortedDeathsHistoryDates = sortedDeathsData[1];
    sortedDeathsHistoryNumbers = sortedDeathsData[2];

    const sortedRecoveredData = sortDataByDate(recovered);
    sortedRecoveredHistoryDates = sortedRecoveredData[1];
    sortedRecoveredHistoryNumbers = sortedRecoveredData[2];

    inTheLast24h = sortedConfirmedHistoryNumbers[sortedConfirmedHistoryNumbers.length - 1] - sortedConfirmedHistoryNumbers[sortedConfirmedHistoryNumbers.length - 2];
  }

  const DefaultMessages = () => {
    if (props.selectedCountry.latest === 0) {
      return <p className='text-in-center'>No data available</p>;
    }
    
    if (!props.selectedCountry.country) {
      return <p className='text-in-center'>Select country from the country list</p>;
    }
  };

  return (
    <div className='col main-content'>
      {props.country ?  
        <>
          {props.selectedCountry.country_code ? 
            <img
              style={{ verticalAlign: 'sub', marginRight: '20px' }}
              src={`https://www.countryflags.io/${props.selectedCountry.country_code}/flat/32.png`}
              alt={props.selectedCountry.country_code}
            />
            : null
          }
          <h1 style={{ display: 'inline-block' }}>{props.country}</h1>
        </>
        : null
      }
      {props.selectedCountry && props.country && props.selectedCountry.latest !== 0 ? 
        <div className='info'>
          <p className='country-card'><span>{roundNumber(confirmed.latest)}</span>Total cases</p>
          <p className='country-card'><span>{roundNumber(deaths.latest)}</span>Deaths</p>
          <p className='country-card'><span>{roundNumber(recovered.latest)}</span>Recovered</p>
          <p className='country-card'><span>{roundNumber(currentlySick)}</span>Currently sick</p>
          <p className='country-card'><span>+ {roundNumber(inTheLast24h)}</span>in the last 24h</p>
        </div>
        :
        <DefaultMessages />
      }

      {confirmed && deaths && recovered && props.selectedCountry.latest !== 0 ?
        <>
          <PieChart
            labels={['Currently sick', 'Deaths', 'Recovered']}
            data={{currentlySick, deaths, recovered}}
            title='Total data'
          />

          <LineChart
            labels={sortedConfirmedHistoryDates}
            data={sortedConfirmedHistoryNumbers}
            title='Total cases per day'
            borderColor='#e60036'
            backgroundColor='rgba(230, 0, 54, 0.4)'
          />

          <LineChart
            labels={sortedDeathsHistoryDates}
            data={sortedDeathsHistoryNumbers}
            title='Total deaths per day'
            borderColor='#571aab'
            backgroundColor='rgb(87, 26, 171, 0.4)'
          />

          <LineChart
            labels={sortedRecoveredHistoryDates}
            data={sortedRecoveredHistoryNumbers}
            title='Total recovered per day'
            borderColor='#4fc974'
            backgroundColor='rgb(79, 201, 116, 0.4)'
          />
        </> : null }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.apiData.data,
    selectedCountry: state.selectedCountry,
    country: state.selectedCountry.country,
    latest: roundNumber(state.selectedCountry.latest)
  };
};

export default connect(mapStateToProps, null)(MainContent);
