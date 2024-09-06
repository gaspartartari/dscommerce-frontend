import './styles.css';
import cartIcon from '../../assets/cartIcon.svg';
import { useContext, useState } from 'react';
import * as cartService from '../../services/cart-service';
import { ContextCartCount } from '../../utils/context-cart';



export default function CartIcon() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [cart, setCart] = useState(cartService.get());

    const { contextCartCount } = useContext(ContextCartCount);


    return (
        <>
            <img src={cartIcon} alt="Carrinho de compras" />
            {
                contextCartCount > 0 &&
                    <div className='dsc-cart-counter'>{contextCartCount} </div>
                 

            }
        </>
    )
}