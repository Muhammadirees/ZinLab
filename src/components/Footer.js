import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-item follow-us">
        <h3>Follow us</h3>
        <div className="social-icons">
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.twitter.com/">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="footer-item horizontal-lists">
        <ul>
          <h3>Internal Links</h3>
          <a href="https:www.youtube.com/documentaries">
            <li>Documentaries</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Themes</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Cast</li>
          </a>
        </ul>
        <ul>
          <h3>Enterprice</h3>
          <a href="https:www.youtube.com/documentaries">
            <li>Download Chrome Broswer</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Broswer For Enterprice</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Broswer Devices</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>ChromeOS</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Google Cloud</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Google Workspace</li>
          </a>
        </ul>
        <ul>
          <h3>Internal Links</h3>
          <a href="https:www.youtube.com/documentaries">
            <li>Documentaries</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Themes</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Cast</li>
          </a>
        </ul>
        <ul>
          <h3>Enterprice</h3>
          <a href="https:www.youtube.com/documentaries">
            <li>Download Chrome Broswer</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Broswer For Enterprice</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Broswer Devices</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>ChromeOS</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Google Cloud</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Google Workspace</li>
          </a>
        </ul>
        <ul>
          <h3>Internal Links</h3>
          <a href="https:www.youtube.com/documentaries">
            <li>Documentaries</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Themes</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Chrome Cast</li>
          </a>
        </ul>
      </div>

      <div className="footer-item contact">
        <ul className="contact-container">
          <div className="contact-header">
            <span>Similar</span>
            <span id="first-header">Watch</span>
          </div>
          <a href="https:www.youtube.com/documentaries">
            <li>Privacy Policy</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Term and Contions</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Cookie Policy</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>About us</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>EULA</li>
          </a>
          <a href="https:www.youtube.com/documentaries">
            <li>Contact</li>
          </a>
        </ul>
        <div className="footer-logo">
          <FaRegMoon />
        </div>
      </div>
    </footer>
  );
}
