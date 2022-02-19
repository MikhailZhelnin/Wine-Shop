import Wine from './Wine/Wine';

import { media } from '../../config/theme';

const Wines = ({ wines }) => {
  return (
    <>
      <section className="wines">
        <div className="container">
          <div className="wines-wrapper">
            {wines.map((wine) => (
              <Wine key={wine.id} {...wine} />
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        .wines {
        }
        .wines-wrapper {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        @media ${media.mobile} {
          .wines-wrapper {
            justify-content: space-around;
          }
        }
      `}</style>
    </>
  );
};

export default Wines;
