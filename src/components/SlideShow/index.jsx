import Slider from "react-slick";
import { Box } from "@mui/material";
import { importImages } from '../../utils/importImages';

const slides = [
    "slideshow0.jpg",
    "slideshow1.jpg",
    "slideshow2.jpg",
    "slideshow3.jpg",
    "slideshow4.jpg",
    "slideshow5.jpg",
    "slideshow6.jpg",
    "slideshow7.jpg",
    "slideshow8.jpg"
];
const imageMap = importImages("slides");

const SlideShow = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Slider {...settings}>
        {slides.map(filename => (
          <Box key={filename}>
            <img
              src={imageMap[filename]}
              alt={filename}
              style={{
                width: "100%",
                maxHeight: "400px",
                objectFit: "cover",
                borderRadius: "12px",
              }}/>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SlideShow;
