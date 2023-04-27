import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-purple-950 text-center py-4">
      <p className="text-gray-400 text-sm">
        Made with 🧠 by{" "}
        <a
          href="https://twitter.com/bankkroll"
          className="text-purple-500 underline hover:opacity-75 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          bankkroll
        </a>{" "}
      </p>
      <p className="text-gray-400 text-sm">
        (no affiliation with{" "}
        <a
          href="https://thirdweb.com/"
          className="text-purple-500 underline hover:opacity-75 transition-opacity"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thirdweb
        </a>
        ).
      </p>
      <div className="mx-auto w-100 flex justify-center items-center mt-4">

      <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          <img
            src="/next.svg"
            alt="Next.js Logo"
            width={100}
            className="inline-block hover:opacity-75 transition-opacity mx-5"
          />
        </a>


      <a href="https://thirdweb.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/logo.png"
            alt="Thirdweb Logo"
            width={135}
            className="inline-block hover:opacity-75 transition-opacity mx-5"
          />
        </a>

        <a href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          <img
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            className="inline-block hover:opacity-75 transition-opacity mx-5"
          />
        </a>

      </div>
    </div>
  );
};

export default Footer;





