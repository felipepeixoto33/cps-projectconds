import React, { useState } from 'react';
import './Chart.css';

import { Paper } from '@material-ui/core';

const Chart = (props) => {
  const selectedValues = {
    daily: true,
    weekly: false,
    monthly: false,
  };
  const [selected, setSelected] = useState(selectedValues);

  const daily = selected.daily == true ? 'selected' : null;
  const weekly = selected.weekly == true ? 'selected' : null;
  const monthly = selected.monthly == true ? 'selected' : null;

  console.log(props.data);

  const handleDaily = () => {
    setSelected({ daily: true, weekly: false, monthly: false });
    console.log('Daily Chart');
  };

  const handleWeekly = () => {
    setSelected({ daily: false, weekly: true, monthly: false });
    console.log('Weekly Chart');
  };

  const handleMonthly = () => {
    setSelected({ daily: false, weekly: false, monthly: true });
    console.log('Monthly Chart');
  };

  return (
    <>
      <div>
        <Paper
          className="chart-box"
          style={{ backgroundColor: '#2e343d' }}
          elevation={1}
        >
          <div className="chart-types-grid">
            <div
              className="chart-daily-box"
              onClick={() => {
                handleDaily();
              }}
            >
              <label className={`text chart-daily-item ${daily}`}>Daily</label>
            </div>
            <div
              className="chart-weekly-box"
              onClick={() => {
                handleWeekly();
              }}
            >
              <label className={`text chart-weekly-item ${weekly}`}>
                Weekly
              </label>
            </div>
            <div
              className="chart-monthly-box"
              onClick={() => {
                handleMonthly();
              }}
            >
              <label className={`text chart-montly-item ${monthly}`}>
                Monthly
              </label>
            </div>
          </div>
          <div className="chart">Chart will be here</div>
        </Paper>
      </div>
    </>
  );
};

export default Chart;
