import React from "react";

export const Hero = () => {
  return (
    <section className="hero my-8 py-4 rounded-lg bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold uppercase text-main tracking-wide">
            no-bs-js
          </h1>

          <small className="inline-block mt-2 text-sm tracking-wide">
            {" "}
            A Deep-Dive Into The JavaScript World
          </small>

          <p className="pt-6 mb-4 md:text-lg">
            For a long time, I was planning to take a deep dive into JavaScript.
            I&apos;m doing it now and documenting my notes in this site.
          </p>

          <p className="mb-4 md:text-lg">
            I started this adventure with the Data-types. Later I will go into
            all the important concepts including how JavaScript works behind the
            scenes. Finally, I will start problem-solving in
            <strong> Leetcode</strong>.
          </p>

          <a
            href="https://github.com/TutulDevs/NO-BS-JS"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 btn btn-primary btn-md"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </section>
  );
};
