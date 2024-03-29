import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsBookmark } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';
import { AiOutlineUser } from 'react-icons/ai';
import { useTranslations } from 'next-intl';
import Badge from '@mui/material/Badge';

import { size, color, spacing } from '../../../config/theme';
import { SelectLanguage } from '../../SelectLanguage';

const LeftHeaderMenu = ({ openMobileMenu, setOpenMobileMenu, setOpenCart, totalQuantity }) => {
  const t = useTranslations('Navbar');

  return (
    <>
      <Drawer anchor="right" open={openMobileMenu} onClose={() => setOpenMobileMenu(false)}>
        <div className="mobile-menu">
          <nav className="mobile-menu__nav">
            <Link href="/">
              <a onClick={() => setOpenMobileMenu(false)}>{t('home')}</a>
            </Link>
            <Link href="/reds">
              <a onClick={() => setOpenMobileMenu(false)}>{t('redWines')}</a>
            </Link>
            <Link href="/whites">
              <a onClick={() => setOpenMobileMenu(false)}>{t('whiteWines')}</a>
            </Link>
            <Link href="/">
              <a onClick={() => setOpenMobileMenu(false)}>{t('aboutUs')}</a>
            </Link>
            <Link href="/">
              <a onClick={() => setOpenMobileMenu(false)}>{t('contact')}</a>
            </Link>
          </nav>
          <nav className="mobile-menu__user">
            <button onClick={() => setOpenCart(true)}>
              <Badge color="warning" badgeContent={totalQuantity}>
                <RiShoppingCartLine />
              </Badge>
            </button>
            <Link href="/">
              <a onClick={() => setOpenMobileMenu(false)}>
                <BsBookmark />
              </a>
            </Link>
            <Link href="/">
              <a onClick={() => setOpenMobileMenu(false)}>
                <AiOutlineUser />
              </a>
            </Link>
            <SelectLanguage mobile={true} />
          </nav>
          <button className="mobile-menu__close" onClick={() => setOpenMobileMenu(false)}>
            <CgClose />
          </button>
        </div>
      </Drawer>
      <style jsx>{`
        .mobile-menu {
          position: relative;
          width: 100vw;
          height: 100%;
          padding: ${spacing.tiny};
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: ${color.text.light};
          background-color: ${color.background.light_dark};
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
          padding: ${spacing.tiny} ${spacing.mini};
          background-color: ${color.background.extra_dark};
        }
        .mobile-menu__user button {
          display: inline-flex;
          margin-right: ${spacing.tiny};
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
        .mobile-menu__nav a {
          margin-bottom: ${spacing.tiny};
          font-size: ${size.heading.extra_small};
        }
        .mobile-menu__user a {
          display: flex;
          margin-right: ${spacing.tiny};
        }
        .mobile-menu__user a:last-child {
          margin-right: 0;
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
