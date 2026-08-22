import { useEffect, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import { ArticleModal } from "../components/articles/ArticleModal";

export function Articles() {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const liveArticles = useArticles();
  const filtered = liveArticles.filter((a) =>
    (a.title + " " + a.cat).toLowerCase().includes(search.toLowerCase()),
  );
  useEffect(() => {
    if (location.state?.openArticleId) {
      setSelected(
        liveArticles.find((a) => a.id === location.state.openArticleId) || null,
      );
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [location.state, liveArticles]);
  return (
    <section className="container page">
      <div className="sectionhead">
        <div>
          <div className="eyebrow">EDITORIAL ARCHIVE</div>
          <h1>Articles</h1>
          <p>
            Peer-inspired explainers and research stories written for curious
            minds.
          </p>
        </div>
        <div className="filter">
          <Search size={18} />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search articles"
          />
        </div>
      </div>
      <div className="articlegrid">
        {filtered.map((a) => (
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
                Read full article <ArrowRight size={16} />
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
