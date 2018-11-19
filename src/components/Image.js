import React from 'react';

const Image = props =>
    <div className="image-item">
        <a href={props.link}>
            <img className="image" src={props.url} alt="" />
        </a>
    </div>;

export default Image;