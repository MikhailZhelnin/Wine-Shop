import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { color, font, size, spacing } from '../../config/theme';

import Inst1 from '../../public/images/instagram/instagram_1.jpg';
import Inst2 from '../../public/images/instagram/instagram_2.jpg';
import Inst3 from '../../public/images/instagram/instagram_3.jpg';
import Inst4 from '../../public/images/instagram/instagram_4.jpg';
import Inst5 from '../../public/images/instagram/instagram_5.jpg';
import Inst6 from '../../public/images/instagram/instagram_6.jpg';

const instImages = [
  {
    id: 1,
    image: Inst1,
    alt: 'instagram photo 1',
  },
  {
    id: 2,
    image: Inst2,
    alt: 'instagram photo 2',
  },
  {
    id: 3,
    image: Inst3,
    alt: 'instagram photo 3',
  },
  {
    id: 4,
    image: Inst4,
    alt: 'instagram photo 4',
  },
  {
    id: 5,
    image: Inst5,
    alt: 'instagram photo 5',
  },
  {
    id: 6,
    image: Inst6,
    alt: 'instagram photo 6',
  },
];

const Instagram = () => {
  const t = useTranslations('Instagram');
  return (
    <>
      <section className="instagram">
        <div className="container">
          <div className="instagram-wrapper">
            <div className="instagram-left">
              <h3 className="instagram-left__title">{t('instagram')}</h3>
              <span className="instagram-left__number">24K</span>
              <span className="instagram-left__subtitle">{t('followers')}</span>
              <Link href="/">
                <a className="instagram-left__button">{t('followUs')}</a>
              </Link>
            </div>
            <div className="instagram-right">
              {instImages.map((el) => (
                <div key={el.id} className="instagram-right__img">
                  <Image src={el.image.src} alt={el.alt} layout="fill" objectFit="cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .instagram {
        }
        .instagram-wrapper {
          display: flex;
        }
        .instagram-left {
          width: 30%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: ${color.background.dark};
        }
        .instagram-left__title {
          margin-bottom: ${spacing.nano};
          color: ${color.text.light};
          font-size: ${size.heading.small};
          font-family: ${font.secondary};
        }
        .instagram-left__number {
          margin-bottom: ${spacing.nano};
          color: ${color.text.light};
          font-size: ${size.heading.large};
          font-weight: 600;
          font-family: ${font.secondary};
        }
        .instagram-left__subtitle {
          margin-bottom: ${spacing.medium};
          font-weight: 600;
          color: ${color.text.secondary_light};
          text-transform: uppercase;
        }
        .instagram-left__button {
          padding: ${spacing.tiny} ${spacing.large};
          font-size: ${size.text.main};
          font-weight: 600;
          color: ${color.text.light};
          background-color: ${color.background.button.default_secondary};
          text-transform: uppercase;
        }

        .instagram-right {
          width: 70%;
          display: flex;
          flex-wrap: wrap;
        }
        .instagram-right__img {
          position: relative;
          width: 33.33333%;
          height: 280px;
        }
      `}</style>
    </>
  );
};

export default Instagram;
