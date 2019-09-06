import React, { Component } from 'react';
// import ListImage from '../../component/ListImage/ListImage';
// import Product from '../product/Product';
// import CardProduct from '../cardproduct/CardProduct';
import BlogPost from '../blogpost/BlogPost';
class Home extends Component{
    render(){
        return(
            <div>
                {
                                    // <center><h1>Images List</h1></center>
                                    // <hr/>
                                    // <ListImage title="Gema gagah cakepp" durasi="10 menti"/>
                                    // <ListImage title="Gema lagi ngoding di perpus"/>
                }
                {/* <Product/> */}

                <BlogPost/>
            </div>
        )
    }
}

export default Home;