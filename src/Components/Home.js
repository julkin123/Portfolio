import React from 'react'

import "./Home.css"
import Image from 'react-bootstrap/Image';

import image from "./Julkingeorge.jpg"


function Home() {
  return (

    <div className='p-4'>   
      
       <div className="container">

      <div className="row pt-5  mt-5  align-items-center text-center ">

        <div className="col-md-6">
          <Image   height={400} src={image} roundedCircle />  	
          <h1 >Julkin George</h1>
        </div>
        <div className="col-md-6">
          <h3 className='p-4 mr-auto'>"Hard work, consistency, and dedication will always outshine talent left idle."</h3>
        </div>
      </div>

    </div>


    </div>








  )
}

export default Home
