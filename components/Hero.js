import { useTranslations } from 'next-intl';

import { size, color, media, font, spacing } from '../config/theme';

const Hero = ({ title }) => {
  const t = useTranslations('HeroPages');
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <h2 className="hero-title">{title}</h2>
            <div className="hero-text">
              <p>{t('text')}</p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .hero {
          margin-bottom: ${spacing.large};
          padding-top: ${spacing.huge};
          background-color: ${color.background.dark};
        }
        .hero-wrapper {
          padding: ${spacing.large} 0;
          color: ${color.text.light};
        }
        .hero-title {
          margin-bottom: ${spacing.tiny};
          text-align: center;
          font-size: ${size.heading.small};
          font-weight: 400;
          font-family: ${font.secondary};
        }
        .hero-text {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          color: ${color.text.light_dark};
        }

        @media ${media.mobile} {
          .hero {
            margin-bottom: ${spacing.medium};
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
