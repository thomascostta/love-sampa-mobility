import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { Toast } from "react-native-toast-notifications";
import { View, Text, Image, TouchableOpacity } from "react-native";
import {
  BRAZIL_COUNTRY_CODE,
  windowHeight,
  windowWidth,
} from "@/themes/app.constant";
import styles from "./styles";
import Images from "@/utils/images";
import Button from "@/components/common/button";
import { external } from "@/styles/external.style";
import SignInText from "@/components/login/signin.text";
import AuthContainer from "@/utils/container/auth-container";
import PhoneNumberInput from "@/components/login/phone-number.input";

export default function LoginScreen() {
  const [phone_number, setphone_number] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async () => {
    if (phone_number === "") {
      Toast.show("Please fill the fields!", {
        placement: "bottom",
      });
    } else {
      setloading(true);
      const phoneNumber = `${BRAZIL_COUNTRY_CODE}${phone_number}`;

      await axios
        .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/driver/send-otp`, {
          phone_number: phoneNumber,
        })
        .then((res) => {
          setloading(false);
          const driver = {
            phone_number: phoneNumber,
          };
          router.push({
            pathname: "/(routes)/verification-phone-number",
            params: driver,
          });
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
          Toast.show(
            "Something went wrong! please re check your phone number!",
            {
              type: "danger",
              placement: "bottom",
            }
          );
        });
    }
  };

  return (
    <AuthContainer
      topSpace={windowHeight(150)}
      imageShow={true}
      container={
        <View>
          <View>
            <View>
              <Image style={styles.transformLine} source={Images.line} />
              <SignInText />
              <View style={[external.mt_25, external.Pb_10]}>
                <PhoneNumberInput
                  phone_number={phone_number}
                  setphone_number={setphone_number}
                />
                <View style={[external.mt_25, external.Pb_15]}>
                  <Button
                    title="Get Otp"
                    disabled={loading}
                    height={windowHeight(35)}
                    onPress={() => handleSubmit()}
                    isLoading={loading}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: windowWidth(8),
                    paddingBottom: windowHeight(15),
                  }}
                >
                  <Text style={{ fontSize: windowHeight(12) }}>
                    Don't have any rider account?
                  </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/(routes)/signup")}
                  >
                    <Text style={{ color: "blue", fontSize: windowHeight(12) }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      }
    />
  );
}
