import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Explore } from "./pages/Explore";
import { Articles } from "./pages/Articles";
import { Missions } from "./pages/Missions";
import { Celestial } from "./pages/Celestial";
import { Discover } from "./pages/Discover";
import { ConnectedPublish } from "./pages/Publish";
import { Dashboard } from "./pages/Dashboard";
import { CollectionPage } from "./pages/CollectionPage";
import { SettingsPage } from "./pages/SettingsPage";
import { InfoPage } from "./pages/InfoPage";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/celestial-objects" element={<Celestial />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/publish" element={<ConnectedPublish />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-posts" element={<CollectionPage type="posts" />} />
        <Route
          path="/liked-articles"
          element={<CollectionPage type="liked" />}
        />
        <Route
          path="/favorites"
          element={<CollectionPage type="favorites" />}
        />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<InfoPage type="about" />} />
        <Route
          path="/editorial-policy"
          element={<InfoPage type="editorial" />}
        />
        <Route path="/contact" element={<InfoPage type="contact" />} />
      </Routes>
    </Layout>
  );
}
