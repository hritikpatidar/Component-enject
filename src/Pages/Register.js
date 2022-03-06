import React, { useState } from 'react'
import Layout from '../Component/Layout'
import swal from 'sweetalert';
import './Login.css';
export default function Register() {
  //1.state/ variable
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //2. function
  let submitData = () => {
    console.log(username);
    console.log(email);
    console.log(password);
    //http://localhost:1337/api/auth/local/register
    var data = {
      "username":username,
      "email":email,
      "password":password
    }
    fetch('http://localhost:1337/api/auth/local/register' ,{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
        },
        body: JSON.stringify(data)
    }).then((response )=>{
        response.json()
        if(response.status === 200){
          swal("Good job!", "User Created Successfully", "success");
          window.location.replace("/login");
        }
        if(response.status ===400){
          swal("Bed Request", "User Not Created","error")
        }
        
        window.localStorage.setItem('userInfo', JSON.stringify(response.data) )
    }).then(()=>{
        console.log(data);
        console.log(data.status);
       
    }).catch((error)=>{

    }).finally((all)=>{

    });
  }
  return (
    <Layout>
          <div className="row m-0 d-flex justify-content-center ">
            <div className="col-md-6 col-12  r-form mt-5">
              <h1 className="text-center">Register Form</h1>
              <form>
                <input className="form-control" placeholder="Enter Username" type="text" name="username" value={ username } onChange={(e)=>{setUsername(e.target.value)}}/><br/>
                <input className="form-control" placeholder="Enter Email" type="email" name="email" value={ email } onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <input className="form-control" placeholder="Enter Your Password" type="password" name="password" value={ password } onChange={(e)=>{setPassword(e.target.value)}}/><br/>
                <div className="d-grid gap-2">
                    <button type="button" name="button" className="btn btn-info" onClick={ ()=>{ submitData() } }>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <br/>
    </Layout>
  
  )
}
