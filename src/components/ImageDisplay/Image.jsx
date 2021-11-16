import "./image.css"

const Image =({id,title,image,count})=>{

    return(
        <div className="image">
         <img src={image} alt={title} />
         <div className="image-footer">
         <span className="thumb"><i className="fas fa-thumbs-up"></i></span>
         <span>{count}</span>
         </div>
        </div>
    )
}

export default Image;