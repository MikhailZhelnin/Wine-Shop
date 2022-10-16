import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import Badge from '@mui/material/Badge';
import { useTranslations } from 'next-intl';
import { useSelector } from 'react-redux';
import { selectCartState } from '../../redux/slices/cartSlice';

import { font, color, spacing, size, breakpoints } from '../../config/theme';
import { useWindowSize } from '../../hooks/useWindowWidth';
import LeftHeaderMenu from './LeftHeaderMenu/LeftHeaderMenu';
import Cart from '../Cart';
import { SelectLanguage } from '../SelectLanguage';

const Header = () => {
  const t = useTranslations('Navbar');
  const { width } = useWindowSize();
  const [openMobileMenu, setOpenMobileMenu] = useState(null);
  const [openCart, setOpenCart] = useState(null);
  const [darkNavbar, setDarkNavbar] = useState(null);
  const totalQuantity = useSelector((selectCartState) => selectCartState.cart.totalQuantity);

  const handleDarkNavbar = () => {
    window.scrollY > 0 ? setDarkNavbar(true) : setDarkNavbar(false);
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleDarkNavbar);
  }

  useEffect(() => {
    if (width > breakpoints.tablet.min && openMobileMenu) {
      setOpenMobileMenu(false);
    }
  }, [width, openMobileMenu]);
  return (
    <>
      <header className={!darkNavbar ? 'header' : 'header darkHeader'}>
        <div className="container">
          <div className="header-wrapper">
            <>
              <h2 className="header-title">Wines</h2>
              {width > breakpoints.tablet.min ? (
                <>
                  <nav className="header-nav">
                    <Link href="/">
                      <a>{t('home')}</a>
                    </Link>
                    <Link href="/about-us">
                      <a>{t('aboutUs')}</a>
                    </Link>
                    <Link href="/contact">
                      <a>{t('contact')}</a>
                    </Link>
                  </nav>
                  <nav className="header-user">
                    <button onClick={() => setOpenCart(true)}>
                      <Badge color="warning" badgeContent={totalQuantity}>
                        <RiShoppingCartLine />
                      </Badge>
                    </button>
                    <button>
                      <BsBookmark />
                    </button>
                    <Link href="/user">
                      <a>
                        <AiOutlineUser />
                      </a>
                    </Link>

                    <SelectLanguage />
                  </nav>
                </>
              ) : (
                <button className="header-mobileMenu">
                  <HiMenu onClick={() => setOpenMobileMenu(true)} />
                </button>
              )}
            </>
          </div>
        </div>
      </header>

      <LeftHeaderMenu
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        setOpenCart={setOpenCart}
        totalQuantity={totalQuantity}
      />
      <Cart openCart={openCart} setOpenCart={setOpenCart} />

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: ${spacing.mini};
          color: ${color.text.light};
          transition: background-color 0.2s linear, padding 0.2s linear;
        }
        .header.darkHeader {
          padding: ${spacing.tiny} ${spacing.mini};
          background-color: ${color.background.dark};
          transition: background-color 0.1s linear, padding 0.1s linear;
        }
        .header-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header-title {
          font-size: ${size.logo.large};
          font-family: ${font.secondary};
        }
        .header-nav {
          margin-left: 40px;
        }
        .header-nav a {
          margin-right: ${spacing.small};
          font-size: ${size.text.large};
          cursor: pointer;
          transition: color 0.2s linear;
        }
        .header-nav a:last-child {
          margin-right: 0;
        }
        .header-nav a:hover {
          color: ${color.text.secondary};
        }
        .header-user {
          display: flex;
          align-items: center;
        }
        .header-user button,
        .header-user a,
        .header-mobileMenu {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: ${spacing.tiny};
          padding: ${spacing.mini} 0;
          font-size: ${size.icons.large};
          background: none;
          border: none;
          color: inherit;
          cursor: pointer;
        }
        .header-mobileMenu {
          font-size: ${size.icons.extra_large};
        }
        .header-user button:last-child,
        .header-mobileMenu:last-child {
          margin-right: 0;
        }
      `}</style>
    </>
  );
};

export default Header;
