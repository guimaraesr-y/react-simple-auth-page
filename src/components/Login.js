import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleSubmit = e => { // Logs users in here
		e.preventDefault()
		alert('[Log in here]')
	}

	const handleClick = e => {
		e.preventDefault();
		navigate('/register')
	}

	useEffect(() => {
		document.title = 'Login Page'
	}, []);
	
  	return (
	    <div className='body'>
			<div className='login-div'>
				<div className='login-div-presentation'>
					<h1 className='login-div-presentation-title'>Welcome back!</h1>
					<p className='login-div-presentation-text'>
						Log in to use all of our features.<br />
						Keep your data safe. Don't share your password with anyone!
					</p>
				</div>
				<div className='login-div-items'>
					<h1 className='login-div-items-title'>Log in</h1>
					<form className='login-form' method='post' action='/api/user/auth' onSubmit={handleSubmit}>
						<div className='input-container'>
							<input className='login-form-input' type='text' name='username' required autoComplete='off' />
							<label htmlFor='username'>Username</label>
						</div>
						<div className='input-container'>
							<input className='login-form-input' type='password' name='password' required />
							<label htmlFor='username'>Password</label>
						</div>
						<div className='login-form-btns'>
							<input className='login-form-submit-btn' type='submit' name='submit' value='Log in' />
							<button onClick={ handleClick } className='login-form-register-btn'>Register</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login;