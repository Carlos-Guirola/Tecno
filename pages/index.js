import Head from 'next/head';
import ContactForm from '../components/ContactForm.js';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TecnoArte-Web</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ContactForm />
      </main>
    </div>
  );
}
