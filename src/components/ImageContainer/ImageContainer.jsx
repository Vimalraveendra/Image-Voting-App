import "./imageContainer.css"
import Image from '../ImageDisplay/Image';

const ImageContainer = ({images,count})=>{
    return(
        <div className="image-container">
           {
               images.map(image=>{
                   return <Image    
                   key={image.idMeal}
                   id={image.idMeal}
                   image={image.strMealThumb}
                   title={image.strMeal}
                   count={count}
                   />
               })
           }
          
        </div>
    )
}

export default ImageContainer;