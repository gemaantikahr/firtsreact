import React, { Component, Fragment } from 'react';
import './BlogPost.css';
import Post from '../../component/post/Post';
import axios from 'axios';

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
                <center><div className="form-input">
                    <label htmlFor="">Title</label>
                    <input type="text" name="title" onChange={this.handleFormChange}/>
                    <label htmlFor="">Description</label>
                    <input type="text" name="body" onChange={this.handleFormChange}/>
                    <button className="btn-delete" onClick={this.handleformsubmit}>Add</button>
                </div>
                </center>
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