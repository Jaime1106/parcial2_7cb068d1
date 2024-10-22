import { Card, Carousel } from 'react-bootstrap';
import Img1 from "../../../assets/img/concierto1.jpg";
import Img2 from "../../../assets/img/Concierto2.jpg";
import Img3 from "../../../assets/img/concierto3.png";

export const Inicio = () => {
  return(
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img1}
            alt="Concierto 1"
          />
          <Carousel.Caption>
            <h3>Conciertos Star</h3>
            <p>Disfruta de los mejores conciertos del año.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img2}
            alt="Concierto 2"
          />
          <Carousel.Caption>
            <h3>Grandes Artistas</h3>
            <p>Los artistas más populares en vivo.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Img3}
            alt="Concierto 3"
          />
          <Carousel.Caption>
            <h3>Experiencia Única</h3>
            <p>Vive la emoción de un concierto como nunca antes.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Card className="text-center mt-4">
        <Card.Body>
          <Card.Title>Bienvenidos a Conciertos Star</Card.Title>
          <Card.Text>
            Este es el inicio de una experiencia inolvidable. Explora los próximos eventos y prepárate para disfrutar.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}
