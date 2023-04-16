import './register.css'

export default function Register() {
  return (
    <div className='register'>
       <span className="registerTitle">register</span>
      <form className="registerForm">
        <label>Email</label>
        <input type="email" placeholder='email@email.com' className='registerInput'/>
        <label>Username</label>
        <input type="text" placeholder='username' className='registerInput'/>
        <label>Phone Number</label>
        <input type="tel" placeholder='phone' className='registerInput'/>
        <label>Password</label>
        <input type="password" placeholder='password' className='registerInput'/>
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  )
}
