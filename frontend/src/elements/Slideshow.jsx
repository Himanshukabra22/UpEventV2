// import img1 from "../assets/bp-miller-rGDv4llw-mk-unsplash.jpg"
// import img2 from "../assets/gabriel-heinzer-xbEVM6oJ1Fs-unsplash.jpg"
// import img3 from "../assets/mitchell-luo-FWoq_ldWlNQ-unsplash.jpg"
const Slideshow = () => {
  return (
    <>
    <div className="d-flex my-3 mx-auto justify-content-center">
<div
  id="carouselExampleControls"
  className="carousel mx-0 px-0 d-inline-block slide w-75 h-autp"
  data-ride="carousel"
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://random.imagecdn.app/230/150" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://random.imagecdn.app/230/150" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://random.imagecdn.app/230/150" alt="Third slide" />
    </div>
  </div>
  <a
    className="carousel-control-prev"
    href="#carouselExampleControls"
    role="button"
    data-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a
    className="carousel-control-next"
    href="#carouselExampleControls"
    role="button"
    data-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    </>
  );
};

export default Slideshow;
