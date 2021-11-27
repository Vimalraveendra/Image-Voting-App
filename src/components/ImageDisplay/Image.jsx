import "./image.css"


const Image =({id,title,image})=>{
  

   const handleIncrement=(e)=>{
       e.target.textContent++;
   }
    return(
        <div className="image">
         <img src={image} alt={title} />
         <div className="image-footer">
         <span className="thumb"><i className="fas fa-thumbs-up"></i></span>
         <span id={id} onClick={handleIncrement}>0</span>
         </div>
        </div>
    )
}

export default Image;