import Image from 'next/image';

import varietiesRed from '../../utils/images/varieties/varietiesRed.png';
import varietiesWhite from '../../utils/images/varieties/varietiesWhite.png';

const Varieties = () => {
  return (
    <>
      <section className="varieties">
        <div className="varieties-reds">
          <div className="varieties-reds__left">
            <div className="varieties-reds__left-img">
              {/* <Image src={varietiesRed.src} layout="fill" /> */}
            </div>
            <div className="varieties-reds__left-content">
              <div className="varieties-reds__left-content__features">
                <span>5</span>
                <h3>Varietals</h3>
              </div>
              <div className="varieties-reds__left-content__features">
                <span>162</span>
                <h3>Wine produced</h3>
              </div>
              <div className="varieties-reds__left-content__features">
                <span>48</span>
                <h3>Awards won</h3>
              </div>
            </div>
          </div>
          <div className="varieties-reds__right">
            <h3 className="varieties-reds__right-subtitle">varieties</h3>
            <h1 className="varieties-reds__right-title">The Reds</h1>
            <div className="varieties-reds__right-content">
              <span className="varieties-reds__right-content__sorts">Cabarnet Sauvignon</span>
              <span className="varieties-reds__right-content__sorts">Merlot</span>
              <span className="varieties-reds__right-content__sorts">Pinot Noir</span>
            </div>
            <button className="varieties-reds__right-button">shop now</button>
          </div>
        </div>

        <div className="varieties-whites"></div>
      </section>
      <style jsx>{`
        .varieties {
        }
        .varieties-reds {
          display: flex;
        }
        .varieties-reds__left {
        }
        .varieties-reds__left-img {
        }
        .varieties-reds__left-content {
        }
        .varieties-reds__left-content__features {
        }
        .varieties-reds__right {
        }
        .varieties-reds__right-subtitle {
        }
        .varieties-reds__right-title {
        }
        .varieties-reds__right-content {
        }
        .varieties-reds__right-content__sorts {
        }
        .varieties-reds__right-button {
        }
      `}</style>
    </>
  );
};

export default Varieties;
