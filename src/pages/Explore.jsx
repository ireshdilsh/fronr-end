import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { imgs } from "../assets/images";
import { CategoryCard } from "../components/common/CategoryCard";

export function Explore() {
  return (
    <section className="container page">
      <div className="hero center">
        <div className="eyebrow">COSMIC CATALOG</div>
        <h1>Explore the Universe</h1>
        <p>
          Navigate a living catalog of worlds, stars, galaxies and phenomena
          beyond our atmosphere.
        </p>
        <div className="searchbox">
          <Search size={21} />
          <input placeholder="Search the cosmos..." />
          <button
            onClick={() =>
              document
                .getElementById("catalog")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Locate
          </button>
        </div>
      </div>
      <div id="catalog" className="catalog">
        <CategoryCard
          large
          title="Planets"
          kicker="LOCAL SYSTEM"
          image={imgs.planets}
        />
        <CategoryCard
          title="Exoplanets"
          kicker="DISTANT WORLDS"
          image={imgs.exoplanets}
        />
        <CategoryCard
          title="Stars"
          kicker="STELLAR BODIES"
          image={imgs.stars}
        />
        <CategoryCard
          title="Galaxies"
          kicker="MACRO-STRUCTURES"
          image={imgs.galaxies}
        />
        <CategoryCard
          title="Nebulae"
          kicker="GAS & DUST"
          image={imgs.nebulae}
        />
        <div className="objectCard">
          <div className="eyebrow">CATALOG INDEX</div>
          <h3>Black Holes</h3>
          <p>
            Extreme gravity, event horizons and the most compact objects in the
            universe.
          </p>
          <Link to="/celestial-objects">
            View objects <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
