import React from 'react'
import "./common.css"
import Button from 'react-bootstrap/Button';
function Ecommerce() {
    return (
        <div className='container-fluid'>
        <div className='row pt-5 m-2 mt-5 text-center justify-content-center'>

            <h1>Project Details</h1>
            <div className='justify-content-start text-start'>

                <h4>This e-commerce application is a robust platform designed to facilitate seamless buying and selling of products, catering to both end-users and administrators through distinct role-based functionalities. The application offers a secure and user-friendly experience, underpinned by modern authentication mechanisms such as JSON Web Tokens (JWT) to ensure data security and user privacy.</h4>
                <h3 className='mt-5 '>Key Features</h3>
                <h3 className=' mt-5'>Features for Users:</h3>




                <ul className='  '>
                    <li>Account Management: Users can create and manage their accounts, allowing for personalized interactions with the platform.</li>
                    <li>Product Buying and Selling: Users can list their products for sale and browse items listed by others, making it a dynamic marketplace.</li>
                    <li>Cart Functionality: Users can add items to their cart and view a detailed breakdown, including the subtotal and total cost of their selections. This feature ensures transparency and ease during the checkout process.</li>

                    <li>Watchlist Management: Users can maintain a watchlist by adding or removing products they are interested in. This helps them keep track of potential purchases.</li>

                    <li>Feedback System: Buyers can leave feedback on their purchases, fostering a community of trust and quality assurance.</li>
                </ul>

                <h3 className=' mt-5'>Features for Administrators:</h3>
                <ul className=''>

                    <li>Category Management: Administrators have the authority to create, update, and manage product categories, ensuring the platform remains well-organized and intuitive.</li>
                    <li>User Oversight: Administrators can monitor activities to maintain the integrity and security of the platform.</li>

                </ul>

                <h3 className='mt-5'>Security and Authentication:</h3>

                <ul className=' '>
                    <li>
                        Role-Based Login: The application supports role-based access control, distinguishing between users and administrators. Each role has defined permissions to prevent unauthorized access.
                    </li>
                    <li>
                        JWT Authentication: The app uses JWT tokens for secure login sessions, protecting user credentials and sensitive data during interactions with the platform.
                    </li>


                </ul>
                <h3 className='mt-5'>Additional Highlights:</h3>

                <ul className=' '>
                    <li>
                        Efficient Database Management: Backend architecture optimizes data storage and retrieval for products, user accounts, and feedback.
                    </li>
                    <li>Flexibility: The backend database design adheres to a loosely coupled architecture, allowing independent updates and scaling of database components without disrupting the overall system.</li>
                    <li>
                        Interoperability: Modules interact through well-defined APIs or interfaces, ensuring that changes in one module do not cascade into others, promoting maintainability.
                    </li>
                    <li>Data Optimization: Efficient querying and indexing mechanisms ensure smooth handling of large datasets for user accounts, product listings, and feedback.</li>
                </ul>

                <h3 className='mt-5 '>Technology Used</h3>

                <ul  className=' '>
                    <li>Framework: Spring Boot</li>
                    <li>API: RESTful API</li>
                    <li>Database: MySQL</li>
                    <li>ORM: Hibernate</li>
                    <li>Authentication: JWT (JSON Web Tokens)</li>
                    <li>Security: PasswordEncoder</li>
                    <li>Version Control: Git</li>
                    <li>API Testing: Postman</li>
                    
                </ul>

                <div className=' text-center '>
                 
            <Button style={{ }} className='m-1' href='https://github.com/julkin123/E-commerceWebsite.git'  variant="primary">Source code</Button>

            <Button  style={{ }} className='m-1' href='https://documenter.getpostman.com/view/38208774/2sAYJ6BK59' variant="primary">Documentation </Button>
            </div>
              

            </div>
            <h3 className='m-5 '>.....</h3>
            </div>
            
        </div>
    )
}

export default Ecommerce
