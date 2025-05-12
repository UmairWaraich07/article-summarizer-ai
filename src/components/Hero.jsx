import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex items-center justify-center flex-col">
      <nav className="w-full flex items-center justify-between mb-10">
        <img src={logo} alt="AI summarizer" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://github.com")}
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">Sumz</span>
      </h1>

      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
