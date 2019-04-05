import React, { useState, useEffect } from 'react';
import getJokes from '../HelperFunctions/getJokes';

function JokesView(props) {
  const [jokes, updateJokesState] = useState([]);

  const logOut = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };

  useEffect(() => {
    getJokes(updateJokesState, console.error);
  }, []);

  return (
    <div className="view">
      <h1>Jokes</h1>
      {
        jokes.map(joke => {
          return (
            <h3 key={joke.id}>
              "{joke.joke}"
            </h3>
          )
        })
      }
      <button onClick={logOut}>Log Out</button>
    </div>
  )
}

export default JokesView;
