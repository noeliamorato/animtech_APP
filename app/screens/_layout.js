import { View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import FooterBar from "../../components/footerBar";
import TopBar from "../../components/topBar";
import TopText from "../../components/TopText";

const ConfigNav = () => {
  return (
    <View style={{flex:1}}>
      <TopBar />
      <TopText />
      <View style={{ flex:1}}>
        <Slot />
      </View>
      <FooterBar />
    </View>
  );
};

export default ConfigNav;
