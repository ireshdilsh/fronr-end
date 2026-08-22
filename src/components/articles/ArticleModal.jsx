import { Tag, UserCircle, X } from "lucide-react";
import { ConnectedArticleActions } from "./ConnectedArticleActions";

export function ArticleModal({ article, onClose }) {
  if (!article) return null;
  return (
    <div
      className="modalbackdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <article className="modal articlemodal">
        <button className="modalclose" onClick={onClose}>
          <X />
        </button>
        <img className="modalimage" src={article.image} />
        <div className="articlemodalbody">
          <div className="articlemeta">
            <span>{article.cat}</span>
            <span>{article.time}</span>
          </div>
          <h2>{article.title}</h2>
          <div className="articleby">
            <UserCircle size={17} /> {article.author} · {article.date}
          </div>
          <p className="articlelead">{article.excerpt}</p>
          <div className="articlebody">
            {article.body.split(". ").map((p, i) => (
              <p key={i}>
                {p}
                {p.endsWith(".") ? "" : "."}
              </p>
            ))}
          </div>
          <div className="articletags">
            {article.tags.map((t) => (
              <span key={t}>
                <Tag size={14} />
                {t}
              </span>
            ))}
          </div>
          <ConnectedArticleActions article={article} />
        </div>
      </article>
    </div>
  );
}
