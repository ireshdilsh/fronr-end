import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { celestialObjects } from "../data/celestialObjects";
import { CelestialModal } from "../components/celestial/CelestialModal";

export function Celestial() {
  const [selected, setSelected] = useState(null);
  return (
    <section className="container page">
      <div className="sectionhead">
        <div>
          <div className="eyebrow">CELESTIAL CATALOG</div>
          <h1>Celestial Objects</h1>
          <p>
            Explore structured entries covering the major objects and structures
            astronomers study across the universe.
          </p>
        </div>
      </div>
      <div className="objectgrid">
        {celestialObjects.map((o) => (
          <button
            className="object objectbutton"
            key={o.id}
            onClick={() => setSelected(o)}
          >
            <img src={o.image} />
            <div>
              <div className="eyebrow">{o.kind}</div>
              <h2>{o.title}</h2>
              <p>{o.description}</p>
              <span>
                Explore <ArrowRight size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>
      {selected && (
        <CelestialModal object={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
