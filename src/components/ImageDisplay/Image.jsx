import "./image.css"


const Image =({id,title,image})=>{
  

   const handleIncrement=(e)=>{
    let target = e.target;
    target.style.color='blue'; 
    target.parentNode.nextSibling.textContent++;
   }
    return(
        <div className="image">
         <img src={image} alt={title} />
         <div className="image-footer">
         <div className="image-left-thumb" >
         <span className="thumb"><i className="far fa-thumbs-up" onClick={handleIncrement}></i></span>
         <span >0</span>
         </div>
         <div className="image-right-thumb" >
         <span className="thumb"><i className="far fa-thumbs-down" onClick={handleIncrement}></i></span>
         
         <span >0</span>
         </div>
         
         </div>
         
        </div>
    )
}

export default Image;