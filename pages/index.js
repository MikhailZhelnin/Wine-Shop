import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Release from '../components/Release/Release';
import Varieties from '../components/Varieties/Varieties';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Wines</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Hero />
        <Release />
        <Varieties />
      </main>

      {/* <footer>
        {router.locales.map((item) => (
          <li key={item}>
            <Link href={router.asPath} locale={item}>
              <a>{item}</a>
            </Link>
          </li>
        ))}
      </footer> */}
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
    },
  };
}
