import { Image, View } from "react-native";
import React from "react";
import Text from "./text/text";
import { colors } from "../theme";

const Footer = () => {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Image
        style={{ alignItems: "center" }}
        source={require("../assets/images/man-with-hp.png")}
      />
      <View>
        <Text centered preset="h5" uppercase>
          Bringing you the{" "}
        </Text>
        <Text centered uppercase preset="h5">
          <Text preset="h5" textColor={colors.primary}>
            best
          </Text>{" "}
          PADDLE
        </Text>
      </View>
      <Text style={{ textAlign: "justify", marginTop: 20 }} textColor="#c3c3c3">
        ROW WITH THE STRENGTH OF A DRAGON,
         EQUIP LIKE A CHAMPION 
      </Text>
    </View>
  );
};

export default Footer;
