import React from 'react'
import "./common.css"
import Button from 'react-bootstrap/Button';
function EmployeeManagement() {
    return (
        <div className='container-fluid'>
        <div className='row pt-5 m-2 mt-5 text-center justify-content-center'>
            <h1>Project Details</h1>

            <div className='justify-content-start text-start  '>
                <h4> The Employee Management System (EMS) is a web-based application designed to streamline the management of employee data. It allows HR teams, managers, and administrators to perform various CRUD (Create, Read, Update, Delete) operations on employee records. This system is equipped with features for viewing, adding, updating, and deleting employee information, as well as sorting employees based on different attributes such as job level.
                </h4>
                <h3 className='mt-5 '>Key Features:</h3>
                <ul className=' '>
                    <li>Get All Employees: Fetches and displays a list of all employees in the system, making it easy to view the entire employee roster.</li>
                    <li>Get Employee by ID: Allows users to retrieve detailed information for a specific employee using their unique employee ID.</li>
                    <li>Create Employee: Facilitates the addition of new employee records to the database with necessary details like name, job title, department, salary, etc.</li>
                    <li>Handle Duplicate Employee Records: Prevents the creation of an employee record if one already exists, ensuring data consistency.</li>
                    <li>Update Employee Information: Allows for the updating of existing employee records, including job details, personal information, and more.</li>
                    <li>Delete Employee: Provides the functionality to remove an employee from the system, ensuring that outdated or terminated records are efficiently deleted.</li>
                    <li>Sort Employees by Job Level: Sorts employees based on their job level (e.g., entry-level, mid-level, senior-level), helping to organize the employee list based on rank or hierarchy.</li>
                </ul>


                
               

                <h3 className='mt-5'>Technology Used:</h3>

                <ul className=''>
                    <li>Framework: Spring Boot</li>
                    <li>Database: MySQL</li>
                    <li>ORM: Hibernate</li>
                    <li>Unit Tesing: JUnit</li>
                    <li>API: RESTful API</li>


                    <li>Version Control: Git</li>
                    <li>API Testing: Postman</li>

                </ul>
                <div className='text-center'>
          
            <Button style={{ }} className='m-1' href='https://github.com/julkin123/EmployeeManagementSystem.git'  variant="primary">Source code</Button>

            <Button style={{ }} className='m-1' href='https://documenter.getpostman.com/view/38208774/2sAYJ3DLtS' variant="primary">Documentation </Button>
            </div>
            </div>
            <h3 className='m-5 '>.....</h3>
            </div>
        </div>
    )
}

export default EmployeeManagement
