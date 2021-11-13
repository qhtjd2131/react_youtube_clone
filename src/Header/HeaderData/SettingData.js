export const settingDropdown_data = [
  {
    title: "디자인: ",
    image: (
      <img
        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-moon-basic-ui-elements-flatart-icons-outline-flatarticons.png"
        alt=""
      />
    ),
    nextPageState: "design",
  },
  {
    title: "언어: ",
    image: (
      <img src="https://img.icons8.com/ios/50/000000/language.png" alt="" />
    ),
    nextPageState: "language",
  },
  {
    title: "위치: " + "한국",
    image: (
      <img src="https://img.icons8.com/ios/50/000000/globe--v1.png" alt="" />
    ),
    nextPageState: "location",
  },
  {
    title: "설정",
    image: (
      <img src="https://img.icons8.com/ios/50/000000/settings.png" alt="" />
    ),
    nextPageState: null,
  },
  {
    title: "YouTube의 내 데이터",
    image: (
      <img
        src="https://img.icons8.com/ios/50/000000/security-shield-green.png"
        alt=""
      />
    ),
    nextPageState: null,
  },
  {
    title: "고객센터",
    image: (
      <img
        src="https://img.icons8.com/material-outlined/24/000000/help.png"
        alt=""
      />
    ),
    nextPageState: null,
  },
  {
    title: "의견 보내기",
    image: (
      <img src="https://img.icons8.com/windows/32/000000/about.png" alt="" />
    ),
    nextPageState: null,
  },
  {
    title: "단축키",
    image: (
      <img
        src="https://img.icons8.com/material-outlined/24/000000/keyboard.png"
        alt=""
      />
    ),
    nextPageState: null,
  },
  {
    title: "제한모드: " + "사용안함",
    image: "",
    nextPageState: "limitedMode",
  },
];
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
