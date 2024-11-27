const ImageDetails = ({ image, headline }) => {
    return (
        <div>
        <h2>{headline}</h2>
        <img src={image} alt={headline} />
        </div>
    );
    }
    export default ImageDetails;