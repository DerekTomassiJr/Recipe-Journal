import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Home.css';
import PersonIcon from '@mui/icons-material/Person';
import LockPersonIcon from '@mui/icons-material/LockPerson';

function Home() {
  /*setting variables to empty string*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  /*function checks username and password credentials*/
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'admin' && password === '123') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  /*backgroundContainer contains background img, headerContainer contains h1 text, login-container contains login ui*/
  return (
    <div>
      <div className='backgroundContainer'>
        <div className='headerContainer'>
          <div className='login-container'>
            <form onSubmit={handleSubmit}>
              {error && <div className='error'>{error}</div>}
              <h1>Let's Get Cooking.</h1>
              <div className='input-field'>
                <input
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <PersonIcon className='icon' />
              </div>

              <div className='input-field'>
                <input
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <LockPersonIcon className='icon' />
              </div>

              <div className='remember-forgot'>
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot password?</a>
              </div>

              <div className='button-group'>
              <button className='btn' type='submit'>Login 🍳</button>
              <button className='btn' type='button'>Signup 👨‍🍳</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;







