import React, { useState, useEffect } from 'react';
import './Chart.css';

import { Paper } from '@material-ui/core';

import { Bar, Line, Pie } from 'react-chartjs-2';

const Chart = (props) => {
  const selectedValues = {
    daily: true,
    weekly: false,
    monthly: false,
  };
  const [selected, setSelected] = useState(selectedValues);

  const daily = selected.daily === true ? 'selected' : null;
  const weekly = selected.weekly === true ? 'selected' : null;
  const monthly = selected.monthly === true ? 'selected' : null;

  console.log(props.data);

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const handleDaily = () => {
    setSelected({ daily: true, weekly: false, monthly: false });
    console.log('Daily Chart');
    let chartDayStructure = {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07'], //Todas as Horas desde 00:00 até a hora atual.
      datasets: [
        {
          label: 'Custo',
          data: [10.7, 5.2, 0.2, 4, 10.3, 100], //Data para cada hora do item 'labels'. Mostra o gasto em reais.
        },
      ],
    };

    setChartData(chartDayStructure);
  };

  const handleWeekly = () => {
    setSelected({ daily: false, weekly: true, monthly: false });
    console.log('Weekly Chart');
    let chartWeeklyStructure = {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'], //Os dias da Semana Desde Segunta até o dia Atual.
      datasets: [
        {
          label: 'Custo',
          data: [22, 34.0, 55.0, 23.5, 40.7, 50.8, 60], //Data para cada dia do item 'labels'. Mostra o gasto em reais.
        },
      ],
    };

    let chartWeeklyOptions = {
      title: {
        display: true,
      },
      text: 'Custo Por Dia da Semana',
    };

    setChartData(chartWeeklyStructure);
    setChartOptions(chartWeeklyOptions);
  };

  const handleMonthly = () => {
    setSelected({ daily: false, weekly: false, monthly: true });
    console.log('Monthly Chart');

    let chartMonthlyStructure = {
      labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'], //Os meses do Ano Desde Janeiro até o mës Atual.
      datasets: [
        {
          label: 'Custo',
          data: [150, 200, 180, 150, 130, 120, 145], //Data para cada dia do item 'labels'. Mostra o gasto em reais.
        },
      ],
    };

    setChartData(chartMonthlyStructure);
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
          <div className="chart">
            <Bar
              data={chartData}
              options={{
                title: { display: true, text: 'Dias da Semana', fontSize: 50 },
              }}
            />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Chart;
