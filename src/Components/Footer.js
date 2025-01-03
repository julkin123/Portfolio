import React from 'react'
import "./Footer.css";
import { insta, linkedin, git } from "./Constants"

function Footer() {
  return (
    <footer style={{height:50}} className='footerclass  bg-light p-2 '>




      <div className="d-flex flex-row justify-content-center align-items-center ">
        <div className="p-2 linkclass"> <a href='https://www.instagram.com/julkin_george/'>{insta}</a> </div>
        <div className="p-2"> <a href='https://www.linkedin.com/in/julkin-george/'>{linkedin}</a> </div>
        <div className="p-2"> <a href='https://github.com/julkin123'>{git}</a> </div>


      </div>






    </footer>



  )
}

export default Footer
