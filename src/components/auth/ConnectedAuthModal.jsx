import { useState } from "react";
import { Globe2, X } from "lucide-react";
import { authApi } from "../../api/api";

export function ConnectedAuthModal({ mode, onClose, onSwitch, onSuccess }) {
  const register = mode === "register";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const submit = async () => {
    setBusy(true);
    setError("");
    try {
      const auth = register
        ? await authApi.register({
            name,
            username:
              name
                .trim()
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "_")
                .slice(0, 80) || "researcher",
            email,
            password,
          })
        : await authApi.login({ email, password });
      onSuccess(auth);
    } catch (exception) {
      setError(exception.message);
      setBusy(false);
    }
  };
  return (
    <div
      className="modalbackdrop"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal authmodal">
        <button className="modalclose" onClick={onClose}>
          <X />
        </button>
        <div className="brand centerbrand">
          <Globe2 />
          CosmoSphere
        </div>
        <div className="eyebrow">
          {register ? "CREATE ACCOUNT" : "WELCOME BACK"}
        </div>
        <h2>{register ? "Join the archive." : "Sign in to continue."}</h2>
        <p className="modalintro">
          {register
            ? "Create an account to publish and save astronomy discoveries."
            : "Access your researcher profile, saved articles and published work."}
        </p>
        <div className="form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          {register && (
            <label>
              Display name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>
          )}
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button className="primary" disabled={busy} onClick={submit}>
            {busy ? "Connecting..." : register ? "Create account" : "Sign in"}
          </button>
        </div>
        <button
          className="textbtn"
          onClick={() => onSwitch(register ? "signin" : "register")}
        >
          {register
            ? "Already have an account? Sign in"
            : "New to CosmoSphere? Create an account"}
        </button>
      </div>
    </div>
  );
}
