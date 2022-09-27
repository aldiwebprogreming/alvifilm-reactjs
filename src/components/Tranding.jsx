import {Container, Row, Col, Card, Button} from "react-bootstrap"
import warkop from "../assets/bg/warkop.jpg"
import hello from "../assets/bg/hello.jpeg"
import garis from "../assets/bg/garis.jpg"
const Tranding = () => {
    return(

        <div>
            <Container>
                <br />
                <div className="labelTranding text-white">
                    <h3>Movies Tranding</h3>
                </div>
                <Row>
                    <Col md={4} className="mt-1" id="tranding">
                    <Card >
                        <Card.Img variant="top" src={warkop} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>WARKOP DKI REBORN</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={hello} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>HELLO GHOST</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className="mt-1">
                    <Card >
                        <Card.Img variant="top" src={garis} className="posterimage" />
                        <Card.Body className="bg-dark text-white text-center">
                            <Card.Title>GARIS WAKTU</Card.Title>
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

export default Tranding;