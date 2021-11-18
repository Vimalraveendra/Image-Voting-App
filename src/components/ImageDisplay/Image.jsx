import "./image.css"
import {useState}  from 'react'

const Image =({id,title,image})=>{
   const[count ,setCount] =useState(0)

   const handleIncrement=(e)=>{
       console.log("hello",e.target)
   }
    return(
        <div className="image">
         <img src={image} alt={title} />
         <div className="image-footer">
         <span className="thumb"><i className="fas fa-thumbs-up"></i></span>
         <span id={id} onClick={handleIncrement}>{count}</span>
         </div>
        </div>
    )
}

export default Image;