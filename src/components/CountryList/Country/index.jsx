import React from 'react';
import { connect } from 'react-redux';
import { scroller } from 'react-scroll';

import {
  selectedCountryAction,
  getSelectedCountryPopulationAction
} from '../../../store/actions';
import { roundNumber } from '../../../common';

const Country = ({ data, country, populationData, ...props }) => {

  const handleSelectCountry = (selectedCountry) => () => {
    props.selectedCountryDispatchToStore(data, selectedCountry);
    props.getSelectedCountryPopulation(selectedCountry.country_code);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      scroller.scrollTo('main-content', {
        duration: 1000,
        smooth: true,
        offset: 50
      });
    }
  };

  const totalNumber = roundNumber(country.latest);
  const populationPercentage = roundNumber(country.latest / populationData[country.country_code], 5);

  return (
    <div
      className='country-row'
      onClick={handleSelectCountry(country)}
      title={`${roundNumber(country.latest)} confirmed cases in ${country.country}`}
    >
      <img
        src={`https://www.countryflags.io/${country.country_code}/flat/32.png`}
        alt={country.country_code}
      />
      <p>
        <strong>{country.country}</strong>
        <span className='numbers'>
          <span className="population-percentage">{populationPercentage}</span>
          <span className="total-number">{totalNumber}</span>
        </span>
      </p>
    </div>
  );
};

const mapStateToProps = ({ apiData: { data, populationData }}) => ({
  data,
  populationData,
});

const mapDispatchToProps = dispatch => ({
  selectedCountryDispatchToStore: (data, country) => dispatch(selectedCountryAction(data, country)),
  getSelectedCountryPopulation: (country_code) => dispatch(getSelectedCountryPopulationAction(country_code))
});

export default connect(mapStateToProps, mapDispatchToProps)(Country);
