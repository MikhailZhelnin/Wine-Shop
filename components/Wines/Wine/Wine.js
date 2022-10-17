import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { urlFor } from '../../../lib/sanity';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTranslations } from 'next-intl';

import { color, font, media, size, spacing } from '../../../config/theme';

import { cartAction } from '../../../redux/slices/cartSlice';

import WineModal from '../../WineModal';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Wine = ({ id, title, price, description, image }) => {
  const t = useTranslations('WineButtons');
  const t2 = useTranslations('Notifications');
  const [open, setOpen] = useState(false);
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

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: id,
        title: title,
        price: price,
        image: image,
      }),
    );
    handleAlertShow();
  };

  return (
    <>
      <div className="wine-item">
        <div className="wine-image">
          <img src={urlFor(image).url()} alt={title} />
        </div>
        <div className="wine-content">
          <h3 className="wine-title">{title}</h3>
          <div className="wine-price">${price}</div>
          <button className="wine-btn" onClick={() => setOpen(true)}>
            {t('details')}
          </button>
          <button className="wine-btn" onClick={addToCart}>
            {t('addTocart')}
          </button>
        </div>
        <WineModal
          open={open}
          handleClose={() => setOpen(false)}
          title={title}
          price={price}
          description={description}
          image={image}
          addToCart={() => addToCart()}
        />
        <Snackbar open={showAlert} autoHideDuration={3000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
            {t2('addedToCart')}
          </Alert>
        </Snackbar>
      </div>

      <style jsx>{`
        .wine-item {
          margin-bottom: ${spacing.tinier};
          width: 22%;
          border: 1px solid #b6b6b6;
          display: flex;
          flex-direction: column;
        }
        .wine-image {
          height: 300px;
          width: 100%;
          background-color: ${color.background.wine_item};
          padding: 10px 0 0 0;
        }
        .wine-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .wine-content {
          padding: ${spacing.tiny};
          text-align: center;
          background-color: ${color.background.wine_item};
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .wine-title {
          margin-bottom: ${spacing.tiny};
          font-size: ${size.heading.extra_small};
          font-family: ${font.secondary};
          flex-grow: 1;
        }
        .wine-price {
          margin-bottom: ${spacing.tiny};
        }
        .wine-btn {
          width: 100%;
          margin-bottom: ${spacing.nano};
          padding: ${spacing.mini} 0;
          font-size: ${size.text.medium};
          color: ${color.text.light};
          background-color: ${color.background.dark};
          border: none;
          cursor: pointer;
        }
        .wine-btn:last-child {
          margin-bottom: 0;
        }

        @media ${media.tablet} {
          .wine-item {
            margin-bottom: ${spacing.tiny};
            width: 31%;
          }
          .wine-image {
            width: 100%;
          }
        }
        @media ${media.mobile} {
          .wine-item {
            width: 42%;
          }
        }
        @media ${media.small_mobile} {
          .wine-item {
            width: 70%;
          }
          .wine-image {
            height: 350px;
            width: 100%;
          }
        }
        @media (max-width: 450px) {
          .wine-item {
            width: 75%;
          }
          .wine-image {
            height: 390px;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Wine;
