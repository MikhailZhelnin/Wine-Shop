import { NextIntlProvider } from 'next-intl';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextIntlProvider>
  );
}

export default MyApp;
