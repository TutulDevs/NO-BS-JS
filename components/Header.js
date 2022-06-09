import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-neutral">
      <div className="navbar container mx-auto">
        <div className="flex-1 text-neutral-content">
          <Link href="/">
            <a className="btn btn-ghost normal-case text-xl">NO-BS-JS</a>
          </Link>
        </div>

        <div className="flex-none">
          <select
            data-choose-theme
            className="select select-sm w-full max-w-xs capitalize"
          >
            {["light", "dark", "cupcake", "emerald", "dracula", "night"].map(
              (el, idx) => (
                <option key={el + idx} value={el}>
                  {el}
                </option>
              )
            )}
          </select>
        </div>
      </div>
    </div>
  );
};
