import './styles.css';
import SearchBar from '../../../components/SarchBar';
import CatalogCard from '../../../components/CatalogCard';
import ButtonNextPage from '../../../components/ButtonNextPage';
import * as productService from '../../../services/product-service.ts';
import { ProductDTO } from '../../../models/product.ts';
import { useEffect, useState } from 'react';





export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);
  const [productName, setProductName] = useState<string>("");



  useEffect(() => {
    productService.findAll(0, productName)
      .then(response => {
        setProducts(response.data.content);
      })
  }, [productName])

  function handleOnSearch(productName: string) {
    setProductName(productName);
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