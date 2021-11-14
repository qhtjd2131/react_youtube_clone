import { FcMenu } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsMicFill, BsGrid3X3Gap } from "react-icons/bs";
import { GoKebabVertical } from "react-icons/go";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../images/yt_logo_rgb_light.png";
import { ImYoutube2 } from "react-icons/im";
export const language_Login = {
  KOR: {
    login: "로그인",
  },
  EN: {
    login: "SIGN IN",
  },
};
export const data_Login = {
  login: {
    image: <FaRegUserCircle />,
  },
};

export const data_Logo = {
  sidebarOpen: {
    image: <FcMenu />,
  },
  logo: {
    image: {
      lightTheme: <img src={logo} alt="logo" />,
      darkTheme: (
        <div className="logo-icon-wrapper">
          <ImYoutube2 />
        </div>
      ),
    },
  },
};

export const language_Search = {
  KOR: {
    search: "검색",
    searchWithYourVoice: "음성으로 검색",
    searchWithYourVoiceDescription:
      "음성으로 검색하려면 브라우저 설정으로 이동해 마이크에 대한 액세스를 허용하세요.",
  },
  EN: {
    search: "Search",
    searchWithYourVoice: "Search with your voice",
    searchWithYourVoiceDescription:
      "To search by voice, go to your browser settings and allow access to microphone",
  },
};

export const data_Search = {
  search: {
    image: <IoIosSearch />,
  },
  searchWithYourVoice: {
    image: <BsMicFill />,
  },
  close: {
    image: <MdClose />,
  },
};

export const data_UserItems = {
  youtubeApps: {
    image: <BsGrid3X3Gap />,
  },
  settings: {
    image: <GoKebabVertical />,
  },
};

export const language_UserItems = {
  KOR: {
    youtubeApps: "Yotube 앱",
    settings: "설정",
  },
  EN: {
    youtubeApps: "YouTube Apps",
    settings: "Settings",
  },
};
