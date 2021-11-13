import "./image.css"

const Image =({id,title,image})=>{

    return(
        <div className="image">
         <img src={image} alt={title} />
         <div className="image-footer">
         <span className="thumb"><i className="fas fa-thumbs-up"></i></span>
         <span>0</span>
         </div>
        </div>
    )
}

export default Image;