import { useMemo, useState } from "react";
import { ArrowRight, Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useArticles } from "../../hooks/useArticles";

export function SearchModal({ onClose }) {
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const articles = useArticles();
  const results = useMemo(
    () =>
      articles
        .filter((a) =>
          (a.title + " " + a.cat + " " + a.excerpt)
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .slice(0, 5),
    [articles, q],
  );
  return (
    <div
      className="modalbackdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal searchmodal">
        <button className="modalclose" onClick={onClose}>
          <X />
        </button>
        <div className="eyebrow">COSMOS SEARCH</div>
        <h2>Search the archive</h2>
        <div className="modalsearch">
          <Search size={20} />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles, topics, missions..."
          />
        </div>
        <div className="searchresults">
          <div className="mono searchlabel">
            {q ? "MATCHING ARTICLES" : "CURRENT ARTICLES"}
          </div>
          {results.map((a) => (
            <button
              className="searchresult"
              key={a.id}
              onClick={() => {
                onClose();
                nav("/articles", { state: { openArticleId: a.id } });
              }}
            >
              <img src={a.image} />
              <span>
                <b>{a.title}</b>
                <small>
                  {a.cat} · {a.time}
                </small>
              </span>
              <ArrowRight size={17} />
            </button>
          ))}
          {!results.length && (
            <p className="empty">No articles matched your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
