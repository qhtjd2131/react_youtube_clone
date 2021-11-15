export const data_SettingDropdown = {
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
  restrictedMode: { image: "", nextPageState: "restrictedMode" },
  check: {
    image: (
      <img
        src="https://img.icons8.com/external-becris-lineal-becris/64/000000/external-check-mintab-for-ios-becris-lineal-becris-1.png"
        alt=""
      />
    ),
  },
};

export const language_SettingDropdown = {
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

export const data_SettingDesign = {
  KOR: { darkTheme: "어두운 테마", lightTheme: "밝은 테마" },
  EN: { darkTheme: "Dark Theme", lightTheme: "Light Theme" },
};

// export const language_SettingLocation = {
//   KOR: {
//     southKorea: "한국",
//     unitedStates: "미국",
//   },
//   EN: {
//     southKorea: "South Korea",
//     unitedStates: "United States",
//   },
// };
export const settingLocationData = {
  southKorea: {
    KOR: "한국",
    EN: "South Korea",
  },
  unitedStates: {
    KOR: "미국",
    EN: "United States",
  },
};

export const language = {
  //native 굳이 없어도 됨. key : KOR, value: "한국어" 로 변경해야함
  KOR: {
    native: "한국어",
  },

  EN: {
    native: "English",
  },
};

export const restrictedModeData = {
  description1: {
    KOR: "이 모드를 사용하면 미성년자에게 부적합할 수 있는 동영상을 숨길 수 있습니다. 단, 필터링이 완벽할 수는 없다는 점에 유의하세요.",
    EN: "This helps hide potentially mature videos. No filter is 100% accurate.",
  },
  description2: {
    KOR: "이 설정은 이 브라우저에만 적용됩니다.",
    EN: "This setting only applies to this browser.",
  },
  buttonLabel: {
    KOR: "제한 모드 활성화",
    EN: "ACTIVATE RESTRICTED MODE",
  },
};

export const goDefaultSettingLabelData = {
  appearance: {
    KOR: "디자인",
    EN: "Appearance",
  },
  language: {
    KOR: "언어 선택",
    EN: "Choose your language",
  },
  location: {
    KOR: "위치 선택",
    EN: "Choose your location",
  },
  restrictedMode: {
    KOR: "제한 모드",
    EN: "Restricted Mode",
  },
};
