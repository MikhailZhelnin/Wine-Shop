import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import { CgClose } from 'react-icons/cg';
import { useTranslations } from 'next-intl';

import { size, color, media, spacing } from '../config/theme';

const Cart = ({ openCart, setOpenCart }) => {
  const t = useTranslations('Cart');
  return (
    <>
      <Drawer anchor="right" open={openCart} onClose={() => setOpenCart(false)}>
        <div className="cart">
          <div className="cart-header">
            <span className="cart-header__title">{t('title')}</span>
            <button className="cart-header__close" onClick={() => setOpenCart(false)}>
              <CgClose />
            </button>
          </div>
          <div className="cart-content">
            <span className="cart-content__empty">{t('emptyCart')}</span>
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
          padding: ${spacing.tinier};
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
          padding: ${spacing.tinier};
          background-color: ${color.background.white_darker};
        }

        @media ${media.mobile} {
          .cart {
            width: 100vw;
          }
        }
      `}</style>
    </>
  );
};

export default Cart;
