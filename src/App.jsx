import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import User from './components/User/User';
import fire from './Firebase';

function App() {
  const [values, setValues] = useState({});

  useEffect(() => {
    getData();
    //pushData();
  }, []);

  const getData = () => {
    //Get data from the Realtime Database
    const dataRef = fire.database().ref('data');
    dataRef.on('value', (snapshot) => {
      let data = snapshot.val();
      setValues(data);
    });
  };

  const pushData = () => {
    fire.database().ref('data').push({ test: 20.5 });
  };

  return (
    <div className="App">
      <User />
      <Chart data={values} />
    </div>
  );
}

export default App;
