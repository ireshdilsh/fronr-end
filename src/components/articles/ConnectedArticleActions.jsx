import { useEffect, useState } from "react";
import { Bookmark, Heart, MessageCircle } from "lucide-react";
import { getAccessToken, interactionsApi } from "../../api/api";

export function ConnectedArticleActions({ article }) {
  const [summary, setSummary] = useState({
    likeCount: 0,
    commentCount: 0,
    likedByCurrentUser: false,
  });
  const [comments, setComments] = useState([]);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    if (!article.id) return;
    Promise.all([
      interactionsApi.summary(article.id),
      interactionsApi.comments(article.id),
    ])
      .then(([nextSummary, nextComments]) => {
        setSummary(nextSummary);
        setComments(nextComments);
      })
      .catch(() => {});
  }, [article.id]);
  const toggleLike = async () => {
    if (!getAccessToken()) {
      setError("Sign in to like articles or comment.");
      return;
    }
    try {
      setSummary(await interactionsApi.toggleLike(article.id));
    } catch (exception) {
      setError(exception.message);
    }
  };
  const addComment = async () => {
    if (!comment.trim()) return;
    if (!getAccessToken()) {
      setError("Sign in to like articles or comment.");
      return;
    }
    try {
      const next = await interactionsApi.addComment(article.id, comment.trim());
      setComments((current) => [...current, next]);
      setComment("");
      setSummary((current) => ({
        ...current,
        commentCount: current.commentCount + 1,
      }));
    } catch (exception) {
      setError(exception.message);
    }
  };
  return (
    <div className="articleactions">
      <div className="actionrow">
        <button
          className={summary.likedByCurrentUser ? "action active" : "action"}
          onClick={toggleLike}
        >
          <Heart
            size={18}
            fill={summary.likedByCurrentUser ? "currentColor" : "none"}
          />
          {summary.likedByCurrentUser ? "Liked" : "Like"}{" "}
          <span>{summary.likeCount}</span>
        </button>
        <button
          className="action"
          onClick={() => document.getElementById("comment-input")?.focus()}
        >
          <MessageCircle size={18} />
          Comment <span>{summary.commentCount}</span>
        </button>
        <button
          className={saved ? "action active" : "action"}
          onClick={() => setSaved(!saved)}
        >
          <Bookmark size={18} fill={saved ? "currentColor" : "none"} />
          {saved ? "Saved" : "Favorite"}
        </button>
      </div>
      <div className="comments">
        <div className="mono">COMMENTS</div>
        {comments.map((commentItem) => (
          <div className="comment" key={commentItem.id}>
            <div className="commentavatar">
              {commentItem.userId === article.authorId ? "AV" : "EV"}
            </div>
            <div>
              <strong>
                {commentItem.userId === article.authorId
                  ? "Author"
                  : "CosmoSphere reader"}
              </strong>
              <p>{commentItem.content}</p>
            </div>
          </div>
        ))}
        {error && <p className="error">{error}</p>}
        <div className="commentform">
          <input
            id="comment-input"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a thoughtful comment..."
          />
          <button className="primary" onClick={addComment}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
