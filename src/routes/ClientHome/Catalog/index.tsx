import './styles.css';
import SearchBar from '../../../components/SarchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productService from '../../../services/product-service.ts';
import { ProductDTO } from '../../../models/product.ts';
import { useEffect, useState } from 'react';


type QueryParams = {
  page: number,
  name: string
}


export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page : 0,
    name : ""
  });



  useEffect(() => {
    productService.findAll(queryParams.page, queryParams.name)
      .then(response => {
        setProducts(response.data.content);
      })
  }, [queryParams])

  function handleOnSearch(searchText: string) {
    setQueryParams({ ...queryParams, name : searchText});
  }

  return (

    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar onSearch={handleOnSearch} />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">

          {
            products.map(
              product => <CatalogCard key={product.id} product={product} />
            )
          }
        </div>

        <ButtonNextPage />
      </section>
    </main>

  );
}