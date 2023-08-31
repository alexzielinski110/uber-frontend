import Image from "../../../assets/image/img2.png";

const Item1 = ({ t }) => {
  return (
    <div className="relative">
      <img
        src={Image}
        alt="footer"
        className="w-full object-cover rounded-tl-[70px] rounded-br-[70px] w-full h-[435px] lg:h-[430px]"
      />
      <div className="rounded-tl-[70px] rounded-br-[70px] bg-gradient-to-b from-blue-2 to-green-1 absolute w-full h-full top-0 text-white text-xs flex flex-col px-14 pt-[100px]">
        <p className="py-4 text-base font-['Poppins'] font-bold">
          {t("dropdown_item1_text_1")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          {t("dropdown_item1_text_2")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          {t("dropdown_item1_text_3")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          {t("dropdown_item1_text_4")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          {t("dropdown_item1_text_5")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          {t("dropdown_item1_text_6")}
        </p>
        <p className="py-[2px] text-xs font-semibold leading-6">
          {t("dropdown_item1_text_7")}
        </p>
      </div>
    </div>
  );
};
export default Item1;
