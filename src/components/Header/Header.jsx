import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/characters">Characters</Link>
    </header>
  );
}
