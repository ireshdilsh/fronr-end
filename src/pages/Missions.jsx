import { ArrowRight, Orbit } from "lucide-react";
import { missions } from "../data/missions";

export function Missions() {
  return (
    <section className="container page">
      <div className="missionhero">
        <div className="eyebrow">MISSION DOSSIERS</div>
        <h1>Explore the Final Frontier</h1>
        <p>
          Follow landmark missions, instruments and discoveries from Earth orbit
          to the edge of the solar system.
        </p>
      </div>
      <div className="missiongrid">
        {missions.map((m) => (
          <div className="mission" key={m[0]}>
            <div className="missionicon">
              <Orbit />
            </div>
            <div className="eyebrow">{m[1]}</div>
            <h2>{m[0]}</h2>
            <p>{m[2]}</p>
            <button>
              Open dossier <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
