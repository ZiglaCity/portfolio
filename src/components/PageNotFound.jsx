import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4 mt-5">
      <h1 className="text-6xl font-bold mb-4 text-gray-300">404</h1>
      <p className="text-xl mb-6 text-gray-400">
        You’ve officially entered the <em>Wrongest</em> Route 😅 <br />
        Whatever you’re looking for doesn’t exist — at least not yet.
      </p>

      <img 
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" 
        alt="Lost in code"
        className="w-72 sm:w-84 rounded-lg shadow-lg mb-8"
      />

      <Link to="/">
        <button className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition">
          🏃🏽‍♂️ Go Home Before You Get Lost-er
        </button>
      </Link>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 italic">
        — Zigla reports: this route was cooked in imagination only.
      </p>
    </div>
  );
};

export default NotFound;
