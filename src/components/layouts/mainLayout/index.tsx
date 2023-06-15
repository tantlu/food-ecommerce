import { Box } from "@chakra-ui/react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./components/footer";
import Header from "./components/header";

type Props = React.PropsWithChildren<{}>;

export default function MainLayout(props: Props) {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  return (
    <>
      {pathName == "checkouts" ? "" : <Header />}

      {props.children ? props.children : <Outlet />}

      {pathName == "checkouts" ? "" : <Footer />}
    </>
  );
}
