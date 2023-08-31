import { useReducer, useState } from "react";
import Layout from "../../containers/layout/Layout";
import Sidebar from "./Sidebar";
import Carousel from "./Carousel";

const Index = ({ t }) => {
  const [menu, setMenu] = useState(-1);
  const [open, setOpen] = useReducer((state) => {
    setMenu(-1);
    return !state;
  }, false);

  return (
    <Layout menu={menu} setMenu={setMenu} open={open} setOpen={setOpen} t={t}>
      <div className="flex flex-wrap lg:flex-nowrap">
        <Sidebar t={t} />
        <Carousel menu={menu} open={open} />
      </div>
    </Layout>
  );
};

export default Index;
