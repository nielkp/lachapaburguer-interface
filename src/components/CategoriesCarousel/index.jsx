import { Container, ContainerItems, Title } from './styles';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import { api } from '../../services/api';

export function CategoriesCarousel() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');
      setCategories(data);
      console.log(data);
    }

    loadCategories();
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
      <Title>Categorias</Title>

      <Carousel
        responsive={responsive}
        infinite={true}
        portialVisible={false}
        itemClass="carousel-item"
      >
        {categories.map((category) => (
          <ContainerItems key={category.id} imageUrl={category.url}>
            <p>{category.name}</p>
          </ContainerItems>
        ))}
      </Carousel>
    </Container>
  );
}
