import React, { useState, useMemo } from 'react';
import { connect } from 'react-redux';

import '../../styles/_style.scss';
import './style.scss';

import searchIcon from '../../assets/search.svg';

import Header from '../../components/SidebarHeader';
import CountryList from '../../components/CountryList';
import { LIST_TYPES } from '../../common/constants';

const Sidebar = ({
  countryConfirmedDataSum,
  countryDeathsDataSum,
  countryRecoveredDataSum,
  countryActiveDataSum,
}) => {
  const [listType, setListType] = useState(LIST_TYPES.CONFIRMED);
  const [filter, setFilter] = useState('');

  const handleInputSearch = e => setFilter(e.target.value);

  const countryList = useMemo(() => {
    const unfilteredList = ({
      [LIST_TYPES.CONFIRMED]: countryConfirmedDataSum,
      [LIST_TYPES.DEATHS]: countryDeathsDataSum,
      [LIST_TYPES.RECOVERED]: countryRecoveredDataSum,
      [LIST_TYPES.ACTIVE]: countryActiveDataSum,
    })[listType];
    const filterValue = filter.toLowerCase();

    return unfilteredList.filter(country => (
      country.country.toLowerCase().includes(filterValue)
    ));
  }, [listType, countryConfirmedDataSum, countryDeathsDataSum, countryRecoveredDataSum, filter])

  return (
    <div className='col sidebar'>
      <Header setListType={setListType} listType={listType} />
      <div className='input-search'>
        <img src={searchIcon} alt='Search icon' />
        <input type='search' placeholder='Search country by name' onChange={handleInputSearch} />
      </div>
      <CountryList countryList={countryList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { apiData: {
    countryConfirmedDataSum,
    countryDeathsDataSum,
    countryRecoveredDataSum,
    countryActiveDataSum,
  } } = state;
  console.log('state', state);
  return {
    countryConfirmedDataSum,
    countryDeathsDataSum,
    countryRecoveredDataSum,
    countryActiveDataSum,
    state,
  };
};


export default connect(mapStateToProps)(Sidebar);
