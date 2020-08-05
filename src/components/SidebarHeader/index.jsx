import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import {
  roundNumber,
  formatDate,
  formatTime
} from '../../common';

import Card from './Card';
import { LIST_TYPES } from '../../common/constants';

const Header = ({
  error,
  numberOfConfirmed,
  numberOfDeaths,
  numberOfRecovered,
  numberOfCurrentlySick,
  lastUpdatedDate,
  lastUpdatedTime,
  listType,
  setListType,
}) => {
  return (
    <div className='sum-data'>
      <h2>Corona Virus Statistics</h2>
      {error ? <p style={{ color: '#e60036' }}>{error}</p> : null}
      <div className='cards-row'>
        <Card
          name='confirmed'
          number={numberOfConfirmed}
          className={listType === LIST_TYPES.CONFIRMED ? 'card-active' : null}
          onClick={() => setListType(LIST_TYPES.CONFIRMED)}
        />
        <Card
          name='deaths'
          number={numberOfDeaths}
          className={listType === LIST_TYPES.DEATHS ? 'card-active' : null}
          onClick={() => setListType(LIST_TYPES.DEATHS)}
        />
      </div>
      <div className='cards-row'>
        <Card
          name='recovered'
          number={numberOfRecovered}
          className={listType === LIST_TYPES.RECOVERED ? 'card-active' : null}
          onClick={() => setListType(LIST_TYPES.RECOVERED)}
        />
        <Card
          name='currently-sick'
          number={numberOfCurrentlySick}
          className={listType === LIST_TYPES.ACTIVE ? 'card-active' : null}
          onClick={() => setListType(LIST_TYPES.ACTIVE)}
        />
      </div>
      {lastUpdatedDate && lastUpdatedTime ?
        <p>
          Last update
          <span title='DD/MM/YYYY'> {lastUpdatedDate} </span>
          in
          <span title='HH/MM/SS'> {lastUpdatedTime}</span>.
        </p>
        :
        null
      }
    </div>
  );
};

const mapStateToProps = ({ apiData }) => ({
  error: apiData.error,
  numberOfConfirmed: roundNumber(apiData.numberOfConfirmed),
  numberOfDeaths: roundNumber(apiData.numberOfDeaths),
  numberOfRecovered: roundNumber(apiData.numberOfRecovered),
  numberOfCurrentlySick: roundNumber(apiData.numberOfCurrentlySick),
  lastUpdatedDate: formatDate(apiData.lastUpdated),
  lastUpdatedTime: formatTime(apiData.lastUpdated),
});

export default connect(mapStateToProps)(Header);
