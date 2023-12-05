import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Home = () => {

    const backgroundImageUrl = 'url("https://media.gettyimages.com/photos/the-painter-hands-picture-id1190200652")';
    const backgroundImageUrlcard = ['https://imgc.artprintimages.com/img/print/scullery-maids_u-l-p943ib0.jpg?h=550&p=0&w=550&background=fbfbfb")',
        'https://i.pinimg.com/originals/5d/c5/21/5dc5215f02f4093f8d95a37f81d7625b.jpg)'];
    const containerStyle = {
        background: backgroundImageUrl,
        backgroundSize: 'cover', // You can adjust these properties as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        /* Other CSS properties */
        width: '100%',
        height: '500px', // Set the height or adjust it according to your needs
    };
    return (
        <>
            <h1>Home</h1>
            <div>
                <div style={containerStyle} className="banner-container">
                    <div className="text-center">
                        <h1 className=" text-6xl text-orange-600 font-bold">Welcome to Codebun</h1>
                        <h4 className="text-4xl mt-8 text-white">Your very own personal tutorial corner</h4>
                    </div>
                </div>
            </div>

            <Row xs={1} md={3} className="g-4">
                {Array.from({ length: 9 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Img variant="top" src={backgroundImageUrlcard} />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Home;

// function GridExample() {
//     return (
//         <Row xs={1} md={2} className="g-4">
//             {Array.from({ length: 4 }).map((_, idx) => (
//                 <Col key={idx}>
//                     <Card>
//                         <Card.Img variant="top" src="holder.js/100px160" />
//                         <Card.Body>
//                             <Card.Title>Card title</Card.Title>
//                             <Card.Text>
//                                 This is a longer card with supporting text below as a natural
//                                 lead-in to additional content. This content is a little bit
//                                 longer.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>
//     );
// }

// export default GridExample;
// import React from 'react';


// function MyHeader() {
//     return (
//         <header>
//             <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
//                 <a className="navbar-brand" href="#">Carousel</a>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarCollapse">
//                     <ul className="navbar-nav mr-auto">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link" href="#">Link</a>
//                         </li>
//                         <li className="nav-item">
//                             <a className="nav-link disabled" href="#">Disabled</a>
//                         </li>
//                     </ul>
//                     <form className="form-inline mt-2 mt-md-0">
//                         <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>
//         </header>
//     );
// }

// function MyCarousel() {
//     return (
//         <main role="main">
//             <div id="myCarousel" className="carousel slide" data-ride="carousel">
//                 <ol className="carousel-indicators">
//                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//                     <li data-target="#myCarousel" data-slide-to="1"></li>
//                     <li data-target="#myCarousel" data-slide-to="2"></li>
//                 </ol>
//                 <div className="carousel-inner">
//                     <div className="carousel-item active">
//                         <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide" />
//                         <div className="container">
//                             <div className="carousel-caption text-left">
//                                 <h1>Example headline.</h1>
//                                 <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//                                 <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide" />
//                         <div className="container">
//                             <div className="carousel-caption">
//                                 <h1>Another example headline.</h1>
//                                 <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//                                 <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="carousel-item">
//                         <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide" />
//                         <div className="container">
//                             <div className="carousel-caption text-right">
//                                 <h1>One more for good measure.</h1>
//                                 <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//                                 <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                     <span className="sr-only">Next</span>
//                 </a>
//             </div>
//         </main>


//     );
// }

// function MyMarketing() {
//     return (
//         <div className="container marketing">
//             {/* Rest of the marketing section */}
//         </div>
//     );
// }

// export default function MyComponent() {
//     return (
//         <div>
//             <MyHeader />
//             <MyCarousel />
//             <MyMarketing />
//         </div>
//     );
// }
