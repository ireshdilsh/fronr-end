import { useState } from "react";
import { Globe2, LogIn, Menu, Search, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ProfileMenu } from "../common/ProfileMenu";
import { SearchModal } from "../search/SearchModal";

export function Header({ loggedIn, setLoggedIn, openAuth }) {
  const [open, setOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState(false);
  const nav = useNavigate();
  const loc = useLocation();
  const links = [
    ["Explore", "/explore"],
    ["Articles", "/articles"],
    ["Missions", "/missions"],
    ["Celestial Objects", "/celestial-objects"],
    ["Discover", "/discover"],
  ];
  return (
    <>
      <header className="topbar">
        <div className="navwrap">
          <Link to="/explore" className="brand">
            <Globe2 size={22} />
            CosmoSphere
          </Link>
          <nav className={open ? "nav open" : "nav"}>
            {links.map(([n, p]) => (
              <Link
                key={p}
                className={loc.pathname === p ? "active" : ""}
                to={p}
                onClick={() => setOpen(false)}
              >
                {n}
              </Link>
            ))}
          </nav>
          <div className="navactions">
            <button
              className="iconbtn"
              onClick={() => setSearch(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            {loggedIn ? (
              <>
                <button className="publish" onClick={() => nav("/publish")}>
                  Publish Article
                </button>
                <button
                  className="avatar"
                  onClick={() => setProfile(!profile)}
                  aria-label="Profile"
                >
                  AV
                </button>
                {profile && (
                  <ProfileMenu
                    onClose={() => setProfile(false)}
                    onLogout={() => setLoggedIn(false)}
                  />
                )}
              </>
            ) : (
              <button className="signinbtn" onClick={() => openAuth("signin")}>
                <LogIn size={16} />
                Sign in
              </button>
            )}
            <button className="mobilemenu" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {search && <SearchModal onClose={() => setSearch(false)} />}
    </>
  );
}
