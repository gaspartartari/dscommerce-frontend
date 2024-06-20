import './styles.css';
import ButtonPrimary from "../../components/ButtonPrimary";
import ButtonSecondary from "../../components/ButtonSecondary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

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

export default function ProductDetails() {

    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonSecondary />

                    </div>
                </section>
            </main>
        </>
    );
}