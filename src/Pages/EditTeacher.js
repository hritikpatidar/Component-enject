import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Layout from '../Component/Layout';
import swal from 'sweetalert';
import { Spinner } from 'react-bootstrap';
const config = require('../Config.json')
export default function EditStudent() {
    //1. state /Hook variable
    const [student, setStudent] = useState({
        data:{
            attributes:{
                name:""
            }
        }
    });
    const [isLoader, setIsLoader] = useState(false)
    const [isDisable, setIsDisable] = useState('')
    let params = useParams();

    useEffect( ()=>{
        console.log('page loaded successfuly')
        console.log(params.stu_id);
        getMyTeacher(params.stu_id);
    },[] )
    
    //2. function defination
   
    let handalChange = (e) =>{
        //console.log("okokokok",e.target.value);
        //const name = e.target.name;
        //const value = e.target.value;
        //setInputs(values => ({...values, [name]: value}))
        setStudent({
            ...student,
            data:{
                attributes:{
                    name:e.target.value
                }
            }
        }) 
    }

    let submitStudent= (e)=>{
        e.preventDefault()

        setIsLoader(true);

        setIsDisable('disabled');
       
        //console.log("submitted")
        let data = { // json  javascript object notation 
            "data":{
                "name": student.data.attributes.name
            }
        };

        //http://localhost:1337/api/students/2
        fetch(`${config.base_url}/api/students/`+params.stu_id,{
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
       
        .then( (data)=>{
            return data.json();
        } ).then( (data)=>{
            console.log(data);
            setIsLoader(false);
            setIsDisable(' ');
            swal("Good job!", "Friend Updated Succesfully", "success");
        } ).catch( (err)=>{
            console.log(err);
        } );
    }

    let getMyTeacher = (student_id=1)=>{ //e = event
        //console.log(config.base_url);
        //console.log("good morning");
        console.log(student)
        //Always wrap the api calling code inside try-chatch block
        try {
            //call the api 
            //fatch api or
            //axios api
            //what is the api
            //fetch api with promise chain
            fetch(`${config.base_url}/api/students/`+student_id
            ).then( (data)=>{
                //lets make data json readable 
                return data.json();
            } ).then( (data)=>{
                console.log(data);
    
    
                //set karne se phle data 
                //console.log("before set",student);
                //now set the student data in student hook variable
                setStudent(data)
                //set karne ke bad data kya he
                //console.log("after set",student);
               
    
            } ).catch( (err)=>{
                console.log(err);
            } );
        } catch (error) {
            console.log(error);
        }
    }

    //3. return statement /JSX
  return (
      <>
        <Layout>
            {
                isLoader &&
                <div className='d-flex justify-content-center'>
                <Spinner  animation="border" />
            </div>
            }
            
            <div className='d-flex justify-content-center'>
                <form  onSubmit={(e)=>{ submitStudent(e)}}>
                    <label className='mt-3' >Edit Teacher id {params.stu_id}:
                    </label> <br/>
                    <input className='mt-3'
                        type="text" 
                        name="username" 
                        value={student.data.attributes.name}
                        onChange={ (e)=>{ handalChange(e) } }
                    /><br/>
                    <input className={`btn btn-info btn-sm mt-3 ${isDisable}`} type="submit" />
                   
                    
                    <br/>
                    
                </form>
            </div>
        </Layout>
      </>
  )
}
