import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import AuthStack from "../Navigation/AuthStack";
import MainStack from "../Navigation/MainStack";

export default function AppNavigator() {

  const { isLoggedIn } = useContext(AppContext);

  return isLoggedIn ? <MainStack /> : <AuthStack />;

}
