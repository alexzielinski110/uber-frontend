import Image from "../../../assets/image/img2.png";

const Item4 = ({ t }) => {
  return (
    <div className="relative">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] h-[435px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">
          MEDIZINISCHE BERATUNG
          {t("dropdown_item4_text_1")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Beratung über Wirkungen und Nebenwirkungen von Medikamenten
          {t("dropdown_item4_text_2")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Gesundheitsreisen
          {t("dropdown_item4_text_3")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Kaufmännische Unterstützung im Bürowesen wie Rg-Systemen/neue Systeme
          {t("dropdown_item4_text_4")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Einführungen
          {t("dropdown_item4_text_5")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Controlling
          {t("dropdown_item4_text_6")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Archivierung
          {t("dropdown_item4_text_7")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          Bürokratische Organisation / interne Systemaufbau
          {t("dropdown_item4_text_8")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          betriebswirtschaftliche Unterstützung im Alltagsgeschäft.
          {t("dropdown_item4_text_9")}
        </p>
      </div>
    </div>
  );
};
export default Item4;
