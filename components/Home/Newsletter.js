import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useTranslations } from 'next-intl';

import { font, color, spacing, size, media } from '../../config/theme';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Newsletter = () => {
  const t = useTranslations('Newsletter');
  const [email, setEmail] = useState('');
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return false;
    }
    handleClick();
    setEmail('');
  };

  return (
    <>
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-wrapper">
            <h4 className="newsletter-title">{t('title')}</h4>
            <h2 className="newsletter-subtitle">{t('subtitle')}</h2>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-form__input"
                placeholder={t('placeholder')}
              />
              <button type="submit" className="newsletter-form__button">
                {t('sendButton')}
              </button>
            </form>
          </div>
        </div>
      </section>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thanks for subscribing!
        </Alert>
      </Snackbar>
      <style jsx>{`
        .newsletter {
          margin-bottom: ${spacing.large};
        }
        .newsletter-wrapper {
          max-width: 850px;
          margin: 0 auto;
          padding: ${spacing.large} 0;
          text-align: center;
        }
        .newsletter-title {
          margin-bottom: ${spacing.mini};
          color: ${color.text.secondary};
          text-transform: uppercase;
        }
        .newsletter-subtitle {
          margin-bottom: ${spacing.medium};
          font-size: ${size.heading.small};
          font-weight: 400;
          font-family: ${font.secondary};
        }
        .newsletter-form {
          display: flex;
          justify-content: space-between;
        }
        .newsletter-form__input {
          width: 75%;
          padding: ${spacing.small} ${spacing.small};
          font-size: ${size.text.large};
          color: ${color.text.dark};
          border: 1px solid ${color.border.light};
          outline: none;
        }
        .newsletter-form__input:focus {
          background-color: ${color.background.white_darker};
        }
        input[type='text'].newsletter-form__input::-webkit-input-placeholder {
          color: ${color.text.dark};
        }
        .newsletter-form__button {
          width: 24%;
          font-size: ${size.text.large};
          color: ${color.text.light};
          background-color: ${color.background.secondary_light};
          border: none;
          cursor: pointer;
          transition: background-color 0.3s linear;
        }
        .newsletter-form__button:active,
        .newsletter-form__button:hover {
          background-color: ${color.background.secondary};
        }

        @media ${media.mobile} {
          .newsletter {
            margin-bottom: ${spacing.medium};
          }
        }

        @media ${media.small_mobile} {
          .newsletter-subtitle {
            margin-bottom: ${spacing.tiny};
            font-size: ${size.heading.smaller};
          }
          .newsletter-form {
            flex-direction: column;
            align-items: center;
          }
          .newsletter-form__input {
            width: 100%;
            margin-bottom: ${spacing.tiny};
            padding: ${spacing.tinier};
            font-size: ${size.text.large};
          }
          .newsletter-form__button {
            width: 35%;
            padding: ${spacing.tiny} 0;
            font-size: ${size.text.large};
          }
        }
      `}</style>
    </>
  );
};

export default Newsletter;
