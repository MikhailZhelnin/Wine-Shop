import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { sanityClient } from '../lib/sanity';

const categoriesQuery = `*[_type == "categories" && categName == "White wines"] {
  items
}`;

import Hero from '../components/Hero';
import Wines from '../components/Wines/Wines';

const Shop = ({ whiteWines }) => {
  const t = useTranslations('HeroPages');
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

      <Hero title={t('whiteWines')} />

      <Wines wines={whiteWines} />
    </div>
  );
};

export default Shop;

export async function getStaticProps({ locale }) {
  const categories = await sanityClient.fetch(categoriesQuery);
  const whiteWines = categories?.[0]?.items.map((wine) => {
    return {
      id: wine?._key,
      title: wine?.title,
      description: wine?.description,
      price: wine?.price,
      image: wine?.image,
    };
  });
  return {
    props: {
      messages: require(`../locales/${locale}.json`),
      whiteWines,
    },
  };
}
