import React, { useContext } from "react";
import { Overlay } from "../App";
import "./MicSearchModal.scss";

import * as data from "./HeaderData/headerBarData.js";
import { languageStateContext } from "../App";
const MicSearchModal = ({ setIsOpenMicSearch }) => {
  const { languageState } = useContext(languageStateContext);
  return (
    <>
      <Overlay
        overlayClick={() => {
          setIsOpenMicSearch(false);
        }}
      />
      <div className="modal-container">
        <div className="modal">
          <div
            className="modal-ms-close-button"
            onClick={() => {
              setIsOpenMicSearch(false);
            }}
          >
            {data.data_Search.close.image}
          </div>
          <div className="modal-ms-title">
            {data.language_Search[languageState].searchWithYourVoice}
          </div>
          <div className="modal-ms-sub-title">
            {data.language_Search[languageState].searchWithYourVoiceDescription}
          </div>
          <div className="modal-ms-icon-wrapper">
            <div className="modal-ms-icon">
              {data.data_Search.searchWithYourVoice.image}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MicSearchModal;
