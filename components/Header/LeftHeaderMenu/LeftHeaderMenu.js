import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';

import { size, color } from '../../../config/theme';

const LeftHeaderMenu = ({ openMobileMenu, setOpenMobileMenu, setOpenCart }) => {
  return (
    <>
      <Drawer anchor="right" open={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
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
          <nav className="mobile-menu__user">
            <button onClick={() => setOpenCart(true)}>
              <RiShoppingCartLine />
            </button>
            <Link href="/user">
              <a>
                <BsBookmark />
              </a>
            </Link>
            <Link href="/user">
              <a>
                <AiOutlineUser />
              </a>
            </Link>
          </nav>
          <button className="mobile-menu__close" onClick={() => setOpenMobileMenu(false)}>
            <CgClose/>
          </button>
        </div>
      </Drawer>
      <style jsx>{`
        .mobile-menu {
          position: relative;
          width: 100vw;
          height: 100%;
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: ${color.text.light};
          background-color: #161616;
        }
        .mobile-menu__nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex-grow: 1;
          width: 100%;
        }
        .mobile-menu__user {
          width: 100%;
          display: flex;
          justify-content: center;
          padding: 15px 10px;
          background-color: ${color.background.extra_dark};
        }
        .mobile-menu__user button {
          display: inline-flex;
          font-size: ${size.icons.extra_large};
          color: inherit;
          background: none;
          border: none;
          cursor: pointer;
        }
        .mobile-menu__nav a,
        .mobile-menu__user a {
          font-size: ${size.text.extra_large};
        }
        .mobile-menu__user a {
          display: flex;
        }
        .mobile-menu__close {
          position: absolute;
          top: 16px;
          right: 24px;
          font-size: ${size.icons.extra_large};
          color: ${color.text.light};
          background: none;
          border: none;
        }
      `}</style>
    </>
  );
};

export default LeftHeaderMenu;
