import Link from 'next/link';

import { size, color, media, spacing, font } from '../config/theme';

import { BsInstagram, BsTwitter, BsFacebook, BsLinkedin, BsBehance } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-wrapper">
            <h4 className="footer-title">Wines promise</h4>
            <h2 className="footer-subtitle">We make good wines</h2>
            <div className="footer-content">
              <ul className="footer-content__page">
                <li className="">
                  <Link href="/">
                    <a>faq</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>terms</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>privacy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>returns</a>
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
              <div className="footer-content__privacy">© 2021 wines. all right reserved</div>
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
          justify-content: space-between;
          align-items: center;
          font-size: ${size.text.large};
          color: #414141;
          text-transform: uppercase;
        }
        .footer-content__page {
          display: flex;
          margin-right: ${spacing.tiny};
        }
        .footer-content__social {
          display: flex;
        }
        .footer-content__page li,
        .footer-content__social li {
          margin-right: ${spacing.tiny};
          transition: color 0.3s linear;
        }
        .footer-content__page li:hover,
        .footer-content__page li:active,
        .footer-content__social li:hover,
        .footer-content__social li:active {
          color: ${color.text.secondary};
        }

        @media ${media.tablet} {
          .footer-content {
            font-size: ${size.text.main};
          }
        }
        @media ${media.mobile} {
          .footer-content {
            flex-direction: column;
          }
          .footer-content__page,
          .footer-content__social {
            margin-right: 0;
            margin-bottom: ${spacing.small};
          }
          .footer-content__page li:last-child,
          .footer-content__social li:last-child {
            margin-right: 0;
          }
        }
        @media ${media.small_mobile} {
          .footer-subtitle {
            margin-bottom: ${spacing.large};
            font-size: ${size.heading.smaller};
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
