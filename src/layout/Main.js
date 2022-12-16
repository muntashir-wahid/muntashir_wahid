import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Main = () => {
  const { state } = useNavigation();

  return (
    <main>
      <NavBar />
      {state === "loading" ? (
        <LoadingSpinner
          className="min-h-screen w-full"
          message="Please wait!Project details is loading.."
        />
      ) : (
        <Outlet />
      )}

      <Footer />
    </main>
  );
};

export default Main;
