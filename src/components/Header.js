import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdFlower } from "react-icons/io";

export default function Header() {
  const searchInput = useRef();

  const searchHandler = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    alert(`You entered: ${searchInput.current.value}`);
  };
  const loginHandler = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    alert(`Ridirect : Log in`);
  };
  const signupHandler = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    alert(`Ridirect : Sign up`);
  };

  return (
    <div className="header">
      <nav className="nav">
        <div className="logo-container">
          <IoMdFlower id="logo" />
          <h4>ZinTools</h4>
        </div>
        <form className="search--form">
          <label htmlFor="search">
            <input
              type="text"
              placeholder="Search for Movies, TV Shows, Theadfasmes & Cast"
              id="search"
              name="search"
              ref={searchInput}
            />
          </label>
          <button type="submit" onClick={searchHandler}>
            <FaSearch />
          </button>
        </form>

        <div className="form-controls">
          <button id="login" onClick={loginHandler}>
            Log in
          </button>
          <button id="signup" onClick={signupHandler}>
            Sign up
          </button>
        </div>
      </nav>
      <ul className="menu-items">
        {[
          { url: "https://elements.envato.com/", tag: "Stock Video" },
          { url: "https://elements.envato.com/", tag: "Video Templates" },
          { url: "https://elements.envato.com/", tag: "Music" },
          { url: "https://elements.envato.com/", tag: "Sound Effects" },
          { url: "https://elements.envato.com/", tag: "Graphic Templates" },
          { url: "https://elements.envato.com/", tag: "Graphics" },
          {
            url: "https://elements.envato.com/",
            tag: "Presentation Templates",
          },
          { url: "https://elements.envato.com/", tag: "Photos" },
          { url: "https://elements.envato.com/", tag: "Fonts" },
          { url: "https://elements.envato.com/", tag: "Add-ons" },
          { url: "https://elements.envato.com/", tag: "More" },
        ].map((el, i) => (
          <li className="menu-item" key={i}>
            <a href={el.url}>{el.tag}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
