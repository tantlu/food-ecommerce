import { ROUTES } from "@/routes";
import { Navigate, Outlet } from "react-router-dom";
import MainLayout from "../mainLayout";
import { getUserState, useAppSelector } from "@/store";
import { useEffect } from "react";
import { auth } from "@/firebase/config";

type Props = React.PropsWithChildren<{}>;

const GuestLayout = (props: Props) => {
  const { access_token, userData } = useAppSelector(getUserState);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is logged in, navigate to home page
        window.location.href = ROUTES.HOME;
      }
    });

    return () => {
      // Unsubscribe the listener when the component unmounts
      unsubscribe();
    };
  }, []);

  const isGuest = !!!access_token || !!!userData;

  return isGuest ? (
    <MainLayout>{props.children}</MainLayout>
  ) : (
    <Navigate to={ROUTES.HOME} />
  );
};

export default GuestLayout;
