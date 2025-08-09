import { CardProduct } from '../CardProduct/';
import 'react-multi-carousel/lib/styles.css';
import { Container, Title } from './styles';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { api } from '../../services/api';

export function OffersCarousel() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    async function loadOffers() {
      const { data } = await api.get('/products');
      const onlyOffers = data.filter((product) => product.offer);
      setOffers(onlyOffers);
    }

    loadOffers();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Title>Ofertas do Dia</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        portialVisible={false}
        itemClass="carousel-item"
        arrows={false}
      >
        {offers.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </Carousel>
    </Container>
  );
}
