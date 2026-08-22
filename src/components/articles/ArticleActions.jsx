import { useState } from "react";
import { Bookmark, Heart, MessageCircle } from "lucide-react";

export function ArticleActions({ article, onChange }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    "A clear overview of the research direction.",
    "The instrumentation section was especially useful.",
  ]);
  return (
    <div className="articleactions">
      <div className="actionrow">
        <button
          className={liked ? "action active" : "" + " action"}
          onClick={() => {
            setLiked(!liked);
            onChange?.();
          }}
        >
          <Heart size={18} fill={liked ? "currentColor" : "none"} />
          {liked ? "Liked" : "Like"} <span>{liked ? 43 : 42}</span>
        </button>
        <button
          className="action"
          onClick={() => document.getElementById("comment-input")?.focus()}
        >
          <MessageCircle size={18} />
          Comment <span>{comments.length}</span>
        </button>
        <button
          className={saved ? "action active" : "" + " action"}
          onClick={() => setSaved(!saved)}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
          {saved ? "Saved" : "Favorite"}
        </button>
      </div>
      <div className="comments">
        <div className="mono">COMMENTS</div>
        {comments.map((c, i) => (
          <div className="comment" key={i}>
            <div className="commentavatar">{i ? "EV" : "AV"}</div>
            <div>
              <strong>{i ? "Elias Rowe" : "Dr. Aris Vance"}</strong>
              <p>{c}</p>
            </div>
          </div>
        ))}
        <div className="commentform">
          <input
            id="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a thoughtful comment..."
          />
          <button
            className="primary"
            onClick={() => {
              if (comment.trim()) {
                setComments([...comments, comment.trim()]);
                setComment("");
              }
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
