import Image from 'next/image';
import Link from 'next/link';

import { font, color, spacing, size, breakpoints } from '../../config/theme';

const Poster = () => {
  return (
    <>
      <section className="poster">
        <div className="container">
          <div className="poster-wrapper"></div>
        </div>
      </section>
      <style jsx>{`
        .poster {
          margin-bottom: ${spacing.large};
        }
        .poster-wrapper {
        }
      `}</style>
    </>
  );
};

export default Poster;
