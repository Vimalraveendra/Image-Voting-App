
import Image from '../ImageDisplay/Image';

const ImageContainer = ({images})=>{
    console.log(images)
    return(
        <div className="image-container">
           {
               images.map(image=>{
                   return <Image
                   key={image.id}
                   id={image.id}
                   image={image.webformatURL}
                   title={image.tags}
                   />
               })
           }
           <Image />
        </div>
    )
}

export default ImageContainer;