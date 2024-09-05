import  './styles.css';
import cartIcon from '../../assets/cartIcon.svg';


export default function CartIcon() {

    return (
        <>
            <img src={cartIcon} alt="Carrinho de compras" />
            <div className='dsc-cart-counter'>22 </div>
        </>
    )
}