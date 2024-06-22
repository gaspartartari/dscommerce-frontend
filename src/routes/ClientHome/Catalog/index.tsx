import './styles.css';

import SearchBar from '../../../components/SarchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import { ProductDTO } from '../../../models/product';



const product: ProductDTO = {
  id: 1,
  name: "Smart TV",
  description: "Bela de uma tv",
  price: 200,
  imgUrl: "https://ludovikas.com.br/cdn/shop/files/capa-lk70-azul.jpg?v=1686588982",
  categories: [
    {
      id: 2,
      name: "Eletrônicos"
    },
    {
      id: 3,
      name: "Computadores"
    }
  ]
}


export default function Catalog() {

  return (

    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />
          <CatalogCard product={product} />


        </div>

        <ButtonNextPage />
      </section>
    </main>

  );
}