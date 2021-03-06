import React from 'react';
import ReactTooltip from 'react-tooltip';

import './styles.scss';

const Credits = () => {
  return (
    <div id='credits'>
      <p data-tip='custom show' data-event='click focus'>Credits</p>
      <ReactTooltip globalEventOff='click' place='left' type='light' effect='solid' clickable={true}>
        <p>Original application made by <a href='https://www.lukazrnic.com' target='_blank' rel='noopener noreferrer'>Luka Zrnic</a></p>
        <p>Original source code: <a href='https://github.com/Zrna/coronavirus-stats' target='_blank' rel='noopener noreferrer'>coronavirus-stats</a></p>
        <p>Modified by <a href='https://github.com/Lukasz-pluszczewski' target='_blank' rel='noopener noreferrer'>Łukasz Pluszczewski</a></p>
        <p>Modified Source code: <a href='https://github.com/Lukasz-pluszczewski/coronavirus-stats' target='_blank' rel='noopener noreferrer'>coronavirus-stats</a></p>
        <p>Data source: <a href='https://github.com/ExpDev07/coronavirus-tracker-api' target='_blank' rel='noopener noreferrer'>coronavirus-tracker-api</a></p>
      </ReactTooltip>
    </div>
  );
};

export default Credits;
