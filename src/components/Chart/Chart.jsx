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
  const [allData, setAllData] = useState([]);

  const daily = selected.daily === true ? 'selected' : null;
  const weekly = selected.weekly === true ? 'selected' : null;
  const monthly = selected.monthly === true ? 'selected' : null;

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  const roundedCost = Math.round(props.cost * 100) / 100;

  useEffect(() => {
    Object.values(props.data).forEach((value) => {
      //console.log(value.data);
      setAllData((arr) => [...arr, value.data]);
    });
  }, []);

  useEffect(() => {
    //console.log(allData.length);

    let defaultChart = {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07'], //Todas as Horas desde 00:00 até a hora atual.
      datasets: [
        {
          label: 'Custo (R$)',
          data: [10, 15, 25, 35, 12, 19, 27, 34 + roundedCost], //Data para cada hora do item 'labels'. Mostra o gasto em reais.
          backgroundColor: 'blue',
        },
      ],
    };

    let chartDefaultOptions = {
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Custo Durante as Horas de Hoje',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Horas',
          },
        },
        y: {
          title: {
            display: true,
            text: 'R$',
          },
        },
      },
    };

    setChartOptions(chartDefaultOptions);
    setChartData(defaultChart);
  }, [allData]);

  const handleDaily = () => {
    setSelected({ daily: true, weekly: false, monthly: false });
    console.log('Daily Chart');
    let chartDayStructure = {
      labels: ['00', '01', '02', '03', '04', '05', '06', '07'], //Todas as Horas desde 00:00 até a hora atual.
      datasets: [
        {
          label: 'Custo (R$)',
          data: [10, 15, 25, 35, 12, 19, 27, 34 + roundedCost], //Data para cada hora do item 'labels'. Mostra o gasto em reais. Era pra ser o 'allData'
          backgroundColor: 'blue',
        },
      ],
    };

    let chartDailyOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Custo Durante as Horas de Hoje',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Horas',
          },
        },
        y: {
          title: {
            display: true,
            text: 'R$',
          },
        },
      },
    };

    setChartOptions(chartDailyOptions);
    setChartData(chartDayStructure);
  };

  const handleWeekly = () => {
    setSelected({ daily: false, weekly: true, monthly: false });
    console.log('Weekly Chart');
    let chartWeeklyStructure = {
      labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'], //Os dias da Semana Desde Segunta até o dia Atual.
      datasets: [
        {
          label: 'Custo (R$)',
          data: [22, 34.0, 55.0, 23.5, 40.7, 50.8, 60 + roundedCost], //Data para cada dia do item 'labels'. Mostra o gasto em reais.
          backgroundColor: 'blue',
        },
      ],
    };

    let chartWeeklyOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Custo Durante os Dias da Semana',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Dias',
          },
        },
        y: {
          title: {
            display: true,
            text: 'R$',
          },
        },
      },
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
          label: 'Custo (R$)',
          data: [150, 200, 180, 150, 130, 120, 145 + roundedCost], //Data para cada dia do item 'labels'. Mostra o gasto em reais.
          backgroundColor: 'blue',
        },
      ],
    };

    let chartMonthlyOptions = {
      plugins: {
        title: {
          display: true,
          text: 'Custo Durante os Meses do Ano',
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Meses',
          },
        },
        y: {
          title: {
            display: true,
            text: 'R$',
          },
        },
      },
    };

    setChartOptions(chartMonthlyOptions);
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
              <label className={`text chart-daily-item ${daily}`}>Horas</label>
            </div>
            <div
              className="chart-weekly-box"
              onClick={() => {
                handleWeekly();
              }}
            >
              <label className={`text chart-weekly-item ${weekly}`}>Dias</label>
            </div>
            <div
              className="chart-monthly-box"
              onClick={() => {
                handleMonthly();
              }}
            >
              <label className={`text chart-montly-item ${monthly}`}>
                Meses
              </label>
            </div>
          </div>
          <div className="chart-container">
            <Bar className="chart" data={chartData} options={chartOptions} />
          </div>
        </Paper>
      </div>
    </>
  );
};

export default Chart;
