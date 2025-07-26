import { StyleSheet } from "react-native";
import fonts from "@/themes/app.fonts";
import color from "@/themes/app.colors";
import { commonStyles } from "@/styles/common.style";
import { fontSizes, windowHeight, windowWidth } from "@/themes/app.constant";

const style = StyleSheet.create({
  otpTextInput: {
    backgroundColor: color.lightGray,
    borderColor: color.lightGray,
    borderWidth: 0.5,
    borderRadius: 6,
    width: windowWidth(60),
    height: windowHeight(40),
    borderBottomWidth: 0.5,
    color: color.subtitle,
    textAlign: "center",
    fontSize: fontSizes.FONT22,
    marginTop: windowHeight(10),
  },
  signUpText: {
    ...commonStyles.mediumTextBlack12,
    fontFamily: fonts.bold,
    paddingHorizontal: 5,
  },
});

export { style };
