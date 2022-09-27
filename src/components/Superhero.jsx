import {Container, Row, Col, Card, Button} from "react-bootstrap"
import gatot from "../assets/bg/gatot.jpg"
import garuda from "../assets/bg/garuda.jpg"
import gundala from "../assets/bg/gundala.jpg"
import sri from "../assets/bg/sri.jpg"
import wiro from "../assets/bg/wiro.jpg"
import asiap from "../assets/bg/asiap.jpg"
const Superhero = () => {
    return(

        <div>
            <Container>
                <br />
                <div className="labelTranding text-white">
                    <h3>Movies Superhero</h3>
                </div>
                <Row>
                    <Col md={4} className="mt-1" id="superhero">
                    <Card >
                        <Card.Img variant="top" src={gatot} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>GATOTKACA</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={garuda} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>GARUDA</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={gundala} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>GUNDALA</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={sri} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>SRI ASIH</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={wiro} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>WIRO SABLENG</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={asiap} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>ASHIAP MAN</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br />
        </div>
    )
}

export default Superhero;