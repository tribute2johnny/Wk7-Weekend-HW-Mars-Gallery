import React, { useState, useEffect } from 'react';

const ImageContainer = () => {
    
    const [images, setImages] = useState([]);


    useEffect(() => {
        getImages();
    }, [])
    
    const getImages = function(){
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=DEMO_KEY&sol=1000')
        .then(res => res.json())
        .then(images => setImages(images))
    }


    return
}





export default ImageContainer;