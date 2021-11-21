import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
import { MdOutlineLanguage } from 'react-icons/md';

import { font, color, spacing, size } from '../../config/theme';

import IconEng from '../../utils/icons/eng.svg';
import IconEsp from '../../utils/icons/esp.svg';
import IconFra from '../../utils/icons/fra.svg';
import IconGer from '../../utils/icons/ger.svg';
import IconRus from '../../utils/icons/rus.svg';

export const SelectLanguage = ({ mobile = false }) => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);

  const selectLang = (lang) => {
    switch (lang) {
      case 'en-US':
        return { icon: IconEng, name: 'EN' };
      case 'ru':
        return { icon: IconRus, name: 'RU' };
      case 'fr':
        return { icon: IconFra, name: 'FR' };
      case 'de':
        return { icon: IconGer, name: 'DE' };
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <div className="select-lang" onClick={handleClick}>
        <MdOutlineLanguage />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: !mobile ? 'bottom' : 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: !mobile ? 'top' : 'bottom',
          horizontal: 'center',
        }}>
        <div className="select-lang__list">
          {router.locales.map((item) => (
            <Link href={router.asPath} locale={item}>
              <a className="select-lang__item" onClick={handleClose}>
                <img src={selectLang(item).icon.src} className="select-lang__item-icon" />
                <span className="select-lang__item-name">{selectLang(item).name}</span>
              </a>
            </Link>
          ))}
        </div>
      </Popover>
      <style jsx>{`
        .select-lang {
          padding: ${!mobile ? `${spacing.mini} 0` : '0'};
          display: flex;
          align-items: center;
          font-size: ${size.icons.large};
          cursor: pointer;
        }
        .select-lang__list {
          padding: ${spacing.mini} ${spacing.tiny};
        }
        .select-lang__item {
          display: flex;
          align-items: center;
          padding: ${spacing.nano} ${spacing.tinier} ${spacing.mini} 0;
        }
        .select-lang__item:last-child {
          padding-bottom: 0;
        }
        .select-lang__item-icon {
          margin-right: ${spacing.mini};
        }
        .select-lang__item-name {
        }
      `}</style>
    </>
  );
};

SelectLanguage.propTypes = {
  mobile: PropTypes.bool,
};
