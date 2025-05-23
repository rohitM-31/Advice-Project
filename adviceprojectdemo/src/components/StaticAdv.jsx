import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaticAdv = () => {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        setAdvice(res.data.slip.advice);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="card text-center text-white bg-dark border-warning">
      <div className="card-body">
        <h5 className="card-title mb-3">Your Advice for the Day</h5>
        <p className="card-text">{advice}</p>
      </div>
    </div>
  );
};

export default StaticAdv;
