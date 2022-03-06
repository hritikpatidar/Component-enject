import React, { useEffect, useState } from 'react'
import Layout from '../Component/Layout'
import { Button, Modal, Pagination, Table } from 'react-bootstrap';//THIS IS A NAMED IMPORT
import URL from './Helper';
import swal from 'sweetalert';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const config = require('../Config.json');
export default function GetStudent() {
    //1. state/variable 
    const [student, setStudent] = useState({
        data:[]
    });
    const [paginationItem, setPaginationItem] = useState([]);
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [view, setView] = useState(false);

    useEffect( ()=>{
        getMyTeachers();
     },[] );
    //2. functions defination
    let handleView = (e)=>{
        //console.log("Edit View");
        e.preventDefault();
        console.log(e.target.closest("tr").querySelector('td:nth-child(2)').innerHTML);
        var name = e.target.closest("tr").querySelector('td:nth-child(2)').innerHTML
        setName(name)
        setView(true);
    }
    let handleViewClose = ()=>{
        //console.log('okok');
        setView(false);
    }
    let submitTeacher= (e)=>{
        e.preventDefault();
        console.log("submitted")
        let data = { // json  javascript object notation 
            "data":{
                "name":name
            }
        };

        //http://localhost:1337/api/students/2
        fetch(`${config.base_url}/api/students/`+id,{
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
            swal("Good job!", "Teacher Name Updated Succesfully", "success");
        } ).catch( (err)=>{
            console.log(err);
        } ); 
    }
    let handleDelete = (e) =>{
        var tr = e.target.closest('tr');
        console.log(e.target.closest('tr').querySelector('td:first-child').innerHTML); //e is a event object
        var delid = parseInt(e.target.closest('tr').querySelector('td:first-child').innerHTML);
        console.log(delid);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then( async (willDelete) => {
            if (willDelete) {
                try { // it is error hendling functionality
                   await axios.delete(  URL+ '/api/students/' + delid);
                   tr.remove();
                   swal("Good job!", "You clicked the button!", "success");
                } catch (error) {
                    console.log(error)
                }
             
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    let handleShow = (e)=>{
        console.log(e.target.closest("tr").querySelector('td:nth-child(2)').innerHTML);
        console.log(e.target.closest("tr").querySelector('td:first-child').innerHTML);
        var name = e.target.closest("tr").querySelector('td:nth-child(2)').innerHTML
        var id =e.target.closest("tr").querySelector('td:nth-child(1)').innerHTML
        setId(id)
        setName(name);
        setShow(true);

    }
    let handleClose = (e)=>{
        //console.log("okokok")
        
        setShow(false);
    }
    let handleSave = (e)=>{
        //console.log("okokok")
        window.location.reload("/get_teacher")
        setShow(false);
    }
    let first = (e)=>{
        //console.log("first");
        if(student.meta.pagination.page !== 1){
            getMyTeachers(1);
        }
        
    }
    let last = (e)=>{
        //console.log("last");
        if(student.meta.pagination.page !== student.meta.pagination.pageCount){
            getMyTeachers(student.meta.pagination.pageCount)
        }
    }
    let prev = (e)=>{
        //console.log("previous");
        if(student.meta.pagination.page !== 1){
            getMyTeachers(student.meta.pagination.page -1)
        }
       
        
    }
    let next = (e)=>{
        //console.log("next");
        if(student.meta.pagination.page !== student.meta.pagination.pageCount){
            getMyTeachers(student.meta.pagination.page + 1)
        }
    }
    let goToPage = (e)=>{
        //console.log(e.target.innerHTML);
        var pageno = parseInt(e.target.innerHTML);
        getMyTeachers(pageno);
    }

    let getMyTeachers = (pageno=1)=>{ //e = event
        //console.log(config.base_url);
        //console.log("good morning");
        //Always wrap the api calling code inside try-chatch block
        try {
            //call the api 
            //fatch api or
            //axios api
            //what is the api
            //fetch api with promise chain
            fetch(`${config.base_url}/api/students?pagination[page]=${pageno}&pagination[pageSize]=8`
            ).then( (data)=>{
                //lets make data json readable 
                return data.json();
            } ).then( (data)=>{
                //console.log(data);
    
    
                //set karne se phle data 
                //console.log("before set",student);
                //now set the student data in student hook variable
                setStudent(data)
                //set karne ke bad data kya he
                //console.log("after set",student);
                var start = data.meta.pagination.page
                var arr = []; //empty array
                for( let i = 1; i <= data.meta.pagination.pageCount; i++){
                    if(i === start){
                        arr.push(<Pagination.Item active onClick={ (e)=>{ goToPage(e) }}> {i} </Pagination.Item>)
                    }else{
                        arr.push(<Pagination.Item onClick={ (e)=>{ goToPage(e) }}> {i} </Pagination.Item>)
                    }
                    
                }
                setPaginationItem(arr);
               
    
            } ).catch( (err)=>{
                console.log(err);
            } );
        } catch (error) {
            console.log(error);
        }
    }

    //3. return statement JSX
    return (
        <Layout>
            <Modal show={show} size="lg">
                <Modal.Header  closeButton>
                    <Modal.Title>Edit Teacher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e)=>{ submitTeacher(e) }}>
                        <div className="mb-3">
                            <label htmlFor="EditTeacher" className="form-label">Teacher Name</label>
                            <input type="text" className="form-control" value={name} onChange={ (e)=>{ setName(e.target.value)} } id="EditTeacher" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={view} size="lg">
                <Modal.Header  closeButton>
                    <Modal.Title>View Teacher</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="EditTeacher" className="form-label">Teacher Name</label>
                            <input type="text" className="form-control" value={name} onChange={ (e)=>{ setName(name)} } id="EditTeacher" aria-describedby="emailHelp" />
                        </div>
                    </form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleViewClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            {
                student.data.length > 0 &&
                <React.Fragment>
                    <Table striped bordered hover>
                        <thead >
                            <tr>
                                <th>id</th>
                                <th>Teacher Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                student.data.map(function(currentValue, index, arr){
                                    //console.log(arr[index].id);
                                    return (
                                            <tr key={index}>   
                                                <td>{arr[index].id}</td>
                                                <td>{arr[index].attributes.name}</td>
                                                <td>
                                                    <Button className='btn btn-primary' size="sm" onClick={ (e)=>{ handleView(e) }}>View</Button>&nbsp;
                                                    <NavLink to={`/edit_teacher/${arr[index].id}`} className='btn btn-sm btn-info' size="sm">Edit</NavLink>&nbsp;
                                                    <Button className='btn btn-sm btn-info' size="sm" onClick={ (e)=>{ handleShow(e) }}>Edit Modal</Button>&nbsp;
                                                    <Button className='btn btn-danger' onClick={ (e)=>{ handleDelete(e) }} size="sm" >Delete</Button>
                                                </td>
                                            </tr>
                                    )//JSX
                                })
                            }
                            
                        </tbody>
                    </Table>
                    <Pagination className="d-flex justify-content-center">
                        <Pagination.First onClick={ (e)=>{ first(e); } }/>
                        <Pagination.Prev onClick={ (e)=>{ prev(e); } }/>

                        {
                        
                        paginationItem.map(function(currentValue, index,arr){
                                return currentValue //JSX
                            })
                        }
                        
                    
                        <Pagination.Next onClick={ (e)=>{ next(e); } }/>
                        <Pagination.Last onClick={ (e)=>{ last(e); } } />
                    </Pagination>
                </React.Fragment>
            }
        </Layout>
            
        
        
    )
}
