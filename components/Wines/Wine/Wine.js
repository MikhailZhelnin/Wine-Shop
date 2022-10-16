import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { urlFor } from '../../../lib/sanity';

import { color, font, media, size, spacing } from '../../../config/theme';

import { cartAction } from '../../../redux/slices/cartSlice';

import WineModal from '../../WineModal';

const Wine = ({ id, title, price, description, image }) => {
  const [open, setOpen] = useState(false);

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
            Details
          </button>
          <button className="wine-btn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
        <WineModal
          open={open}
          handleClose={() => setOpen(false)}
          title={title}
          price={price}
          description={description}
          image={image}
        />
      </div>

      <style jsx>{`
        .wine-item {
          margin-bottom: ${spacing.tinier};
          min-height: 550px;
          width: 22%;
        }
        .wine-image {
          height: 350px;
          width: 100%;
        }
        .wine-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .wine-content {
          margin-bottom: ${spacing.tiny};
          padding: ${spacing.tiny};
          text-align: center;
          background-color: ${color.background.wine_item};
        }
        .wine-title {
          margin-bottom: ${spacing.tiny};
          font-size: ${size.heading.extra_small};
          font-family: ${font.secondary};
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
            height: 350px;
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
            height: 390px;
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
