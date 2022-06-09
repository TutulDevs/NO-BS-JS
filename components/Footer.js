import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="footer bg-neutral">
      <div className="container mx-auto flex items-center justify-between p-4 text-neutral-content">
        <p>
          Made with ❤ by{" "}
          <a
            href="https://twitter.com/TutulDevs"
            target="_blank"
            rel="noopener noreferrer"
            className="link link-primary link-hover text-[#7acb53]"
          >
            Tutul
          </a>{" "}
        </p>

        <a
          href="https://github.com/TutulDevs/NO-BS-JS"
          target="_blank"
          rel="noopener noreferrer"
          className="avatar"
        >
          <Image
            src="/github.png"
            alt="github link"
            aria-label="github logo"
            width={24}
            height={24}
          />
        </a>
      </div>
    </footer>
  );
};
