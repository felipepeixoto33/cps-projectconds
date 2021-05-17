import React, { useState, useEffect } from 'react';
import './App.css';
import Chart from './components/Chart/Chart';
import User from './components/User/User';
import fire from './Firebase';

function App() {
  const [values, setValues] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const dataRef = fire.database().ref('data');
    setLoading(true);
    dataRef.on('value', (snapshot) => {
      let data = snapshot.val();
      setValues(data);
      console.log(values);
      setLoading(false);
    });

    //console.log(values);
  }, []);

  const pushData = () => {
    fire.database().ref('data').push({ test: 20.5 });
  };

  return (
    <div className="App">
      <User />
      {loading === true ? 'Loading' : <Chart data={values} />}
    </div>
  );
}

export default App;
