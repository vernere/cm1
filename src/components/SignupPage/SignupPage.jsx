import React, { useState } from 'react';
import './SignupPage.css';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('fi');

  const validateEmail = (email) => {
    return String(email) === 'john@doe.com';
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const getGreeting = (nationality) => {
    switch (nationality) {
      case 'fi':
        return 'Moi';
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

  return (
    <div className="container">

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: validateEmail(email) ? 'green' : 'red' }}
        placeholder="Email"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ borderColor: validatePassword(password) ? 'green' : 'red' }}
        placeholder="Password"
      />

      <select
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
      >

      <option value="fi">Finnish</option>
      <option value="en">English</option>
      <option value="de">German</option>
      <option value="fr">French</option>

      </select>

      <button disabled={!validateEmail(email) || !validatePassword(password)}>
        Sign up
      </button>
    
      <p>{getGreeting(nationality)}</p>
      <p>Your email is john@doe.com</p>

    </div>
  );
}

export default SignupPage;
