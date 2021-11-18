import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';

import { size } from '../../../config/theme';

const LeftHeaderMenu = ({ mobileMenu, handleMobileMenuClose }) => {
  return (
    <>
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
          <Divider style={{ width: '100%', margin: '10px 0' }} />
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
              <a>
                <RiShoppingCartLine />
              </a>
            </Link>
            <Link href="/user">
              <a>
                <BsBookmark />
              </a>
            </Link>
          </div>
        </div>
      </Drawer>
      <style jsx>{`
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

export default LeftHeaderMenu;
