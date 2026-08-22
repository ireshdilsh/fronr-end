import { Globe2, X } from "lucide-react";

export function AuthModal({ mode, onClose, onSwitch, onSuccess }) {
  const register = mode === "register";
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
            <input type="email" placeholder="you@example.com" />
          </label>
          {register && (
            <label>
              Display name
              <input placeholder="Your name" />
            </label>
          )}
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button className="primary" onClick={onSuccess}>
            {register ? "Create account" : "Sign in"}
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
