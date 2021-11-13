export const setting_dropdown_data = {
  appearance: {
    image: (
      <img
        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-moon-basic-ui-elements-flatart-icons-outline-flatarticons.png"
        alt=""
      />
    ),
    nextPageState: "design",
  },
  language: {
    image: (
      <img src="https://img.icons8.com/ios/50/000000/language.png" alt="" />
    ),
    nextPageState: "language",
  },
  location: {
    image: (
      <img src="https://img.icons8.com/ios/50/000000/globe--v1.png" alt="" />
    ),
    nextPageState: "location",
  },
  settings: {
    image: (
      <img src="https://img.icons8.com/ios/50/000000/settings.png" alt="" />
    ),
    nextPageState: null,
  },
  yourDataInYoutube: {
    image: (
      <img
        src="https://img.icons8.com/ios/50/000000/security-shield-green.png"
        alt=""
      />
    ),
    nextPageState: null,
  },
  help: {
    image: (
      <img
        src="https://img.icons8.com/material-outlined/24/000000/help.png"
        alt=""
      />
    ),
    nextPageState: null,
  },
  sendFeedback: {
    image: (
      <img src="https://img.icons8.com/windows/32/000000/about.png" alt="" />
    ),
    nextPageState: null,
  },
  keyboardShortcuts: {
    image: (
      <img
        src="https://img.icons8.com/material-outlined/24/000000/keyboard.png"
        alt=""
      />
    ),
    nextPageState: null,
  },
  restrictedMode: { image: "", nextPageState: "limitedMode" },
  check: {
    image: (
      <img
        src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"
        alt=""
      />
    ),
  },
};

export const settingDropdown_language = {
  KOR: {
    appearance: "디자인: ",
    language: "언어: ",
    location: "위치: ",
    settings: "설정",
    yourDataInYoutube: "YouTube의 내 데이터",
    help: "고객센터",
    sendFeedback: "의견 보내기",
    keyboardShortcuts: "단축키",
    restrictedMode: "제한 모드: ",
  },
  EN: {
    appearance: "Appearance: ",
    language: "Language: ",
    location: "Location: ",
    settings: "Settings",
    yourDataInYoutube: "Your data in Youtube",
    help: "Help",
    sendFeedback: "Send Feedback",
    keyboardShortcuts: "Keyboard shortcuts",
    restrictedMode: "Restricted Mode: ",
  },
};
// Object.values(DesignData["한국어"]).map();

export const DesignData = {
  KOR: { darkTheme: "어두운 테마", lightTheme: "밝은 테마" },
  EN: { darkTheme: "Dark Theme", lightTheme: "Light Theme" },
};

export const LanguageData = {
  KOR: {
    native: "한국어",
  },

  EN: {
    native: "English",
  },
};
