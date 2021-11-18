import Image from 'next/image';

import { font, color, spacing, size, breakpoints } from '../../config/theme';

import heroimg from '../../utils/images/hero/heroimg.png';

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-img">
          <Image src={heroimg} layout="fill" objectFit="cover" objectPosition="center" />
        </div>
        <div className="hero-content">
          <h3 className="hero-content__subtitle">welcome to</h3>
          <h1 className="hero-content__title">Wines</h1>
        </div>
      </section>
      <style jsx>{`
        .hero {
          position: relative;
        }
        .hero-img {
          position: relative;
          width: 100%;
          height: 100vh;
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          padding: ${spacing.medium} 0;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.83);
        }
        .hero-content__subtitle {
          font-size: ${size.heading.extra_small};
          color: ${color.text.secondary};
          text-transform: uppercase;
        }
        .hero-content__title {
          font-size: ${size.heading.large};
          font-family: ${font.secondary};
          color: ${color.text.light};
          line-height: 1;
        }

        @media (max-width: 767px) {
          .hero-content__subtitle {
            font-size: ${size.heading.extra_small};
          }
          .hero-content__title {
            font-size: ${size.heading.medium};
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
