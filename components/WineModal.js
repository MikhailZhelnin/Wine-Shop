import {useRef} from 'react';
import Modal from '@mui/material/Modal';
import { AiFillCloseCircle } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { urlFor } from '../lib/sanity';

import { color, font, media, size, spacing } from '../config/theme';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const WineModal = ({ open, handleClose, title, description, price, image }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => handleClose());
  return (
    <>
      {open && (
        <div className="modal">
          <div ref={ref} className="modal-wrapper">
            <div className="modal-image">
              <img src={urlFor(image).url()} alt={title} />
            </div>
            <div className="modal-content">
              <h2 className="modal-content__title">{title}</h2>
              <div className="modal-content__price">${price}</div>
              <div className="modal-content__description">{description}</div>
              <div className="modal-content__actions">
                <button className="modal-content__actions-addToCart">Add To Cart</button>
                <button className="modal-content__actions-AddToWishlist">
                  <span>Add To Wishlist</span> <BsBookmark />
                </button>
              </div>
            </div>
            <button className="modal-close" onClick={handleClose}>
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 99999;
        }
        .modal-wrapper {
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
          .modal-wrapper {
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
          .modal-wrapper {
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
