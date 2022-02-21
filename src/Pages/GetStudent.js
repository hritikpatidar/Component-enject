import React from 'react'
import Layout from '../Component/Layout'

import { useParams } from 'react-router-dom'

export default function GetStudent() {
    //1. state/variable 

    let param = useParams();
    //2. functions defination


    //3. return statement JSX
  return (
      <Layout>
          <h2 className='d-flex justify-content-center bg-danger p-5'>Get Student  {param.stu_id} {param.id} </h2>
      </Layout>
          
      
    
  )
}
