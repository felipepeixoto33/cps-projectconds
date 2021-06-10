import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import User from './components/User/User';
import fire from './Firebase';

function App() {
  const [values, setValues] = useState({});
  const [lastData, setLastData] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [loading, setLoading] = useState(false);
  const [actualTime, setActualTime] = useState('');

  useEffect(() => {
    getData();
    // const interval = setInterval(() => {
    //   console.log('Running' + Date());
    //   getOnce();
    // }, 20000);

    // return () => clearInterval(interval);
  }, []);

  useEffect(() => {}, [values]);

  const getData = () => {
    //Updates everytime new data is pushed...
    const dataRef = fire.database().ref('Sensor');
    setLoading(true); // dever ser 'true'
    dataRef.on('value', (snapshot) => {
      let data = snapshot.val();
      setValues(data);

      const arrayOfValues = Object.values(data);
      const last = arrayOfValues[arrayOfValues.length - 1].data;
      const last2 = last * 0.005;
      const roundedLast = Math.round(last2 * 10000) / 10000;
      console.log(`lastValue = ${roundedLast}`);
      console.log(arrayOfValues);
      setLastData(roundedLast);

      let timedTotalCost = 0;

      for (let i = 0; i < arrayOfValues.length; i++) {
        if (arrayOfValues[i].data > 0) {
          timedTotalCost += arrayOfValues[i].data;
          console.log(arrayOfValues[i].data);
        }
      }
      setTotalCost(timedTotalCost * 0.005);

      setLoading(false);
    });
  };

  const getOnce = () => {
    const dataRef = fire.database().ref('Sensor');
    dataRef.get().then((snapshot) => {
      setLoading(true);
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log(data);
        setValues(data);

        const arrayOfValues = Object.values(data);
        const last = arrayOfValues[arrayOfValues.length - 1].data;
        const last2 = 0.139394;
        const roundedLast = Math.round(last2 * 0.005 * 100) / 100;
        console.log(`lastValue = ${roundedLast}`);
        console.log(arrayOfValues);
        setLastData(roundedLast);

        let timedTotalCost = 0;

        for (let i = 0; i < arrayOfValues.length; i++) {
          if (arrayOfValues[i].data > 0) {
            timedTotalCost += arrayOfValues[i].data;
            console.log(arrayOfValues[i].data);
          }
        }
        setTotalCost(timedTotalCost * 0.005);

        setLoading(false);
      } else {
        console.log('Error fetching data');
      }
    });
  };

  const pushData = () => {
    fire.database().ref('data').push({ test: 20.5 });
  };

  return (
    <div className="App">
      <User cost={totalCost} />
      {loading === true ? 'Loading' : <Chart data={values} cost={totalCost} />}
      <div className="cost-box">
        <label className="cost-title">Passagem Atual de Água</label>
        <br />
        <label className="cost-value">
          {lastData > 0 ? `R$${lastData}` : 'R$0.00'}
        </label>
      </div>
    </div>
  );
}

export default App;
