import styled from "styled-components";

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledImage = styled.div`
  border: 1px solid #ddd;
  padding: 5px;
  margin: 5px;
`;

export default function Travels() {
  const imageUrls = [
    "https://www.visitdenmark.com/sites/visitdenmark.com/files/2019-06/Camel%27s-Head-Rocks-Bornholm-Semko-Balcerski.jpg",
    "https://www.kystognaturturisme.dk/sites/kystognaturturisme.com/files/2023-07/bornholm-opal-lake_%C2%A9Stefan-Asp.jpg",
    "https://danhostelsandvig.dk/wp-content/uploads/2020/11/helligdomsklipperne1-1200x550.jpg",
    "https://www.sarahinthegreen.com/wp-content/uploads/2020/01/Helligdomsklipperne_bornholm_thumb.jpg",
    "https://www.dcu.dk/sites/default/files/styles/16_9_large/public/2021-01/dcu_danmark_bornholm_rundkirke_foto_joergen_w._froehlich.jpg?itok=mTbAAN-g",
    "https://www.campingbornholm.dk/CustomerData/Files/Images/Archive/3-c2a/bornholm_3103.jpg",
  ];
  const headlines = ['Camel´s Head Rocks', 'Opal Lake', 'Helligdomsklipperne', 'Helligdomsklipperne', 'Rundkirke', 'Camping'];
  return (
    <>
      <h1>Travels</h1>
      <ImageContainer>
        {imageUrls.map((imageUrl, index) => (
          <StyledImage key={index}>
            <h2>{headlines[index]}</h2>
            <img
              src={imageUrl}
              alt={`travel-${index}`}
              width="300"
              height="300"
            />
          </StyledImage>
        ))}
      </ImageContainer>
    </>
  );
}
