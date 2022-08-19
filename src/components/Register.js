import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
    const navigate = useNavigate();

    const handleSubmit = e => { // Logs in users here
		e.preventDefault()
		alert('[Log in here]')
	}

	const handleClick = e => {
		e.preventDefault();
		navigate('/login')
	}
	
  	return (
	    <div className='body'>
			<div className='register-div'>
				<div className='register-div-presentation'>
					<h1 className='register-div-presentation-title'>Join Us!</h1>
					<p className='register-div-presentation-text'>
						Become a member and enjoy our features and services.<br />
						Keep your data safe. Don't share your password with anyone!
					</p>
				</div>
				<div className='register-div-items'>
					<h1 className='register-div-items-title'>Sign up</h1>
					<form className='register-form' method='post' action='/api/user/auth' onSubmit={handleSubmit}>
						<div className='input-container'>
							<input className='register-form-input' type='text' name='fullname' required autoComplete='off' />
							<label htmlFor='fullname'>Full name</label>
						</div>
						<div className='input-container'>
							<input className='register-form-input' type='text' name='username' required autoComplete='off' />
							<label htmlFor='username'>Username</label>
						</div>
						<div className='input-container'>
							<input className='register-form-input' type='password' name='password' required />
							<label htmlFor='username'>Password</label>
						</div>
						<div className='register-form-btns'>
							<input className='register-form-submit-btn' type='submit' name='submit' value='Sign up!' />
							<button onClick={ handleClick } className='register-form-register-btn'>Log in</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Register;