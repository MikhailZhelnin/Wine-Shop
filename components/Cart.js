import { forwardRef, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { CgClose } from 'react-icons/cg';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';
import { urlFor } from '../lib/sanity';
import { useDispatch } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { size, color, media, spacing, font } from '../config/theme';

import { cartAction, selectCartState } from '../redux/slices/cartSlice';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Cart = ({ openCart, setOpenCart }) => {
  const t = useTranslations('Cart');
  const t2 = useTranslations('Notifications');

  const cartItems = useSelector((selectCartState) => selectCartState.cart.cartItems);
  const totalAmount = useSelector((selectCartState) => selectCartState.cart.totalAmount);

  const dispatch = useDispatch();

  const [showAlert, setShowAlert] = useState(false);

  const handleAlertShow = () => {
    setShowAlert(true);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setShowAlert(false);
  };

  const deleteItem = (id) => {
    dispatch(cartAction.deleteItem(id));
    handleAlertShow();
  };

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
            {cartItems.length === 0 ? (
              <span className="cart-content__empty">{t('emptyCart')}</span>
            ) : (
              <div className="cart-content__list">
                {cartItems.map((item) => (
                  <div className="cart-content__list-item" key={item.id}>
                    <div className="cart-content__list-item__img">
                      <img src={urlFor(item.image).url()} alt={item.title} />
                    </div>
                    <div className="cart-content__list-item__details">
                      <span className="cart-content__list-item__details-title">
                        {t('itemName')}:{' '}
                        <strong style={{ fontSize: '20px', marginLeft: '5px' }}>
                          {item.title}
                        </strong>
                      </span>
                      <span className="cart-content__list-item__details-quantity">
                        {t('itemQuantity')}:{' '}
                        <strong style={{ fontSize: '25px', marginLeft: '5px' }}>
                          {item.quantity}
                        </strong>
                      </span>
                      <span className="cart-content__list-item__details-total">
                        {t('itemTotal')}:{' '}
                        <strong style={{ fontSize: '20px', marginLeft: '5px' }}>
                          ${item.totalPrice}
                        </strong>
                      </span>
                      <button
                        className="cart-content__list-item__details-deleteBtn"
                        onClick={() => deleteItem(item.id)}>
                        {t('itemDelete')}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-total">
              <span className="cart-total__text">{t('totalPrice')}:</span>
              <span className="cart-total__price">${totalAmount}</span>
            </div>
          )}
        </div>
        <Snackbar open={showAlert} autoHideDuration={3000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
            {t2('deletedFromCart')}
          </Alert>
        </Snackbar>
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
          overflow-x: scroll;
        }
        .cart-content__list-item {
          display: flex;
          justify-content: space-beetwen;
          align-items: center;
          margin-bottom: ${spacing.tinier};
          padding: ${spacing.tiny};
          background-color: #e0e0e0;
        }
        .cart-content__list-item:last-child {
          margin-bottom: 0;
        }
        .cart-content__list-item__img {
          width: 60px;
          height: 185px;
          object-fit: contain;
          margin-right: ${spacing.small};
        }
        .cart-content__list-item__img img {
          width: 100%;
          height: 100%;
        }
        .cart-content__list-item__details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .cart-content__list-item__details-title {
          margin-bottom: ${spacing.tiny};
        }
        .cart-content__list-item__details-quantity {
          margin-bottom: ${spacing.tiny};
          display: flex;
          align-items: center;
        }
        .cart-content__list-item__details-total {
          margin-bottom: ${spacing.tiny};
        }
        .cart-content__list-item__details-deleteBtn {
          padding: ${spacing.mini} ${spacing.small};
          border: none;
          background-color: ${color.background.dark};
          color: ${color.text.light};
          cursor: pointer;
        }
        .cart-total {
          padding: ${spacing.tinier};
          background-color: ${color.background.dark};
          color: ${color.text.light_darker};
        }
        .cart-total__text {
          margin-right: ${spacing.mini};
          font-size: ${size.text.medium};
        }
        .cart-total__price {
          font-size: ${size.text.large};
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
