import React, { useEffect, useState } from "react";
import "./settingPrefer.css"
import ContentLanguages from "./ContentLanguages";
function SettingPreferences() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    JSON.parse(
      localStorage.getItem("selectedLanguages") || "[]"
    ))
  useEffect(() => {
    setSelectedLanguage(JSON.parse(
      localStorage.getItem("selectedLanguages") || "[]"
    ))
  }, [selectedLanguage])
  console.log(selectedLanguage);
  return (
    <div className="myaccount-container settings">
      <div>
        <div className="heading">
          <h2>Settings & Preferences</h2>
        </div>
        <ul className="settings_all">
          <li className="each_setting">
            <div className="option-icon">
              <div>
                <img src="/Auto play.png" alt="Autoplay" />
              </div>
              <p>Autoplay</p>
            </div>
            <div>
              <label class="switch">  
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </li>
          <li className="each_setting">
            <div className="option-icon">
              <div>
                <img src="/HD img.png" alt="Video Quality" />
              </div>
              <p>Video Quality</p>
            </div>
            <div>
              <img src="/right Arrow.png" alt="Right Arrow" />
            </div>
          </li>
          <li className="each_setting">
            <div className="option-icon">
              <div>
                <img src="/Content Languages img.png" alt="Content Languages" />
              </div>
              <p>Content Languages</p>
            </div>
            <div>
              <p className="getStarted" onClick={() => setShowModal(true)}>
                {selectedLanguage.length > 0 ?
                  selectedLanguage.length > 2 ?
                    `${selectedLanguage[0]},${selectedLanguage[1]} +${selectedLanguage.length - 2}` :
                    selectedLanguage.length === 1 ? selectedLanguage[0] : `${selectedLanguage[0]},${selectedLanguage[1]}` :
                  "Get Started"}</p>
            </div>
          </li>
          <li className="each_setting">
            <div className="option-icon">
              <div>
                <img src="/Personalized Ads img.png" alt="Personalised Ads" />
              </div>
              <p>Personalised Ads</p>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox" />
                <span class="slider"></span>
              </label>
            </div>
          </li>
        </ul>
      </div>
      {showModal && <ContentLanguages setShowModal={setShowModal} />}
    </div>
  );
}

export default SettingPreferences;
