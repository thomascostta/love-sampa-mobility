import axios from "axios";
import React, { useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { router, useLocalSearchParams } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { style } from "./style";
import color from "@/themes/app.colors";
import Button from "@/components/common/button";
import { external } from "@/styles/external.style";
import { windowHeight } from "@/themes/app.constant";
import { commonStyles } from "@/styles/common.style";
import OTPTextInput from "react-native-otp-textinput";
import SignInText from "@/components/login/signin.text";
import AuthContainer from "@/utils/container/auth-container";

export default function PhoneNumberVerificationScreen() {
  const driver = useLocalSearchParams();
  const [otp, setOtp] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async () => {
    if (otp === "") {
      Toast.show("Please fill the fields!", {
        placement: "bottom",
      });
    } else {
      if (driver.name) {
        setLoader(true);
        const otpNumbers = `${otp}`;
        await axios
          .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/driver/verify-otp`, {
            phone_number: driver.phone_number,
            otp: otpNumbers,
            ...driver,
          })
          .then((res) => {
            const driverData = {
              ...driver,
              token: res.data.token,
            };
            setLoader(false);
            router.push({
              pathname: "/(routes)/email-verification",
              params: driverData,
            });
          })
          .catch((error) => {
            Toast.show("Your otp is incorrect or expired!", {
              placement: "bottom",
              type: "danger",
            });
          });
      } else {
        setLoader(true);
        const otpNumbers = `${otp}`;
        await axios
          .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/driver/login`, {
            phone_number: driver.phone_number,
            otp: otpNumbers,
          })
          .then(async (res) => {
            setLoader(false);
            await AsyncStorage.setItem("accessToken", res.data.accessToken);
            router.push("/(tabs)/home");
          })
          .catch((error) => {
            console.log(error);

            Toast.show("Your otp is incorrect or expired!", {
              placement: "bottom",
              type: "danger",
            });
          });
      }
    }
  };
  return (
    <AuthContainer
      topSpace={windowHeight(240)}
      imageShow={true}
      container={
        <View>
          <SignInText
            title={"Phone Number Verification"}
            subtitle={"Check your phone number for the otp!"}
          />
          <OTPTextInput
            handleTextChange={(code) => setOtp(code)}
            inputCount={6}
            textInputStyle={style.otpTextInput}
            tintColor={color.subtitle}
            autoFocus={false}
          />
          <View style={[external.mt_30]}>
            <Button
              title="Verify"
              height={windowHeight(30)}
              onPress={() => handleSubmit()}
              isLoading={loader}
            />
          </View>
          <View style={[external.mb_15]}>
            <View
              style={[
                external.pt_10,
                external.Pb_10,
                {
                  flexDirection: "row",
                  gap: 5,
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={[commonStyles.regularText]}>Not Received yet?</Text>
              <TouchableOpacity>
                <Text style={[style.signUpText, { color: "#000" }]}>
                  Resend it
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    />
  );
}
