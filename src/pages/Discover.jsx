import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Discover() {
  return (
    <section className="container page">
      <div className="discover">
        <div className="eyebrow">DISCOVER</div>
        <h1>JWST Uncovers Deepest Galaxy Clusters Yet</h1>
        <p className="lead">
          A visual-first briefing on how new observations are pushing the
          observable frontier deeper into cosmic history.
        </p>
        <div className="discovergrid">
          <div>
            <div className="bigstat">13.4B</div>
            <div className="mono">YEARS OF LIGHT-TRAVELLED SIGNAL</div>
          </div>
          <div className="brief">
            <h3>Why it matters</h3>
            <p>
              Faint galaxies provide a time capsule for early star formation,
              structure growth and the evolution of matter.
            </p>
            <Link className="primary" to="/articles">
              Read the briefing <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
