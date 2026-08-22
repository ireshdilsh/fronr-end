import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { articles } from "../data/articles";
import { ArticleModal } from "../components/articles/ArticleModal";

export function CollectionPage({ type }) {
  let title = "My Posts",
    eyebrow = "YOUR WRITING",
    items = articles.slice(0, 4);
  if (type === "liked") {
    title = "Liked Articles";
    eyebrow = "YOUR REACTIONS";
    items = articles.slice(1, 5);
  }
  if (type === "favorites") {
    title = "Favorites";
    eyebrow = "SAVED RESEARCH";
    items = articles.slice(2, 6);
  }
  const [selected, setSelected] = useState(null);
  return (
    <section className="container page">
      <div className="eyebrow">{eyebrow}</div>
      <h1>{title}</h1>
      <p className="lead">
        A focused collection inside your CosmoSphere account, using the same
        editorial card system as the main archive.
      </p>
      <div className="articlegrid accountgrid">
        {items.map((a) => (
          <button
            className="article articlebutton"
            key={a.id}
            onClick={() => setSelected(a)}
          >
            <img src={a.image} />
            <div className="articlecontent">
              <div className="articlemeta">
                <span>{a.cat}</span>
                <span>{a.time}</span>
              </div>
              <h2>{a.title}</h2>
              <p>{a.excerpt}</p>
              <span className="readlink">
                Open article <ArrowRight size={16} />
              </span>
            </div>
          </button>
        ))}
      </div>
      {selected && (
        <ArticleModal article={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
