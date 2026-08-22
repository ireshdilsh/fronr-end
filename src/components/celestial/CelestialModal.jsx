import { CheckCircle2, Orbit, Star, X } from "lucide-react";

export function CelestialModal({ object, onClose }) {
  return (
    <div
      className="modalbackdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal celestialmodal">
        <button className="modalclose" onClick={onClose}>
          <X />
        </button>
        <img className="modalimage" src={object.image} />
        <div className="articlemodalbody">
          <div className="eyebrow">{object.kind}</div>
          <h2>{object.title}</h2>
          <p className="articlelead">{object.description}</p>
          <div className="facts">
            <h3>Catalog facts</h3>
            {object.facts.map((f) => (
              <div key={f}>
                <CheckCircle2 size={17} />
                {f}
              </div>
            ))}
          </div>
          <div className="articlebody">
            <p>{object.body}</p>
            <p>
              Researchers combine observations from telescopes, spacecraft,
              spectroscopy and mathematical models to understand these objects
              and place them within the larger history of the cosmos.
            </p>
          </div>
          <div className="articletags">
            <span>
              <Orbit size={14} />
              Celestial catalog
            </span>
            <span>
              <Star size={14} />
              Research reference
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
