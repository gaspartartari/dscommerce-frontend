import './styles.css';
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonSecondary from "../../../components/ButtonSecondary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import { useParams } from 'react-router-dom';
import * as productService from '../../../services/product-service.ts';
import { Link } from 'react-router-dom';



export default function ProductDetails() {

    const params = useParams();
    const product = productService.findById(Number(params.productId));

    return (

        <main>
            <section id="product-details-section" className="dsc-container">
                {product &&
                    <ProductDetailsCard product={product} />}
                <div className="dsc-btn-page-container">
                    <ButtonPrimary name='Comprar' />
                    <Link to={'/catalog'}>
                        <ButtonSecondary name='Início' />
                    </Link>

                </div>
            </section>
        </main>

    );
}