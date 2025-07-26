import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Image } from "react-native";
import { useToast } from "react-native-toast-notifications";
import styles from "./styles";
import Images from "@/utils/images";
import Button from "@/components/common/button";
import { external } from "@/styles/external.style";
import SignInText from "@/components/login/signin.text";
import AuthContainer from "@/utils/container/auth-container";
import PhoneNumberInput from "@/components/login/phone-number.input";
import { BRAZIL_COUNTRY_CODE, windowHeight } from "@/themes/app.constant";

export default function LoginScreen() {
  const [phone_number, setphone_number] = useState("");
  const [loading, setloading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    if (phone_number === "") {
      toast.show("Please fill the fields!", {
        placement: "bottom",
      });
    } else {
      setloading(true);
      const phoneNumber = `${BRAZIL_COUNTRY_CODE}${phone_number}`;

      await axios
        .post(`${process.env.EXPO_PUBLIC_SERVER_URI}/registration`, {
          phone_number: phoneNumber,
        })
        .then((res) => {
          setloading(false);
          router.push({
            pathname: "/(routes)/otp-verification",
            params: { phoneNumber },
          });
        })
        .catch((error) => {
          console.log(error);
          setloading(false);
          toast.show(
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
                    onPress={() => handleSubmit()}
                    disabled={loading}
                    isLoading={loading}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      }
    />
  );
}
