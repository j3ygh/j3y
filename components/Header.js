import Link from "next/link";
import classNames from "classnames";

const Header = ({ useIsDark, extraClassNames, headerRef }) => {
  const [isDark, setIsDark] = useIsDark;
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <header
      className={classNames(
        "font-sans font-semibold text-ink bg-paper dark:text-light dark:bg-night transition-bg sticky top-0 z-10",
        extraClassNames
      )}
      ref={headerRef}
    >
      <div className="flex justify-between items-end gap-4 px-8 whitespace-nowrap">
        <p className="my-5 text-2xl transform hover:scale-105">
          <Link href="/">
            <a>
              <span className="animate-fadein-1000-200">J</span>
              <span className="animate-fadein-1000-250">i</span>
              <span className="animate-fadein-1000-300">m</span>
              <span className="animate-fadein-1000-350">m</span>
              <span className="animate-fadein-1000-400">y</span>
              <span className="animate-fadein-1000-450"> </span>
              <span className="animate-fadein-1000-500">L</span>
              <span className="animate-fadein-1000-550">i</span>
              <span className="animate-fadein-1000-600">n</span>
            </a>
          </Link>
        </p>
        <p className="text-center my-5 text-xl text-indigo-400 hover:text-indigo-500 dark:text-yellow-400 dark:hover:text-yellow-300 transform hover:scale-105">
          <Link href="/posts">
            <a className="animate-fadein-1000-1000">Posts</a>
          </Link>
        </p>
        <div className="flex items-center animate-fadein-1000-700 my-5 ml-auto">
          <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in select-none">
            <input
              type="checkbox"
              name="toggle"
              id="toggle"
              className="absolute block w-6 h-6 border-4 rounded-full appearance-none cursor-pointer focus:outline-none checked:right-0 bg-gray-500 checked:bg-white border-gray-300"
              onChange={toggleDarkMode}
              checked={!isDark}
            />
            <label
              htmlFor="toggle"
              className="block h-6 overflow-hidden rounded-full cursor-pointer bg-gray-300"
            ></label>
          </div>
          <label htmlFor="toggle">
            {isDark ? (
              <i className="bi bi-moon-fill"></i>
            ) : (
              <i className="bi bi-sun-fill"></i>
            )}
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
