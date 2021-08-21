import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Article from "../../_data/posts/install-docker-engine-on-a-ubuntu-2004.mdx"

const Post = ({ isDark, setIsDark }) => {
  return (
    <>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <main className="font-pretty text-ink bg-paper dark:text-light dark:bg-night transition-bg min-h-screen py-20">
        <div className="max-w-screen-md p-4 mx-auto">
          <article className="prose dark:prose-dark p-4">
            <Article />
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Post;
