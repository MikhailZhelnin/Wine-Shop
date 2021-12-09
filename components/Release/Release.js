import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { GiGrapes } from 'react-icons/gi';

import { font, color, spacing, size, media } from '../../config/theme';

import release from '../../public/images/release/release.jpg';

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
              <Image src={release} layout="fill" objectFit="cover" alt="Release image" />
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .release {
          margin-bottom: ${spacing.large};
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

        @media ${media.tablet} {
          .release-block {
            height: 500px;
          }
          .block__left-text {
            max-width: 70%;
            font-size: ${size.heading.smaller};
          }
        }

        @media ${media.mobile} {
          .release {
            margin-bottom: ${spacing.medium};
          }
          .release-block {
            height: 400px;
          }
          .release-wrapper {
            padding: 0 ${spacing.tiny};
          }
          .block__left-icon {
            margin-bottom: ${spacing.tiny};
          }
          .block__left-title {
            font-size: ${size.text.main};
          }
          .block__left-text {
            max-width: 90%;
            font-size: ${size.heading.extra_small};
          }
        }

        @media ${media.small_mobile} {
          .release-wrapper {
            flex-direction: column;
          }
          .release-block {
            height: 350px;
            width: 100%;
          }
          .block__left {
            order: 2;
          }
          .block__right {
            order: 1;
          }
        }
      `}</style>
    </>
  );
};

export default Release;
