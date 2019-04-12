import React from 'react';
import register from '../HelperFunctions/register';
import login from '../HelperFunctions/login';
import { Link } from 'react-router-dom';

function RegisterView(props) {
  const onFormSubmit = (event) => {
    event.preventDefault();
    event.persist();

    const username = event.target['username_field'].value.toLowerCase();
    const password = event.target['password_field'].value;

    const form = { username, password };
    const formIsFilled = !!(username && password);

    if (formIsFilled) {
      register(form)
        .then(success => {
          login(form, props);
        })
        .catch(err => {
          console.error(err.message);
        });
    }
  }

  return (
    <div className="view">
      <h2>Register</h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="username"
          name="username_field"
        />
        <input
          type="password"
          placeholder="password"
          name="password_field"
        />
        <button type="submit" className="primary">Register</button>
      </form>
      <Link to="/">Log In</Link>
    </div>
  );
}

export default RegisterView;
