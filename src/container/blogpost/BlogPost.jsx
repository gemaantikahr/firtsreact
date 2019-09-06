import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/post/Post';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

class BlogPost extends Component{
    state={
        post: [],
        FormBlogPost : {
            id : 1,
            userId : 1,
            title : '',
            body : ''
        }
    }
    componentDidMount(){
        this.getPostAPI();
    }

    getPostAPI = () =>{
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc').then((result)=>{
            this.setState({
                post : result.data
            })
        })
    }
    handleremove = (id) =>{
        axios.delete(`http://localhost:3004/posts/${id}`).then((res)=>{
            this.getPostAPI();
        })
    }

    handleFormChange = (data) =>{
        let FormBlogPostnew = {...this.state.FormBlogPost};
        let idtime = new Date().getTime();
        console.log(idtime);
        FormBlogPostnew['id'] = idtime;
        FormBlogPostnew[data.target.name] = data.target.value;
        this.setState({
            FormBlogPost : FormBlogPostnew
        })
    }

    handleformsubmit = () =>{
        this.postdatatoAPI();
    }
    postdatatoAPI = () =>{
        axios.post('http://localhost:3004/posts', this.state.FormBlogPost).then((res)=>{
            console.log(res);
            this.getPostAPI();
        }, (err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <Fragment>
                <Container>
                <Row>
                    <Col xs={6}>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter Titlte" name="title" onChange={this.handleFormChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Enter Body" name="body" onChange={this.handleFormChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={this.handleformsubmit}>
                        Save
                    </Button>
                    </Form>
                    </Col>
                </Row>
                </Container>
            {
                this.state.post.map(post=>{
                    return<Post key={post.id} data={post} remove={this.handleremove}/>
                })

            }
            </Fragment>
        )
    }
}


export default BlogPost;