import { Globe2 } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer>
      <div className="footerbrand">
        <Globe2 size={19} />
        <strong>CosmoSphere</strong>
      </div>
      <div>© 2026 CosmoSphere</div>
      <div className="mono">OPEN KNOWLEDGE / HUMAN CURIOSITY</div>
      <div className="footerlinks">
        <Link to="/about">About</Link>
        <Link to="/editorial-policy">Editorial policy</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
