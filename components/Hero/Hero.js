import Image from 'next/image';

import { font, color, spacing, size } from '../../config/theme';

import heroimg from '../../utils/images/hero/heroimg2.jpeg';

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
          margin-bottom: ${spacing.large};
        }
        .hero-img {
          position: relative;
          width: 100%;
          height: 100vh;
        }
        .hero-img:before {
          content: '';
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          background:linear-gradient(0deg, rgba(0,0,0,0.5102415966386555) 0%, rgba(0,0,0,1) 100%);
          z-index: 1;
        }
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          text-align: center;
          z-index: 2;
        }
        .hero-content__subtitle {
          font-size: ${size.heading.extra_small};
          color: ${color.text.secondary};
          text-transform: uppercase;
        }
        .hero-content__title {
          font-size: ${size.heading.extra_large};
          font-family: ${font.secondary};
          color: ${color.text.light};
          line-height: 1;
        }

        @media (max-width: 767px) {
          .hero-content__subtitle {
            font-size: ${size.heading.extra_small};
          }
          .hero-content__title {
            font-size: ${size.heading.large};
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
