import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./projects.css"
import { useNavigate,Link } from 'react-router-dom';
function Projects() {
const navigator=useNavigate()

  return (

    <div className='root'>
       <h1>
        Projects
      </h1>
    
    <div className='projectcontainer'>
      
     

      <div className='p-3'>
        <Card style={{ width: 318 }}>
          <Card.Img variant="top" style={{ width: 318, height: 200 }} src="https://imgs.search.brave.com/u6uF0XijNa3O9dsg3ppzNwyy4kvFOhnnKHHs2JyGcv4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/L296NnE1NE95eGVI/ZEpNMlVUdE5VakQ5/ajQ0LmpwZWc" />
          <Card.Body>
            <Card.Title>E-Commerce App</Card.Title>
            <Card.Text>
            This is an E-Commerce backend application that deals with product and user management.
            </Card.Text>

            <div className='buttoncontainer'>
            <Button className='buttonclass' id='detailsbutten'  variant="primary"><Link   to="/ecommerce">Details</Link></Button>
            <Button className='buttonclass' href='https://github.com/julkin123/E-commerceWebsite.git'  variant="primary">Source code</Button>

            <Button className='buttonclass' href='https://documenter.getpostman.com/view/38208774/2sAYJ6BK59' variant="primary">Documentation </Button>
            </div>
           
          </Card.Body>
        </Card>


      </div>
      
      <div className='p-3'>
        <Card style={{ width: 318 }}>
          <Card.Img variant="top" style={{ width: 318, height: 200 }} src="https://imgs.search.brave.com/Ys98JRaItaBunzlk8lA4DQhE-OiE4xeDrqssIOZmxzQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWdlZWtzYmxvZy5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDIvV29yZFBy/ZXNzLWJsb2dnaW5n/LWFwcC1zY3JlZW5z/aG90LTEuanBn" />
          <Card.Body>
            <Card.Title>Blogging App</Card.Title>
            <Card.Text>
            This is a simple blogging application that deals with posts and user management.
            </Card.Text>
            <div className='buttoncontainer'>
            <Button className='buttonclass' id='detailsbutten' variant="primary"><Link   to="/blogging">Details</Link></Button>
            
            <Button className='buttonclass' href='https://github.com/julkin123/BloggingApp.git' variant="primary">Source code</Button>

            <Button className='buttonclass' href='https://documenter.getpostman.com/view/38208774/2sAYJ4j1CK' variant="primary">Documentation </Button>
            </div>
          </Card.Body>
        </Card>

      </div>

      <div className='p-3'>


        <Card style={{ width: 318 }}>
          <Card.Img variant="top" style={{ width: 318, height: 200 }} src="https://imgs.search.brave.com/cOJNvJyEPolrLQqwtZaoEwPb4Rhv5QTzmYBjync46-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9lZGFwcC13ZWJz/aXRlL1pndVl6OHQy/VVVjdkJVaEZfRW1w/bG95ZWVtYW5hZ2Vt/ZW50LnBuZz9hdXRv/PWZvcm1hdCxjb21w/cmVzcw" />
          <Card.Body>
            <Card.Title>Employee Management</Card.Title>
            <Card.Text>
            This is an Employee Management app that handles managing employee details.
            </Card.Text>
            <div className='buttoncontainer'>
            <Button className='buttonclass' id='detailsbutten' variant="primary"><Link   to="/employeemanagementapp">Details</Link></Button>
            <Button className='buttonclass' href='https://github.com/julkin123/EmployeeManagementSystem.git'  variant="primary">Source code</Button>

            <Button className='buttonclass' href='https://documenter.getpostman.com/view/38208774/2sAYJ3DLtS' variant="primary">Documentation </Button>
            </div>
          </Card.Body>
        </Card>
        
      </div>
    </div>
    </div>
  )
}

export default Projects
