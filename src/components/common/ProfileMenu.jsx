import {
  Bookmark,
  FileText,
  Heart,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ProfileMenu({ onClose, onLogout }) {
  const nav = useNavigate();
  const go = (p) => {
    onClose();
    nav(p);
  };
  return (
    <div className="profilemenu">
      <div className="profilemenuhead">
        <div className="avatar largeavatar">AV</div>
        <div>
          <strong>Dr. Aris Vance</strong>
          <small>Researcher account</small>
        </div>
      </div>
      <button onClick={() => go("/dashboard")}>
        <User size={17} />
        Dashboard
      </button>
      <button onClick={() => go("/my-posts")}>
        <FileText size={17} />
        My Posts
      </button>
      <button onClick={() => go("/liked-articles")}>
        <Heart size={17} />
        Liked Articles
      </button>
      <button onClick={() => go("/favorites")}>
        <Bookmark size={17} />
        Favorites
      </button>
      <button onClick={() => go("/settings")}>
        <Settings size={17} />
        Settings
      </button>
      <button
        onClick={() => {
          onClose();
          onLogout();
        }}
      >
        <LogOut size={17} />
        Sign out
      </button>
    </div>
  );
}
