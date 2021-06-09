const App = () => {
  return (
    <>
      {/* header - A 100% height block with parallax background. */}
      <header className="h-screen header parallax">
        <div className="animate-pulse">
          <p className="px-8 pt-8 text-4xl text-white serif">
            <a href="/">Jimmy Lin</a>
          </p>
          <p className="px-8 pt-2 text-xs text-white">
            <a href="/">– PERSONAL INFO</a>
          </p>
        </div>
      </header>
      {/* content - Some real content here. */}
      <section className="bg-gray-100 content">
        <div className="max-w-screen-sm mx-auto bg-gray-50">
          <p className="p-5"></p>

          <p className="p-5 text-4xl serif">I'm Jimmy Lin.</p>
          <p className="p-5 text-sm">
            I have worked in{" "}
            <a href="https://www.chief.com.tw" target="_blank" rel="noreferrer" className="text-gray-500 underline hover:text-gray-600">
              Chief Telecom
            </a>{" "}
            for 4 years. I like web development very well. I especially like to build a website with Django and react.
          </p>

          <p className="p-5 text-4xl serif">I like to create things that amaze people.</p>
          <p className="p-5 text-sm">
            I like to amaze people with what I've done. Creating things are incredible, and programming gives us the power to create. That is why I love
            programming so well.
          </p>

          <p className="p-5 text-4xl serif">My skills</p>

          <div className="ml-5">
          <p className="p-5 text-2xl serif">Language</p>
          <ul className="pl-5 text-sm">
            <li className="ml-5">- Python</li>
            <li className="ml-5">- HTML</li>
            <li className="ml-5">- CSS</li>
            <li className="ml-5">- JavaScript</li>
          </ul>

          <p className="p-5 text-2xl serif">DB</p>
          <ul className="pl-5 text-sm">
            <li className="ml-5">- MSSQL</li>
            <li className="ml-5">- MySQL</li>
            <li className="ml-5">- MariaDB</li>
            <li className="ml-5">- PostgreSQL</li>
          </ul>

          <p className="p-5 text-2xl serif">Framework</p>
          <ul className="pl-5 text-sm">
            <li className="ml-5">- Django</li>
            <li className="ml-5">- Django REST Framework</li>
            <li className="ml-5">- Bootstrap</li>
            <li className="ml-5">- Tailwind CSS</li>
            <li className="ml-5">- React.js</li>
            <li className="ml-5">- Vue.js</li>
          </ul>

          <p className="p-5 text-2xl serif">Development</p>
          <ul className="pl-5 text-sm">
            <li className="ml-5">- Git</li>
            <li className="ml-5">- Visual Studio</li>
            <li className="ml-5">- Draw.io</li>
            <li className="ml-5">- Docker</li>
          </ul>

          <p className="p-5 text-2xl serif">Other</p>
          <ul className="pl-5 text-sm">
            <li className="ml-5">- Linux</li>
            <li className="ml-5">- Cisco Command</li>
            <li className="ml-5">- FortiOS Command</li>
          </ul>
          </div>

          <p className="p-5 text-sm"></p>

          <p className="max-w-screen-sm p-5 mx-auto text-4xl serif">Thank you for watching.</p>
          <p className="max-w-screen-sm p-5 mx-auto text-sm">
            I really appreciate that you've given me sometimes to introduce myself. For now, if you are interested with me, maybe you would like to know more
            about me with:
          </p>

          <p className="max-w-screen-sm p-5 mx-auto">
            <a href="https://github.com/j3ygithub" target="_blank" rel="noreferrer" className="pr-4 text-gray-500 underline hover:text-gray-600">
              Github
            </a>
            <a href="https://www.cakeresume.com/b00502013" target="_blank" rel="noreferrer" className="pr-4 text-gray-500 underline hover:text-gray-600">
              Cakeresume
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-lin-5779a61b5/"
              target="_blank"
              rel="noreferrer"
              className="pr-4 text-gray-500 underline hover:text-gray-600"
            >
              LinkedIn
            </a>
          </p>

          <p className="p-5"></p>
        </div>
      </section>

      <footer className="flex items-center justify-center h-12 bg-gray-100 footer">
        <div className="max-w-screen-sm mx-auto text-sm text-center text-gray-500">
          © 2021 All rights reserved.
        </div>
      </footer>

    </>
  );
};

export default App;
