import "./image.css"

const Image =({id,title,image})=>{

    return(
        <div className="image">
         <img src={image} alt={title} />
        </div>
    )
}

export default Image;