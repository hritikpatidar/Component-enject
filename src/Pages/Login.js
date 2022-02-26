import React from 'react'
import Layout from '../Component/Layout'
import './Login.css';

export default function Login() {
  return (
      <Layout>
          <form className="r-form" >
            <a href="#" className="r-crose"><i className="fas fa-times" /></a>
            <h1>Form Design</h1>
            <div className="r-form-field">
              <label>Email or Phone</label>
              <input type="text" name="email" />
            </div>
            <div className="r-form-field">
              <label>Password</label>
              <input type="password" name="email" />
            </div>
            <a href="#" className="btn">Forgot Password ?</a>
            <button type="submit" className="r-block mybtn border-0 text-white">LOGIN</button>
            <div style={{textAlign: 'center'}}>
              <a style={{textDecoration: 'none', color: '#333'}} href="#">Not a member ?</a> <a href="#" className="btn">Signup Now</a>
            </div>
          </form>

      </Layout>
    
  )
}
