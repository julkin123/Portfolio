import React from 'react'
import "./About.css"
function About() {
    return (
        <div className='container-fluid'>
            <div className='  pt-5 m-2 mt-5 about '>
                <h1>About Me</h1>


                <div className='pt-4 '>

                    <h3  >Hello! I’m Julkin George, a passionate Backend Developer with 2 years of professional experience and a strong foundation in Java development. Currently, I’m pursuing my Master’s in Mathematics at Leibniz University Hannover, where I’m refining my analytical and problem-solving skills to complement my technical expertise. <br />

                        I enjoy building efficient, scalable backend systems and have completed several personal projects to enhance my skills, including:</h3>

                    <ul className='aboutprojects'>
                        <li>
                            E-commerce Application: A platform with robust role-based access control, enabling secure management of users and inventory.
                        </li>
                        <li>Blogging App: A content platform where users can manage accounts, create posts, and interact through comments.</li>
                        <li>Employee Management System: A straightforward tool for managing employee records with basic CRUD operations.</li>
                    </ul>

                    <h3>My primary focus is on Java, and I’m constantly exploring technologies like Spring Boot, microservices architecture, and database optimization to expand my expertise. With a strong drive to learn and a curiosity for new technologies, I’m always eager to contribute to impactful projects.

                        Let’s connect and build something amazing together!</h3>

                </div>

                <h1>Skills</h1>

                <div className='pt-4 skillList'>



                    <ul>
                        <li>Programming Languages & Frameworks:</li>
                        <ol>
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>hibernet</li>
                            <li>React</li>

                        </ol>


                        <li>Database Management:</li>

                        <ol>

                            <li>MySQL</li>
                        </ol>

                        <li>API Development & Testing:</li>

                        <ol>
                            <li>Rest API</li>
                            <li>Postman</li>

                        </ol>

                        <li>Web Development:</li>
                        <ol>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Bootstrap</li>

                        </ol>
                        <li>Testing & Debugging:</li>

                        <ol>
                            <li>JUnit</li>
                        </ol>



                    </ul>


                </div>
                <h1>Experience</h1>
                <div>
                    <h4>Infosys Ltd</h4>
                    <h6> Mysore, Karnataka, pin code 570027, India.</h6>


                    <div className='mt-5'>

                        <h6>(01/01/2024)-(02/05/2024)</h6>
                        <h2>Senior System Associate</h2>

                        <h3>As a Backend Developer, I contributed to designing, developing, and maintaining robust and scalable backend systems using industry-standard technologies. My key responsibilities and achievements included:</h3>


                        <ul className='skillList'>
                            <li>Backend Development: Developed and maintained backend services using Java, Spring Boot, and Hibernate to ensure seamless functionality and performance.</li>

                            <li>Database Management: Designed and optimized relational database schemas and queries in MySQL to support dynamic application requirements.</li>

                            <li>API Development: Built and consumed RESTful APIs for efficient communication between client and server applications.</li>
                            <li>Collaborative Projects: Worked in agile teams to deliver high-quality solutions within tight deadlines, ensuring compliance with client requirements and standards.</li>
                        </ul>
                        <h3>This role provided me with hands-on experience in backend development, strengthened my problem-solving skills, and deepened my understanding of scalable application architecture.

                        </h3>

                    </div>
                    <div className='mt-5'>

                        <h6>(01/01/2023)-(31/12/2023)</h6>
                        <h2>System Associate</h2>

                        <h3>As a junior backend developer, I contributed to the development and maintenance of software applications, focusing on delivering high-quality solutions. My key responsibilities and achievements included:</h3>
                        <ul className='skillList'>
                            <li>Application Development: Assisted in developing backend components using Java, adhering to coding standards and best practices.

                            </li>
                            <li>
                                API Integration: Assisted in implementing and integrating REST APIs for seamless communication between modules.
                            </li>
                        </ul>
                    </div><div className='mt-5'>


                        <h6>(07/03/2022)-(31/12/2022)</h6>
                        <h2>Operational Executive</h2>
                        <h3>As an Operations Executive, I supported the development, maintenance, and deployment of software systems, ensuring smooth operations and functionality. My key responsibilities included:</h3>
                        <ul className='skillList'>
                            <li>
                                Support and Maintenance: Assisted in identifying and resolving system issues, contributing to consistent performance and uptime.
                            </li>
                            <li>Documentation and Reporting: Prepared and maintained technical documentation, ensuring all processes and solutions were well-documented.</li>
                        </ul>
                    </div>




                </div>
                <h1>Education</h1>
                <div className='mt-5 skillList'>

                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Course</th>
                                <th>University</th>
                                <th>Adress</th>


                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>2024-current</td>
                                <td>Msc Mathematics</td>
                                <td>Leibniz University Hannover</td>
                                <td>Gottfried Wilhelm Leibniz Universität Hannover
                                    Welfengarten 1
                                    30167 Hannover
                                    Germany

                                </td>
                            </tr>
                            <tr>
                                <td>2018-2021</td>
                                <td>Bsc Mathematics</td>
                                <td>Calicut University</td>
                                <td>Sahrdaya College of Advanced Studies Kodakara, District Thrissur, Pincode-680684, Kerala, India.</td>
                            </tr>
                            <tr>
                                <td>2016-2018</td>
                                <td>12th</td>

                                <td>CJMAHSS Varandarappilly</td>
                                <td>CJMAHSS Varandarappilly, Thrissur, Kerala, India</td>
                            </tr>
                            <tr>
                                <td>2015-2016</td>
                                <td>10th</td>
                                <td>CJMAHSS Varandarappilly</td>
                                <td>CJMAHSS Varandarappilly, Thrissur, Kerala, India</td>
                            </tr>
                        </tbody>
                    </table>


                </div>

                <div className='text-center justify-content-center'><h3>....</h3></div>
            </div>

        </div>
    )
}

export default About
