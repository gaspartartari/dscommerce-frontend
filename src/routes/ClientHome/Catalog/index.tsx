/* eslint-disable react-hooks/exhaustive-deps */
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
    page: 0,
    name: ""
  });
  const [isLastPage, setIsLastPage] = useState<boolean>(false);



  useEffect(() => {
    productService.findAll(queryParams.page, queryParams.name)
      .then(response => {
        const nextPage = response.data.content;
        setProducts(products.concat(nextPage));
        setIsLastPage(response.data.last);
      })
  }, [queryParams])

  function handleOnSearch(searchText: string) {
    setProducts([]);
    setQueryParams({ ...queryParams, page: 0, name: searchText });
  }

  function handleNextPage() {
    setQueryParams({ ...queryParams, page: queryParams.page + 1 })
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

        {
          !isLastPage &&
          <div onClick={handleNextPage}>
            <ButtonNextPage />
          </div>
        }




      </section>
    </main>

  );
}