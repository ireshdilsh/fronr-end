import { useState } from "react";
import { ArrowRight, BookOpen, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useArticles } from "../hooks/useArticles";
import { ArticleModal } from "../components/articles/ArticleModal";

export function Dashboard() {
  const [selected, setSelected] = useState(null);
  const liveArticles = useArticles();
  return (
    <section className="container page">
      <div className="profilebar">
        <div className="profileavatar">AV</div>
        <div>
          <div className="eyebrow">RESEARCHER PROFILE</div>
          <h1>Dr. Aris Vance</h1>
          <p>Independent astronomy researcher · 18 published articles</p>
        </div>
        <Link className="secondary linkbtn" to="/settings">
          <Settings size={17} />
          Settings
        </Link>
      </div>
      <div className="dashgrid">
        <div>
          <div className="dashhead">
            <h2>My Recent Articles</h2>
            <Link to="/my-posts">View all</Link>
          </div>
          <div className="recentgrid">
            {liveArticles.slice(0, 4).map((a) => (
              <button
                className="recentcard"
                key={a.id}
                onClick={() => setSelected(a)}
              >
                <img src={a.image} />
                <div className="recentcardbody">
                  <div className="eyebrow">{a.cat}</div>
                  <h3>{a.title}</h3>
                  <p>Updated 2 days ago · {a.time}</p>
                  <span>
                    Read article <ArrowRight size={15} />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <aside className="saved">
          <div className="dashhead">
            <h2>Saved Research</h2>
            <BookOpen />
          </div>
          <p>
            Keep useful discoveries one click away while you build your next
            article.
          </p>
          <Link to="/favorites" className="primary">
            Browse favorites
          </Link>
        </aside>
      </div>
      {selected && (
        <ArticleModal article={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
