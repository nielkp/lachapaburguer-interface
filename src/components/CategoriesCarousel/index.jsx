import { api } from '../../services/api';
import { useEffect, useState } from 'react';

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

  return (
    <div>
      <h1>Carrosel de Catogoria</h1>
    </div>
  );
}
