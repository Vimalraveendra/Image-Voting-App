import "./image.css"

const Image =({id,title,image,count,handleIncrement})=>{

    return(
        <div className="image">
         <img src={image} alt={title} />
         <div className="image-footer">
         <span className="thumb"><i className="fas fa-thumbs-up"></i></span>
         <span onClick={handleIncrement}>{count}</span>
         </div>
        </div>
    )
}

export default Image;