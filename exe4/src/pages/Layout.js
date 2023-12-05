
// import { Outlet, Link } from "react-router-dom";

// const Layout = () => {
//     return (
//         <>


//             <nav class="navbar navbar-expand-lg navbar-light bg-light">
//                 <a class="navbar-brand" href="/">navbar</a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarNav">
//                     <ul class="navbar-nav">
//                         <li class="nav-item active">
//                             {/* <Link to="/">Home</Link> */}
//                             <a class="nav-link"  href="/">Home <span class="sr-only">(Home)</span></a>
//                         </li>
//                         <li class="nav-item">
//                             {/* <Link to="/blogs">Blogs</Link> */}
//                             <a class="nav-link" href="/blogs">blogs</a>
//                         </li>
//                         <li class="nav-item">
//                             {/* <Link to="/contact">Contact</Link> */}
//                             <a class="nav-link" href="/contact">contact</a>
//                         </li>
//                         {/* <li class="nav-item">
//                             <a class="nav-link disabled" href="#">Disabled</a>
//                         </li> */}
//                     </ul>
//                 </div>
//             </nav>



//             {/* <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/blogs">Blogs</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact">Contact</Link>
//                     </li>
//                 </ul>
//             </nav> */}

//             <Outlet />
//         </>
//     )
// };

// export default Layout;
//=====bootstrap=================
import { Outlet, NavLink } from "react-router-dom";
import { Container, Nav, Navbar,Col ,Row } from 'react-bootstrap';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Layout() {
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink}   to="/">Home</Nav.Link>
                        {/* <Link to="/">Home</Link> */}
                        <Nav.Link as={NavLink} to="/blogs">Blogs</Nav.Link>
                        {/* <Link to="/blogs">Blogs</Link> */}
                        <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={NavLink} to="/Login">Login</Nav.Link>
                            <Nav.Link as={NavLink} to="/Siginup">Siginup</Nav.Link>
                        {/* <Link to="/contact">Contact</Link> */}
                        {/* <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
            {/* <div className="b-example-divider"></div>

            <Container>
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <Col md={4} className="d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg className="bi" width="30" height="24">
                                <use xlinkHref="#bootstrap" />
                            </svg>
                        </a>
                        <span className="text-muted">&copy; 2021 Company, Inc</span>
                    </Col>

                    <Nav className="col-md-4 justify-content-end list-unstyled d-flex">
                        <Nav.Item className="ms-3"><Nav.Link className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter" /></svg></Nav.Link></Nav.Item>
                        <Nav.Item className="ms-3"><Nav.Link className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram" /></svg></Nav.Link></Nav.Item>
                        <Nav.Item className="ms-3"><Nav.Link className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook" /></svg></Nav.Link></Nav.Item>
                    </Nav>
                </footer>
            </Container> */}

            <div className="b-example-divider"></div>

            <Container>
                <footer className="py-3 my-4">
                    <Nav className="justify-content-center border-bottom pb-3 mb-3">
                        <Nav.Item><Nav.Link href="#" className="nav-link px-2 text-muted">Home</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="nav-link px-2 text-muted">Features</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="nav-link px-2 text-muted">Pricing</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="nav-link px-2 text-muted">FAQs</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="#" className="nav-link px-2 text-muted">About</Nav.Link></Nav.Item>
                    </Nav>
                    <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
                </footer>
            </Container>

            <div className="b-example-divider"></div>

      
    

        </>
        
    );
}

export default Layout;