import { useTranslation } from "react-i18next";
import LogoIcon from "../../assets/icon/logo.svg";
import ReadmoreButton from "./ReadmoreButton";

const Sidebar = ({ t }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  return (
    <div
      id="intro"
      className="lg:w-5/12 bg-white lg:pl-[169px] pt-12 lg:pt-[84px] shrink-0 grow-0 w-full"
    >
      <div className="pb-5 lg:pb-20 mx-[5%] lg:mx-0">
        <div className="flex items-center justify-center lg:justify-normal">
          <img src={LogoIcon} alt="Logo" className="w-[50px] lg:w-auto" />
          <p className="text-blue-1 font-bold text-4xl pl-6">Helopha</p>
        </div>
        <p className="text-blue-1 font-semibold text-3xl py-6 break-all">
          <span className="block leading-[30px]">{t("home_text_1")}</span>
          <span className="block leading-[30px]">{t("home_text_2")}</span>
          <span className="block leading-[30px]">{t("home_text_3")}</span>
        </p>
        <p
          id="intro-text"
          className="text-blue-1 my-4 border-l-[3px] border-blue-1 pl-[21px] pr-[40px] italic break-all w-full"
        >
          {t("home_text_4")}
        </p>
        <div className="flex pt-6 justify-center lg:justify-normal">
          <ReadmoreButton title={t("home_text_5")} />
        </div>
      </div>
      <div className="border-t-2 border-blue-1 w-[20%] my-4 visible lg:invisible"></div>
      <div
        id="language_setting"
        className="px-[10%] lg:px-0 mb-4 lg:mb-0 lg:absolute lg:left-[70px] text-base font-['Poppins'] font-bold text-gray-400"
      >
        <span
          className={`cursor-pointer ${language === "de" ? "text-blue-1" : ""}`}
          onClick={() => handleLanguageChange("de")}
        >
          DE
        </span>{" "}
        /{" "}
        <span
          className={`cursor-pointer ${language === "en" ? "text-blue-1" : ""}`}
          onClick={() => handleLanguageChange("en")}
        >
          ENG
        </span>{" "}
        /{" "}
        <span
          className={`cursor-pointer ${language === "fr" ? "text-blue-1" : ""}`}
          onClick={() => handleLanguageChange("fr")}
        >
          FR
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
