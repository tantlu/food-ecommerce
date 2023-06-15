import { ROUTES } from "@/routes";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../mainLayout";
import { getUserState, useAppSelector } from "@/store";
import { useEffect } from "react";
import { auth } from "@/firebase/config";

type Props = React.PropsWithChildren<{}>;

const PrivateLayout = (props: Props) => {
  const { access_token, userData } = useAppSelector(getUserState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const areYouPrivate = !access_token || !userData;

  return areYouPrivate ? (
    <MainLayout>{props.children}</MainLayout>
  ) : (
    <Navigate to={ROUTES.INFOR} />
  );
};

export default PrivateLayout;
