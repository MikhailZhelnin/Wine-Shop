import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import { CgClose } from 'react-icons/cg';

import { size, color, media } from '../../config/theme';

const Cart = ({openCart, setOpenCart}) => {
    return (
        <>
            <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
                <div className="cart">
                    <div className="cart-header">
                        <span className="cart-header__title">shopping cart</span>
                        <button className="cart-header__close" onClick={() => setOpenCart(false)}>
                            <CgClose/>
                        </button>
                    </div>
                    <div className="cart-content">
                        <span className="cart-content__empty">No products in the cart</span>
                    </div>
                </div>
            </Drawer>
            <style jsx>{`
                .cart {
                    width: 500px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .cart-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px;
                    color: ${color.text.light_darker};
                    background: ${color.background.dark};
                }
                .cart-header__title {
                    text-transform: uppercase;
                }
                .cart-header__close {
                    display: inline-flex;
                    font-size: ${size.icons.extra_large};
                    color: inherit;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                .cart-content {
                    flex-grow: 1;
                    padding: 20px;
                    background-color: ${color.background.white_darker};
                }
                
                @media ${media.mobile} {
                    .cart {
                        width: 100vw;
                    }
                }
            `}</style>
        </>
    )
}

export default Cart
