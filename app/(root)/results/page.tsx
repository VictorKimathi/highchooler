// pages/results.tsx

import { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';

const Results: NextPage = () => {
  // Dummy data for example purposes
  const winner = "Player 1";
  const player1Score = 10;
  const player2Score = 8;
  const player1Stats = {
    questionsAnswered: 12,
    correctAnswers: 10
  };
  const player2Stats = {
    questionsAnswered: 11,
    correctAnswers: 8
  };

  return (
    <>
      <Head>
        <title>Match Results - Chemistry Competition</title>
        <meta name="description" content="Results of the recent chemistry competition match." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Chemistry Competition</h1>
          <nav>
            <a href="/">Home</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto p-4 text-center">
        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Match Results</h2>
          <p className="text-xl mb-4">Congratulations to {winner}!</p>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Final Scores</h3>
            <p className="text-lg">Player 1: {player1Score}</p>
            <p className="text-lg">Player 2: {player2Score}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl font-semibold mb-2">Player Statistics</h3>
            <p className="text-lg font-bold">Player 1</p>
            <p>Questions Answered: {player1Stats.questionsAnswered}</p>
            <p>Correct Answers: {player1Stats.correctAnswers}</p>
            <p className="text-lg font-bold">Player 2</p>
            <p>Questions Answered: {player2Stats.questionsAnswered}</p>
            <p>Correct Answers: {player2Stats.correctAnswers}</p>
          </div>
          <div className="flex justify-center space-x-4">
            <Link href="/match">
            Start New Match
            </Link>
            <Link href="/">
           Back to Home
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Chemistry Competition. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Results;
