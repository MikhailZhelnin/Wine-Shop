import { NextIntlProvider } from 'next-intl';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';

import '../styles/globals.css';

import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextIntlProvider>
  );
}

export default wrapper.withRedux(MyApp);
