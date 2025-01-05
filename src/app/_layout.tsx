import React, { useEffect } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../redux/store";

import '../index.css';



SplashScreen.preventAutoHideAsync();

const AppContent = () => {

  const dispatch = useDispatch();
  // Load fonts
  const [fontsLoaded, fontsError] = useFonts({ Inter_900Black });

  const islogin = useSelector((state:any) => state.auth.isAuthenticated);

  console.log("store is " + store);

  console.log(islogin);
 


  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }



  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {islogin ? (
        <Redirect href="./(main)" />
      ) : (
        <Redirect href="./(auth)" />
      )}
    </>

  );
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
};

export default RootLayout;
