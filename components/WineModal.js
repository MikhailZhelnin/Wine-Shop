import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { urlFor } from '../lib/sanity';
import { useTranslations } from 'next-intl';

import { color, font, media, size, spacing } from '../config/theme';

const WineModal = ({ addToCart, open, handleClose, id, title, description, price, image }) => {
  const t = useTranslations('WineButtons');

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}>
        <Fade in={open}>
          <div className="modal">
            <div className="modal-image">
              <img src={urlFor(image).url()} alt={title} />
            </div>
            <div className="modal-content">
              <h2 className="modal-content__title">{title}</h2>
              <div className="modal-content__price">${price}</div>
              <div className="modal-content__description">{description}</div>
              <div className="modal-content__actions">
                <button className="modal-content__actions-addToCart" onClick={addToCart}>
                  {t('addTocart')}
                </button>
                <button className="modal-content__actions-AddToWishlist">
                  <span>{t('wishlist')}</span> <BsBookmark />
                </button>
              </div>
            </div>
            <button className="modal-close" onClick={handleClose}>
              <AiFillCloseCircle />
            </button>
          </div>
        </Fade>
      </Modal>

      <style jsx>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 85%;
          height: 85%;
          padding: ${spacing.large};
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: ${color.background.white};
        }
        .modal-image {
          width: 30%;
          height: 100%;
        }
        .modal-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .modal-content {
          width: 55%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .modal-content__title {
          margin-bottom: ${spacing.tiny};
          font-size: ${size.heading.small};
          font-family: ${font.secondary};
        }
        .modal-content__price {
          margin-bottom: ${spacing.tiny};
          font-size: ${size.text.large};
        }
        .modal-content__description {
          margin-bottom: ${spacing.medium};
          text-align: center;
        }
        .modal-content__actions {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .modal-content__actions-addToCart {
          margin-bottom: ${spacing.tiny};
          padding: ${spacing.mini} ${spacing.small};
          font-size: ${size.text.medium};
          color: ${color.text.light};
          background-color: ${color.background.dark};
          border: none;
          cursor: pointer;
        }
        .modal-content__actions-AddToWishlist {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: ${size.text.large};
          background: none;
          border: none;
          cursor: pointer;
        }
        .modal-content__actions-AddToWishlist span {
          margin-right: ${spacing.mini};
        }
        .modal-close {
          position: absolute;
          top: ${spacing.tiny};
          right: ${spacing.tiny};
          font-size: ${size.icons.extra_large};
          border: none;
          background: transparent;
          cursor: pointer;
        }

        @media ${media.tablet} {
          .modal-image {
            width: 35%;
            height: 90%;
          }
        }
        @media (max-width: 850px) {
          .modal-image {
            width: 40%;
            height: 80%;
          }
        }
        @media ${media.mobile} {
          .modal {
            width: 100%;
            height: 100%;
            padding: ${spacing.small};
          }
          .modal-image {
            width: 50%;
            height: 70%;
          }
          .modal-content {
            width: 45%;
          }
          .modal-content__title {
            font-size: ${size.heading.smaller};
          }
        }
        @media (max-width: 550px) {
          .modal {
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background-color: ${color.background.white};
          }
          .modal-image {
            width: 50%;
            height: 50%;
          }
          .modal-content {
            width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default WineModal;
