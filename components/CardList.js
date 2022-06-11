import Link from "next/link";

const LIST = [
  {
    id: 1,
    title: "JS Concepts",
    desc: `Discussion, notes and mental-models of various JavaScript concepts.`,
    link: "/concepts",
  },
  {
    id: 2,
    title: "DSA",
    desc: `Data-Structures & Algorithms problem-solving in different platforms.`,
    link: "/dsa",
  },
];

export const CardList = () => {
  return (
    <section className="my-8 py-4 flex flex-col md:flex-row gap-8 md:gap-12 justify-center">
      {LIST.map((item) => (
        <div
          key={item.id}
          className="card w-full md:w-96 bg-base-200 shadow-none hover:shadow-xl ease-in duration-300 border border-transparent hover:border-slate-500"
        >
          <Link href={item.link}>
            <a className="card-body">
              <h2 className="card-title mb-2 text-2xl md:text-3xl text-main">
                {item.title}
              </h2>

              <p>{item.desc}</p>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
};
