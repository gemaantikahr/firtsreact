import React from 'react';
import './ListImage.css';
const ListImage = (props) =>{
    return (
        <div className="containeratas">
            <div className="card">
                <img className="cover-yt" src="http://i3.ytimg.com/vi/mmhUzNAThb4/hqdefault.jpg" alt=""/>
                <p className="texttitle-p">{props.title}</p>
                <p className="texttitle-p">{props.durasi}</p>
            </div>
        </div>
    )
}

export default ListImage;