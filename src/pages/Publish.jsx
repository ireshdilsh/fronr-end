import { useState } from "react";
import { CheckCircle2, Save, Send, Upload } from "lucide-react";
import { postsApi } from "../api/api";

export function Publish() {
  const [sent, setSent] = useState(false);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Astrophysics");
  const [abstract, setAbstract] = useState("");
  const [body, setBody] = useState("");
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file) setPreview({ url: URL.createObjectURL(file), name: file.name });
  };
  return (
    <section className="container page narrow">
      <div className="eyebrow">EDITORIAL SUBMISSION</div>
      <h1>Share Your Discovery</h1>
      <p className="lead">
        Submit a clear, evidence-led article for review by the CosmoSphere
        editorial team.
      </p>
      {sent ? (
        <div className="success">
          <CheckCircle2 size={42} />
          <h2>Submission received</h2>
          <p>Your article has been added to the editorial queue.</p>
        </div>
      ) : (
        <div className="editor">
          <label>
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="A concise scientific title"
            />
          </label>
          <label>
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Astrophysics</option>
              <option>Planetary Science</option>
              <option>Missions</option>
              <option>Engineering</option>
            </select>
          </label>
          <label>
            Article Image
            <div className="imageupload">
              <input
                id="article-image"
                type="file"
                accept="image/*"
                onChange={handleFile}
              />
              <label htmlFor="article-image" className="uploadzone">
                <Upload size={28} />
                <strong>
                  {preview ? "Change article image" : "Upload article image"}
                </strong>
                <span>
                  {preview
                    ? preview.name
                    : "PNG, JPG or WEBP · Recommended 1600×900"}
                </span>
              </label>
              {preview && (
                <div className="imagepreview">
                  <img src={preview.url} />
                  <span>Image preview</span>
                </div>
              )}
            </div>
          </label>
          <label>
            Abstract
            <textarea
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              rows="4"
              placeholder="Summarize the discovery or research..."
            />
          </label>
          <label>
            Article
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="12"
              placeholder="Write your article here..."
            ></textarea>
          </label>
          <div className="editoractions">
            <button className="secondary">
              <Save size={17} />
              Save draft
            </button>
            <button className="primary" onClick={() => setSent(true)}>
              <Send size={17} />
              Submit for review
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export function ConnectedPublish() {
  const [sent, setSent] = useState(false);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Astrophysics");
  const [abstract, setAbstract] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (file)
      setPreview({
        url: URL.createObjectURL(file),
        name: file.name,
        type: file.type || "image/*",
      });
  };
  const submit = async () => {
    if (!title.trim() || !body.trim()) {
      setError("Title and article content are required.");
      return;
    }
    setBusy(true);
    setError("");
    try {
      const post = await postsApi.create({
        title: title.trim(),
        content: body.trim(),
        category,
        postType: "PUBLISHED",
      });
      if (preview)
        await postsApi.addImage(post.id, {
          fileName: preview.name,
          blobUrl: preview.url,
          contentType: preview.type,
        });
      setSent(true);
    } catch (exception) {
      setError(exception.message);
    } finally {
      setBusy(false);
    }
  };
  return (
    <section className="container page narrow">
      <div className="eyebrow">EDITORIAL SUBMISSION</div>
      <h1>Share Your Discovery</h1>
      <p className="lead">
        Submit a clear, evidence-led article for review by the CosmoSphere
        editorial team.
      </p>
      {sent ? (
        <div className="success">
          <CheckCircle2 size={42} />
          <h2>Submission received</h2>
          <p>Your article has been added to the editorial queue.</p>
        </div>
      ) : (
        <div className="editor">
          <label>
            Title
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="A concise scientific title"
            />
          </label>
          <label>
            Category
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Astrophysics</option>
              <option>Planetary Science</option>
              <option>Missions</option>
              <option>Engineering</option>
            </select>
          </label>
          <label>
            Article Image
            <div className="imageupload">
              <input
                id="article-image"
                type="file"
                accept="image/*"
                onChange={handleFile}
              />
              <label htmlFor="article-image" className="uploadzone">
                <Upload size={28} />
                <strong>
                  {preview ? "Change article image" : "Upload article image"}
                </strong>
                <span>
                  {preview
                    ? preview.name
                    : "PNG, JPG or WEBP · Recommended 1600×900"}
                </span>
              </label>
              {preview && (
                <div className="imagepreview">
                  <img src={preview.url} />
                  <span>Image preview</span>
                </div>
              )}
            </div>
          </label>
          <label>
            Abstract
            <textarea
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              rows="4"
              placeholder="Summarize the discovery or research..."
            />
          </label>
          <label>
            Article
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="12"
              placeholder="Write your article here..."
            ></textarea>
          </label>
          {error && <p className="error">{error}</p>}
          <div className="editoractions">
            <button className="secondary" disabled>
              <Save size={17} />
              Save draft
            </button>
            <button className="primary" disabled={busy} onClick={submit}>
              <Send size={17} />
              {busy ? "Submitting..." : "Submit for review"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
