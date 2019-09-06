import React from 'react';
// import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Post = (props) =>{
    return(
        <>
        <Container>
            <Row>
                <Col xs={6}>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="http://placeimg.com/640/480/nature" />
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                            {props.data.body}
                        </Card.Text>
                        <Button variant="danger" onClick={()=>props.remove(props.data.id)}>Delete</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Post;