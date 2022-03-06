import React, { useState } from 'react'
import { NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../Component/Layout'
import './Login.css';
import swal from 'sweetalert'


const config = require('../Config.json');



export default function Login() {
  //1. state/variable /Hook
  const [user,setUser] = useState({
    identifier:'',
    password:''
  });
  const Navigate = useNavigate();

  //2. Function defination
  let logIn=(e)=>{
      e.preventDefault();
      console.log(e)
      var data = {
        'identifier':user.identifier,
        "password":user.password
    }
    //call the API(application programming interface)
    try {
      fetch(`${config.base_url}/api/auth/local`,{
        method: 'POST',
        data,
        headers: { 'Content-Type': 'application/json' ,
        Authorization:
        'Bearer 4e054c25ec262e92fcfd48522372b8ceb5db22322d72a235f502919d4a5ce0fa9b4dc38df2a82f92d925a8b6e181908f68347617f21f4e3587c80be52e10aa88b632f461aed38fa6afcfb03cf5a8213c57f0faf7d3e92a357556a988f78e822cfff8291e1eb5c019432b4621f78d797f0bd4de977aa66ee1837f804c57be4aff',
        },
        body: JSON.stringify(data),

    })
      .then(res=>res.json())
      .then((res)=>{
        console.log(res);
        //console.log(res.error.status);

        //this is error block
         if(res.error){
          swal(" Opps!", "Email or password Wrong!", "error");
        } 
        //this is success block
          if(!res.error){
            swal("Good job!", "Your Login Success!", "success");
            localStorage.setItem('jwt',JSON.stringify(res));
            Navigate('/get_teacher')
        }   
      })
      .catch((err)=>{
        console.log(err);
      })  
    } catch (error) {
      console.log(error.message);
    }
  }
  let handle=(e)=>{
    console.log(e );
    if(e.target.classList.contains('R-email')){
      setUser({
        //get previous value and place here
        ...user,
        //set new item
        'identifier': e.target.value
      });
    }
    if(e.target.classList.contains('R-password')){
      setUser({
        //get previous value and place here
        ...user,
        //set new item
        'password': e.target.value
      });
    } 
  }


  //3. return statement/ JSX
  return (
      <Layout>
          <form className="r-form" onSubmit={(e)=>{logIn(e)}} >
            <a href="#" className="r-crose"><i className="fas fa-times" /></a>
            <h1>Form Design</h1>
            <div className="r-form-field">
              <label htmlFor="email" >Email or Phone</label>
              <input type="email" autoFocus id="identifier" name="identifier" className='R-email' onChange={(e)=>{handle(e);}} required />
            </div>
            <div className="r-form-field">
              <label htmlFor="password">Password</label>
              <input type="password"id="password" name="password" className='R-password' onChange={(e)=>{handle(e);}} required />
            </div>
            <a href="#" className="btn">Forgot Password ?</a>
            <button type="submit" className="r-block mybtn border-0 text-white">LOGIN</button>
            <div style={{textAlign: 'center'}}>
              <NavLink style={{textDecoration: 'none', color: '#333'}} to="/register">Not a member ?</NavLink><Link to="/register" className="btn btn-info">Register Now</Link>
            </div>
            
          </form>

      </Layout>
    
  )
}
