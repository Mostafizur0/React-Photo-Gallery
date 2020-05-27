import React from 'react';

import ImageCard from './ImageCard';

import './ImageList.css';

const imageList = props => {
    const imageList = props.images.map((img) => {
        return <ImageCard key={img.id} image={img} />
    })

    return (<div className='image-list'>{imageList}</div>)
}

export default imageList;
