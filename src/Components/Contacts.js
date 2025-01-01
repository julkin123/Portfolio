import React from 'react'
import "./Constants"

import "./Contacts.css"
import Button from 'react-bootstrap/Button';
function Contacts() {
    return (
        <div className='container-fluid'>

        <div className='row pt-5 m-5 text-center justify-content-center mainclass'>
            <h1>Contact Details</h1>

            <div className='pt-5 ontact  '  >


                <table>
                    <tbody>
                        <tr>
                            <td><h3>Mobile</h3></td>
                            <td><h3>: +49 15224006395</h3></td>
                        </tr>
                        <tr>
                            <td><h3> </h3></td>
                            <td><h3>: +91 9539182276</h3></td>
                        </tr>
                        <tr>
                            <td><h3>Email</h3></td>
                            <td><h3>: julkingeorgejob@gmail.com</h3></td>
                        </tr>



                        <tr>
                            <td><h3>LinkedIn</h3></td>
                            <td><h3>: <Button style={{width:60,height:30}} className=' ' href='https://www.linkedin.com/in/julkin-george-983619333/' variant="primary">Go</Button></h3></td>
                        </tr>
                        <tr>
                            <td><h3>GitHub</h3></td>
                            <td><h3>: <Button style={{width:60,height:30}} className='' href='https://github.com/julkin123?tab=repositories' variant="primary">Go</Button></h3></td>
                        </tr>
                        <tr>
                            <td><h3>Instagram</h3></td>
                            <td><h3>: <Button style={{width:60,height:30}} className='' href='https://www.instagram.com/julkin_george/' variant="primary">Go</Button></h3></td>
                        </tr>
                    </tbody>
                </table>



            </div>

            </div>

        </div>
    )
}

export default Contacts
