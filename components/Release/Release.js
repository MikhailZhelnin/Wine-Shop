import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GiGrapes } from 'react-icons/gi';

import { font, color, spacing, size } from '../../config/theme';

import release from '../../utils/images/release/release.jpg';

const Release = () => {
  const t = useTranslations('Release');

  return (
    <>
      <section className="release">
        <div className="container">
          <div className="release-wrapper">
            <div className="release-block block__left">
              <span className="block__left-icon">
                <GiGrapes />
              </span>
              <h3 className="block__left-title">{t('title')}</h3>
              <div className="block__left-text">
                <p>{t('text')}</p>
              </div>
            </div>

            <div className="release-block block__right">
              <Image src={release} layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .release {
        }
        .release-wrapper {
          display: flex;
          padding: 0 ${spacing.large};
        }
        .release-block {
          width: 50%;
          height: 650px;
        }
        .block__left {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: ${color.background.secondary};
        }
        .block__left-icon {
          display: inline-flex;
          font-size: ${size.icons.extra};
          margin-bottom: ${spacing.small};
          color: ${color.background.white};
        }
        .block__left-title {
          margin-bottom: ${spacing.mini};
          font-size: ${size.text.large};
          font-weight: 500;
          color: ${color.text.secondary_light};
          text-transform: uppercase;
        }
        .block__left-text {
          max-width: 65%;
          text-align: center;
          color: ${color.text.light};
          font-size: ${size.heading.small};
        }
        .block__left-text p {
          font-family: ${font.secondary};
        }
        .block__right {
          position: relative;
        }
      `}</style>
    </>
  );
};

export default Release;
