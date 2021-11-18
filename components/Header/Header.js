import { useState } from 'react';
import Link from 'next/link';
import Popover from '@mui/material/Popover';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import { RiShoppingCartLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

import { font, color, spacing, size, breakpoints } from '../../config/theme';
import { useWindowSize } from '../../hooks/useWindowWidth';

const Header = () => {
  const { width } = useWindowSize();
  const [userPopup, setusePopup] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
  const open = Boolean(userPopup);
  const id = open ? 'simple-popover' : undefined;

  const handleUserPopupOpen = (event) => {
    setusePopup(event.currentTarget);
  };
  const handleUserPopapClose = () => {
    setusePopup(null);
  };
  const handleMobileMenuOpen = () => {
    setMobileMenu(true);
  };
  const handleMobileMenuClose = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <>
            <h2 className="header-title">Wines</h2>
            {width > breakpoints.tablet.min ? (
              <>
                <nav className="header-nav">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <Link href="/shop">
                    <a>Shop</a>
                  </Link>
                  <Link href="/about-us">
                    <a>About Us</a>
                  </Link>
                  <Link href="/contact">
                    <a>Contact</a>
                  </Link>
                </nav>
                <nav className="header-user">
                  <button>
                    <RiShoppingCartLine />
                  </button>
                  <button>
                    <BsBookmark />
                  </button>
                  <button onClick={handleUserPopupOpen}>
                    <AiOutlineUser />
                  </button>
                </nav>
              </>
            ) : (
              <button className="header-mobileMenu">
                <HiMenu onClick={handleMobileMenuOpen} />
              </button>
            )}
            </>
          </div>
        </div>
      </header>

      <Popover
        id={id}
        open={open}
        anchorEl={userPopup}
        onClose={handleUserPopapClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <div className="header-user__popup">
          <Link href="/login">
            <a>Login</a>
          </Link>
          <Divider style={{width: '100%'}}/>
          <Link href="/registration">
            <a>Registration</a>
          </Link>
        </div>
      </Popover>

      <Drawer anchor="right" open={mobileMenu} onClose={handleMobileMenuClose}>
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/shop">
              <a>Shop</a>
            </Link>
            <Link href="/about-us">
              <a>About Us</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </nav>
          <Divider style={{width: '100%', margin: '10px 0'}}/>
          <nav className="mobile-menu__user">
            <Link href="/login">
              <a>Login</a>
            </Link>
            <Link href="/registration">
              <a>Registration</a>
            </Link>
          </nav>
          <div className="mobile-menu__user-actions">
              <Link href="/user">
                <a><RiShoppingCartLine /></a>
              </Link>
              <Link href="/user">
                <a><BsBookmark /></a>
              </Link>
            </div>
        </div>
      </Drawer>
      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: ${spacing.mini};
          background-color: ${color.background.dark};
          color: ${color.text.light};
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
        .header-nav a {
          margin-right: ${spacing.tiny};
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
        .header-user__popup {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding: 15px;
        }
        .header-user__popup a {
          margin-bottom: 4px;
        }
        .header-user__popup a:last-child {
          margin-bottom: 0;
        }


        .mobile-menu {
          width: 250px;
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .mobile-menu__nav,
        .mobile-menu__user {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .mobile-menu__user {
          margin-bottom: 10px;
        }
        .mobile-menu__nav a,
        .mobile-menu__user a {
          font-size: ${size.text.extra_large};
        }
        .mobile-menu__user-actions a {
          display: inline-flex;
          font-size: ${size.icons.extra_large};
        }
        .mobile-menu__user-actions a:first-child {
          margin-right: 15px;
        }
      `}</style>
    </>
  );
};

export default Header;
