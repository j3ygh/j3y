import classNames from "classnames";

const Footer = ({ extraClassNames }) => {
  return (
    <footer
      className={classNames(
        "font-pretty text-ink bg-paper dark:text-light dark:bg-night",
        extraClassNames
      )}
    >
      <div className="flex flex-col flex-wrap items-end content-end gap-2 pt-36 px-8 pb-4">
        <p className="text-5xl font-medium hover:text-black dark:hover:text-white cursor-default">
          Jimmy Lin
        </p>
        <a
          href="mailto:contact@jimmylin.org"
          className="underline hover:text-black dark:hover:text-white"
        >
          contact@jimmylin.org
        </a>
        <p className="text-ink dark:text-light text-4xl flex gap-2">
          <a
            href="https://github.com/j3ygithub"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/j3y.fb"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110"
          >
            <i className="bi bi-facebook"></i>
          </a>
        </p>
        <p className="text-xs font-extralight mt-8">
          © 2021 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
