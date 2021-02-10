import './App.css';
import Carousel from 'react-bootstrap/Carousel'

function Accueil() {
  return (
    <div>
      <h1 className={"title1"}>Welcome</h1>

      <Carousel>
        <Carousel.Item>
          <a href={"https://github.com/ashkam1201"}>
            <img
              className="d-block w-100"
              src="https://www.pngkey.com/png/detail/955-9558163_transparent-github-logo.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>My github</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href={"https://twitter.com/Adri6235"}>
            <img
              className="d-block w-100"
              src="https://digitalcommunications.wp.st-andrews.ac.uk/files/2017/07/twitter-banner.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>My twitter</h3>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


export default Accueil;
