import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import translationEN from "./locales/en/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationDE from "./locales/de/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  de: {
    translation: translationDE,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/about" element={<About t={t} />} />
        <Route path="/contact" element={<Contact t={t} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
