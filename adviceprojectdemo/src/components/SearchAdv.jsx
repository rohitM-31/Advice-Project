import React, { useState } from 'react';
import axios from 'axios';

const SearchAdv = () => {
  const [name, setName] = useState('');
  const [adviceList, setAdviceList] = useState([]);
  const [error, setError] = useState('');

  const handleInput = (e) => {
    setName(e.target.value);
  };

  const handleSearch = () => {
    axios.get(`https://api.adviceslip.com/advice/search/${name}`)
      .then((res) => {
        if (res.data.slips) {
          setAdviceList(res.data.slips);
          setError('');
        } else if (res.data.message) {
          setAdviceList([]);
          setError(res.data.message.text);
        }
      })
      .catch((err) => {
        setAdviceList([]);
        setError('Something went wrong. Try again later.');
        console.log(err);
      });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Search for Advice</h2>
      <div className="d-flex justify-content-center">
      
        <div className="input-group input-group-lg mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter keyword"
            onChange={handleInput}
            value={name}
          />
          <button className="btn btn-warning" onClick={handleSearch}>Search</button>
        </div>
      </div>

 
      {error && <div className="alert alert-danger text-center">{error}</div>}

      {adviceList.length > 0 ? (
        <div className="row">
          {adviceList.map((slip, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card p-3 text-dark bg-light">
                <div className="card-body">
                  <p className="card-text">{slip.advice}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted text-center">No advice available.</p>
      )}
    </div>
  );
};

export default SearchAdv;
