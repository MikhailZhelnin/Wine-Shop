import Image from 'next/image';
import { color, font, media, size, spacing } from '../../config/theme';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

import varietiesRed from '../../public/images/varieties/varietiesRed.png';
import varietiesWhite from '../../public/images/varieties/varietiesWhite.png';

const Varieties = () => {
  const t = useTranslations('Varieties');

  return (
    <>
      <section className="varieties">
        <div className="varieties-wrapper">
          <div className="varieties-wrapper__left">
            <div className="varieties-wrapper__left-img">
              <Image src={varietiesRed.src} layout="fill" objectFit="cover" alt="Red wines" />
            </div>
            <div className="varieties-wrapper__left-content">
              <div className="varieties-wrapper__left-content__features">
                <span>3</span>
                <h3>{t('varietals')}</h3>
              </div>
              <div className="varieties-wrapper__left-content__features">
                <span>162</span>
                <h3>{t('produced')}</h3>
              </div>
              <div className="varieties-wrapper__left-content__features">
                <span>48</span>
                <h3>{t('awards')}</h3>
              </div>
            </div>
          </div>
          <div className="varieties-wrapper__right">
            <h3 className="varieties-wrapper__right-subtitle">{t('varieties')}</h3>
            <h1 className="varieties-wrapper__right-title">{t('nameRed')}</h1>
            <div className="varieties-wrapper__right-content">
              <span className="varieties-wrapper__right-content__sorts">Cabarnet Sauvignon</span>
              <span className="varieties-wrapper__right-content__sorts">Merlot</span>
              <span className="varieties-wrapper__right-content__sorts">Pinot Noir</span>
            </div>
            <button className="varieties-wrapper__right-button">{t('shopNow')}</button>
          </div>
        </div>

        <div className="varieties-wrapper">
          <div className="varieties-wrapper__left">
            <div className="varieties-wrapper__left-img">
              <Image src={varietiesWhite.src} layout="fill" objectFit="cover" alt="red wines" />
            </div>
            <div className="varieties-wrapper__left-content">
              <div className="varieties-wrapper__left-content__features">
                <span>3</span>
                <h3>{t('varietals')}</h3>
              </div>
              <div className="varieties-wrapper__left-content__features">
                <span>162</span>
                <h3>{t('produced')}</h3>
              </div>
              <div className="varieties-wrapper__left-content__features">
                <span>48</span>
                <h3>{t('awards')}</h3>
              </div>
            </div>
          </div>
          <div className="varieties-wrapper__right">
            <h3 className="varieties-wrapper__right-subtitle">{t('varieties')}</h3>
            <h1 className="varieties-wrapper__right-title">{t('nameWhite')}</h1>
            <div className="varieties-wrapper__right-content">
              <span className="varieties-wrapper__right-content__sorts">Cabarnet Sauvignon</span>
              <span className="varieties-wrapper__right-content__sorts">Merlot</span>
              <span className="varieties-wrapper__right-content__sorts">Pinot Noir</span>
            </div>
            <button className="varieties-wrapper__right-button">{t('shopNow')}</button>
          </div>
        </div>
      </section>
      <style jsx>{`
        .varieties {
          margin-bottom: ${spacing.large};
          padding: ${spacing.huge} 0;
          background-color: ${color.background.white_darker};
        }
        .varieties-wrapper {
          display: flex;
          align-items: center;
        }
        .varieties-wrapper__left {
          width: 65%;
        }
        .varieties-wrapper__left-img {
          position: relative;
          width: 100%;
          height: 400px;
        }
        .varieties .varieties-wrapper:nth-child(1) {
          margin-bottom: ${spacing.huge};
        }
        .varieties .varieties-wrapper:nth-child(2) .varieties-wrapper__left {
          order: 2;
        }
        .varieties .varieties-wrapper:nth-child(2) .varieties-wrapper__right {
          order: 1;
        }
        .varieties-wrapper__left-content {
          display: flex;
          justify-content: space-around;
        }
        .varieties-wrapper__left-content__features {
          text-align: center;
        }
        .varieties-wrapper__left-content__features span {
          display: inline-flex;
          margin-bottom: ${spacing.tiny};
          font-size: ${size.heading.medium};
          font-weight: 600;
          font-family: ${font.secondary};
        }
        .varieties-wrapper__left-content__features h3 {
          font-size: ${size.text.large};
          color: ${color.text.secondary_light};
          text-transform: uppercase;
          font-weight: 400;
        }
        .varieties-wrapper__right {
          width: 35%;
          height: 600px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-left: 100px;
          background-color: ${color.background.white};
        }
        .varieties-wrapper__right-subtitle {
          margin-bottom: ${spacing.nano};
          font-size: ${size.text.large};
          font-weight: 400;
          color: ${color.text.secondary_light};
          text-transform: uppercase;
        }
        .varieties-wrapper__right-title {
          margin-bottom: ${spacing.large};
          font-size: ${size.heading.small};
          font-weight: 400;
          font-family: ${font.secondary};
        }
        .varieties-wrapper__right-content {
          margin-bottom: ${spacing.large};
          display: flex;
          flex-direction: column;
        }
        .varieties-wrapper__right-content__sorts {
          position: relative;
          padding-left: ${spacing.huge};
          margin-bottom: ${spacing.mini};
        }
        .varieties-wrapper__right-content__sorts:before {
          content: '';
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 30px;
          height: 0.1px;
          background: ${color.background.secondary};
        }
        .varieties-wrapper__right-button {
          font-size: ${size.text.main};
          padding: ${spacing.tinier} ${spacing.huge};
          color: ${color.text.light};
          background-color: ${color.background.dark};
          border: none;
          text-transform: uppercase;
          cursor: pointer;
        }

        @media ${media.tablet} {
          .varieties-wrapper__left-img {
            height: 250px;
          }
          .varieties-wrapper__left-content__features span {
            margin-bottom: ${spacing.mini};
            font-size: ${size.heading.small};
          }
          .varieties-wrapper__right {
            align-items: center;
            height: 450px;
            padding-left: 0;
          }
        }
        @media (max-width: 850px) {
          .varieties-wrapper__left {
            width: 60%;
          }
          .varieties-wrapper__left-img {
            height: 190px;
          }
          .varieties-wrapper__right {
            width: 40%;
            height: 400px;
          }
          .varieties-wrapper__right-title {
            margin-bottom: ${spacing.medium};
          }
          .varieties-wrapper__right-content {
            margin-bottom: ${spacing.medium};
          }
          .varieties-wrapper__right-button {
            padding: ${spacing.tiny} ${spacing.large};
          }
        }
        @media ${media.mobile} {
          .varieties {
            padding: ${spacing.medium} 0;
          }
          .varieties-wrapper {
            display: flex;
            flex-direction: column;
          }
          .varieties-wrapper__left-content__features h3 {
            font-size: ${size.text.main};
          }
          .varieties .varieties-wrapper:nth-child(1) {
            margin-bottom: ${spacing.medium};
          }
          .varieties .varieties-wrapper:nth-child(2) .varieties-wrapper__left {
            order: 1;
          }
          .varieties .varieties-wrapper:nth-child(2) .varieties-wrapper__left-img {
            margin-left: calc(100% - 80%);
          }
          .varieties .varieties-wrapper:nth-child(2) .varieties-wrapper__right {
            order: 2;
          }
          .varieties-wrapper__left {
            width: 100%;
            margin-bottom: ${spacing.medium};
          }
          .varieties-wrapper__left-img {
            width: 80%;
          }
          .varieties-wrapper__right {
            width: 100%;
            height: 320px;
          }
          .varieties-wrapper__right-title {
            margin-bottom: ${spacing.small};
          }
          .varieties-wrapper__right-content {
            margin-bottom: ${spacing.small};
          }
          .varieties-wrapper__right-button {
            padding: ${spacing.tiny} ${spacing.large};
          }
        }
        @media ${media.small_mobile} {
          .varieties-wrapper__left-img {
            width: 100%;
            height: 120px;
          }
          .varieties .varieties-wrapper:nth-child(2) .varieties-wrapper__left-img {
            margin-left: 0;
          }
          .varieties-wrapper__left-content {
            flex-direction: column;
          }
          .varieties-wrapper__right-subtitle {
            font-size: ${size.text.main};
          }
          .varieties-wrapper__right-title {
            font-size: ${size.heading.smaller};
          }
          .varieties-wrapper__right-button {
            padding: ${spacing.tiny} ${spacing.tiny};
          }
        }
      `}</style>
    </>
  );
};

export default Varieties;
