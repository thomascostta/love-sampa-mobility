import React from "react";
import { Pressable, StyleSheet, Text, ActivityIndicator } from "react-native";
import color from "@/themes/app.colors";
import { external } from "@/styles/external.style";
import { windowHeight } from "@/themes/app.constant";
import { commonStyles } from "@/styles/common.style";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  width,
  backgroundColor,
  textColor,
  disabled,
  isLoading,
}) => {
  const widthNumber = width || "100%";
  return (
    <Pressable
      style={[
        styles.container,
        {
          width: widthNumber,
          backgroundColor:
            backgroundColor || isLoading
              ? color.buttonBgLoading
              : color.buttonBg,
        },
      ]}
      onPress={onPress}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={color.whiteColor} />
      ) : (
        <Text
          style={[
            commonStyles.extraBold,
            { color: textColor || color.whiteColor },
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.buttonBg,
    height: windowHeight(40),
    borderRadius: 6,
    ...external.ai_center,
    ...external.js_center,
  },
});

export default Button;
