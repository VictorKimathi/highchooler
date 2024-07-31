// pages/index.tsx

import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chemistry Competition</title>
        <meta name="description" content="Compete in chemistry with high schools across the country." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Chemistry Competition</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/match">Match</Link></li>
              <li><Link href="/results">Results</Link></li>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/register">Register</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="text-center my-8">
          <h2 className="text-3xl font-bold mb-4">Welcome to the Chemistry Competition!</h2>
          <p className="text-lg mb-6">Join high school students from around the country in exciting chemistry battles. Test your knowledge and prove your skills!</p>
          <Link href="/register">
            Get Started
          </Link>
        </section>

        <section className="my-8">
          <h3 className="text-2xl font-bold mb-4">How It Works</h3>
          <p className="mb-4">1. Register and log in to your account.</p>
          <p className="mb-4">2. Find an opponent or be matched automatically.</p>
          <p className="mb-4">3. Answer chemistry questions in a timed format.</p>
          <p className="mb-4">4. The player with the highest score wins the match.</p>
        </section>

        <section className="text-center my-8">
          <h3 className="text-2xl font-bold mb-4">Features</h3>
          <ul className="list-disc list-inside">
            <li>Real-time competition with live updates</li>
            <li>Extensive question database</li>
            <li>Detailed scoring and results tracking</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Chemistry Competition. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/contact">Contact Us</Link> | 
          <Link href="/privacy">Privacy Policy</Link> | 
          <Link href="/terms">Terms of Service</Link>
        </div>
      </footer>
    </>
  );
};

export default Home;
