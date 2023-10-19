import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShowSuccessMsg from "../Navbar/ShowSuccessMsg";

const languageDetails = [
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/english.jpg",
        language: "English",
    },
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/hindi.jpg",
        language: "Hindi",
        ownLang: "हिंदी"
    },
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/marathi.jpg",
        language: "Marathi",
        ownLang: "मराठी"
    },
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/tamil.jpg",
        language: "Tamil",
        ownLang: "தமிழ்"
    },
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/telugu.jpg",
        language: "Telugu",
        ownLang: "తెలుగు"
    },
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/Malayalam_Language_Thumbnail_512x205.jpg",
        language: "Malayalam",
        ownLang: "മലയാളം"
    },
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/bengali_Language_Thumbnail_512x205.jpg",
        language: "Bengali",
        ownLang: "বাংলা"
    },
    
    {
        img : "https://origin-staticv2.sonyliv.com/UI_icons/languages/kannada_Language_Thumbnail_512x205.jpg",
        language: "Kananda",
        ownLang: "ಕನ್ನಡ"
    },
]

function ContentLanguages({setShowModal}) {
    const [selectedId, setSelectedId] = useState(JSON.parse(
        localStorage.getItem("selectedLanguages") || "[]"
      ));
    const [showSuccess , setShowSuccess] = useState(false);    
    function handleSelectLanguage(id) {
      setSelectedId((prev) => {
        const prevArray = Array.isArray(prev) ? prev : [];
  
        if (prevArray.includes(id)) {
          return prevArray.filter((existingId) => existingId !== id);
        }
        return [...prevArray, id];
      });
    }
  
    function handleSaveBtn() {
      console.log("Selected languages:", selectedId);
      localStorage.setItem("selectedLanguages", JSON.stringify(selectedId));


        setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false)
        setShowModal(false);
      } , 2000)
    }
    function handleOnClick() {
        setShowModal(false);
        setShowSuccess(false);
    }

  return (
    <>
    <div className="modal-dialog">
      <div className="modal-header">
        <CloseIcon onClick={() => setShowModal(false)}/>
      </div>
      <div className="modal-body">
        <div className="userContentContainer">
          <div className="headFlexBox">
            <h2>Get better suggestions</h2>
            <h4>Select your preferred content languages</h4>
          </div>
          <div className="languageGridContainer">
            {languageDetails.map((eLang, i) => (
               <div
               onClick={() => handleSelectLanguage(eLang.language)}
               className={`eachLang ${selectedId.includes(eLang.language) ? "seletedLanguage" : ""}`}
               style={{ backgroundImage: `url(${eLang.img})` }}
               key={i}
             >
                <div className="languages">
                  <h4 className="langTitle">{eLang.ownLang}</h4>
                  <h5 className="engTitle">{eLang.language}</h5>
                </div>
                <span className="checkIcon_container">
                  <CheckCircleOutlineIcon />
                </span>
              </div>
            ))}
          </div>
          <div className="saveBtnContainer">
            <button onClick={handleSaveBtn} disabled={selectedId.length <= 0}>Save</button>
          </div>
        </div>
      </div>
    </div>
    {showSuccess && <ShowSuccessMsg text={"Thank you for providing your preference"} handleOnClick={handleOnClick} />}
    </>
  );
}

export default ContentLanguages;
