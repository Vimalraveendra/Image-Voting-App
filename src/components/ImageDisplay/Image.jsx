import react from 'react';

const Image =({id,title,image})=>{

    return(
        <div>
         <img src={image} alt={title} />
        </div>
    )
}

export default Image;