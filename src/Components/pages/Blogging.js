import React from 'react'
import "./common.css"

function Blogging() {
  return (
    <div className='root text-center justify-content-center'>

    <h1>Project Details</h1>
    <div className='justify-content-start text-start m-4'>

       <h4>
       This is a straightforward and functional blogging API designed to facilitate content creation and interaction among users. The API provides a structured platform for creating posts, categorizing them, and enabling discussions through comments. Additionally, it includes search and pagination features, making it a versatile tool for managing and exploring blog content.</h4>
          <h3 className='m-5 '>Core Features:</h3>
          <h3 className='m-5 '>Post Management:</h3>

          <ol className='m-5'>
            <li>Create Posts:</li>
            <ul className='m-5'>
                <li>Users can create and publish blog posts with a title, content, and associated metadata such as timestamps and author information.</li>
            </ul>
            <li>Categorization:</li>
            <ul className='m-5'>
                <li>Posts can be assigned to specific categories, allowing for organized content management and easy filtering.</li>
            </ul>
            <li>Pagination:</li>
            <ul className='m-5'>
                <li>The API includes pagination for listing posts, enabling efficient navigation and retrieval of posts, even in scenarios with extensive content.</li>
            </ul>
          </ol>
          <h3 className='m-5 '>Comments:</h3>
          <ol className='m-5'>
            <li>User Comments:</li>
            <ul className='m-5'>
                <li>Users can leave comments on posts to engage in discussions or provide feedback.</li>
                <li>Comments are linked to specific posts, ensuring a clear conversation thread.</li>
              
            </ul>
            
          </ol>
          <h3 className='m-5 '>Search Functionality:</h3>
          <ol className='m-5'>
            <li>Keyword-Based Search:</li>
            <ul className='m-5'>
                <li>Users can search for posts using keywords found in the title or content, streamlining the discovery of relevant content.</li>
               
              
            </ul>
            
          </ol>

          <h3 className='m-5 '>Technology Used</h3>

                <ul  className='m-5'>
                    <li>Framework: Spring Boot</li>
                    <li>Database: MySQL</li>
                    <li>ORM: Hibernate</li>
                    <li>Unit Tesing: JUnit</li>
                    
                    <li>API: RESTful API</li>
                    <li>Version Control: Git</li>
                    <li>API Testing: Postman</li>
                    
                </ul>

    </div>
    <h3 className='m-5 '>.....</h3>

</div>
  )
}

export default Blogging
