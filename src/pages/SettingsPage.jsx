import { Upload } from "lucide-react";

export function SettingsPage() {
  return (
    <section className="container page narrow">
      <div className="eyebrow">ACCOUNT</div>
      <h1>Account Settings</h1>
      <div className="settings">
        <div className="settingsection">
          <h2>Profile</h2>
          <label>
            Display name
            <input defaultValue="Dr. Aris Vance" />
          </label>
          <label>
            Email
            <input defaultValue="aris@example.com" />
          </label>
          <label>
            Bio
            <textarea
              defaultValue="Astronomy researcher focused on observational astrophysics and scientific communication."
              rows="4"
            />
          </label>
        </div>
        <div className="settingsection">
          <h2>Profile Picture</h2>
          <div className="upload">
            <div className="profileavatar">AV</div>
            <button className="secondary">
              <Upload size={17} />
              Upload new picture
            </button>
          </div>
        </div>
        <div className="settingsection">
          <h2>Preferences</h2>
          <label className="checkline">
            <input type="checkbox" defaultChecked />
            Email me when my articles are reviewed
          </label>
          <label className="checkline">
            <input type="checkbox" defaultChecked />
            Show reading recommendations
          </label>
        </div>
        <button className="primary save">Save changes</button>
      </div>
    </section>
  );
}
