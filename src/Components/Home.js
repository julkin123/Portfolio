import React from 'react'

import "./Home.css"
import Image from 'react-bootstrap/Image';

import image from "./Julkingeorge.jpg"


function Home() {
  return (


    <div className='d-flex maincontainer'>




      <div className=' justify-content-center m-5 align-items-center '>

        <table>

          <tbody>
            <tr>
              <Image width={400} height={400} src={image} roundedCircle />
            </tr>
            <tr>
              <div className="container p-2">
                <h1 >Julkin George</h1>
                {/* <h3>julkingeorgejob@gmail.com</h3>
                <h3>+49 15224006395</h3> */}
              </div>

            </tr>
          </tbody>
        </table>


      </div>
      <div className="quote">
        <h3>"Hard work, consistency, and dedication will always outshine talent left idle."</h3>
      </div>



    </div>

    // <div className=' justify-content-center m-5 align-items-center'>

    //   <table>

    //     <tbody>
    //       <tr>
    //         <Image width={400} height={400} src={image} roundedCircle />
    //       </tr>
    //       <tr>
    //         <div className="container">
    //           <h1 className='m-5 '>Julkin George</h1>
    //           <h2>julkingeorgejob@gmail.com</h2>
    //         </div>

    //       </tr>
    //     </tbody>
    //   </table>





    // </div>
  )
}

export default Home
