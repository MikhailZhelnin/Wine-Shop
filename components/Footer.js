import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { size, color, media, spacing, font } from '../config/theme';

import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsBehance } from 'react-icons/bs';

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <h4 className="footer-title">{t('title')}</h4>
            <h2 className="footer-subtitle">{t('subtitle')}</h2>
            <div className="footer-content">
              <ul className="footer-content__page">
                <li className="">
                  <Link href="/">
                    <a>{t('faq')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t('terms')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t('privacy')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>{t('returns')}</a>
                  </Link>
                </li>
              </ul>
              <ul className="footer-content__social">
                <li>
                  <Link href="/">
                    <a>
                      <BsInstagram />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <BsTwitter />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <BsFacebook />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <BsLinkedin />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <BsBehance />
                    </a>
                  </Link>
                </li>
              </ul>
              <div className="footer-content__privacy">© {t('rights')}</div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color: ${color.background.dark};
        }
        .footer-wrapper {
          padding: ${spacing.huge} 0;
          color: ${color.text.light};
        }
        .footer-title {
          margin-bottom: ${spacing.nano};
          text-align: center;
          color: ${color.text.secondary};
          text-transform: uppercase;
        }
        .footer-subtitle {
          margin-bottom: ${spacing.huge};
          font-size: ${size.heading.small};
          font-weight: 400;
          font-family: ${font.secondary};
          text-align: center;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
          font-size: ${size.text.large};
          color: ${color.text.light_dark};
          text-transform: uppercase;
        }
        .footer-content__page,
        .footer-content__social {
          display: flex;
          margin-bottom: ${spacing.small};
        }
        .footer-content__page li,
        .footer-content__social li {
          margin-right: ${spacing.tiny};
          transition: color 0.3s linear;
        }
        .footer-content__page li:last-child,
        .footer-content__social li:last-child {
          margin-right: 0;
        }
        .footer-content__page li:hover,
        .footer-content__page li:active,
        .footer-content__social li:hover,
        .footer-content__social li:active {
          color: ${color.text.secondary};
        }

        @media ${media.mobile} {
          .footer-subtitle {
            margin-bottom: ${spacing.medium};
          }
          .footer-content__page {
            flex-direction: column;
            align-items: center;
          }
          .footer-content__page li {
            margin-right: 0;
            margin-bottom: ${spacing.mini};
          }
        }
        @media ${media.small_mobile} {
          .footer-subtitle {
            margin-bottom: ${spacing.large};
            font-size: ${size.heading.smaller};
          }
          .footer-content {
            font-size: ${size.text.main};
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
