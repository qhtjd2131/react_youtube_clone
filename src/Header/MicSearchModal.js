import React from "react";
import { Overlay } from "../App";
import "./MicSearchModal.scss";

const MicSearchModal = ({ setIsOpenMicSearch }) => {
  return (
    <>
      <Overlay
        overlayClick={() => {
          setIsOpenMicSearch(false);
          console.log("click overlay");
        }}
      />
      <div className="modal-container">
        <div className="modal">
          <div className="modal-ms-title">음성으로 검색</div>
          <div className="modal-ms-sub-title">
            음성으로 검색하려면 브라우저 설정으로 이동해 마이크에 대한 액세스를
            허용하세요.
          </div>
          <div className="modal-ms-icon">a</div>
        </div>
      </div>
    </>
  );
};

export default MicSearchModal;
