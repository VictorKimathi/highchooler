// pages/match.tsx
"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import io from 'socket.io-client';

const socket = io('http://localhost:3000'); // Replace with your backend URL

const Match = () => {
  const [time, setTime] = useState(0);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState<string[]>([]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Answer, setPlayer1Answer] = useState<string | null>(null);
  const [player2Answer, setPlayer2Answer] = useState<string | null>(null);
  const [isMatchOver, setIsMatchOver] = useState(false);

  useEffect(() => {
    socket.on('question', (newQuestion: any) => {
      setQuestion(newQuestion.text);
      setOptions(newQuestion.options);
    });

    socket.on('timeUpdate', (timeRemaining: number) => {
      setTime(timeRemaining);
    });

    socket.on('scoreUpdate', (scores: any) => {
      setPlayer1Score(scores.player1);
      setPlayer2Score(scores.player2);
    });

    socket.on('matchOver', (winner: string) => {
      setIsMatchOver(true);
      // Handle displaying the winner
    });

    return () => {
      socket.off('question');
      socket.off('timeUpdate');
      socket.off('scoreUpdate');
      socket.off('matchOver');
    };
  }, []);

  const handleAnswerSubmit = (answer: string) => {
    if (!isMatchOver) {
      socket.emit('submitAnswer', answer);
      // Handle answer submission
    }
  };

  return (
    <>
      <Head>
        <title>Match - Chemistry Competition</title>
        <meta name="description" content="Current chemistry match in progress." />
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

      <main className="container mx-auto p-4">
        {isMatchOver ? (
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Match Over</h2>
            <p className="text-lg mb-4">Congratulations to the winner!</p>
            {/* Display winner information here */}
            <a href="/" className="bg-blue-600 text-white px-4 py-2 rounded">Back to Home</a>
          </section>
        ) : (
          <>
            <section className="my-8">
              <h2 className="text-2xl font-bold mb-4">Time Remaining: {time}s</h2>
              <h3 className="text-xl font-semibold mb-2">{question}</h3>
              <div className="mb-4">
                {options.map((option, index) => (
                  <button
                    key={index}
                    className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                    onClick={() => handleAnswerSubmit(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </section>

            <section className="my-8">
              <h3 className="text-2xl font-bold mb-4">Scoreboard</h3>
              <p className="text-lg">Player 1: {player1Score}</p>
              <p className="text-lg">Player 2: {player2Score}</p>
            </section>
          </>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Chemistry Competition. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Match;
