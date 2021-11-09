import react from 'react';
import Image from '../ImageDisplay/Image';

const ImageContainer = ({images})=>{
    console.log(images)
    return(
        <div>
           <h2>Image container</h2>
           <Image />
        </div>
    )
}

export default ImageContainer;