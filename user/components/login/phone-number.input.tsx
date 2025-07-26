import { View, Text, TextInput } from "react-native";
import color from "@/themes/app.colors";
import styles from "@/screens/login/styles";
import { external } from "@/styles/external.style";
import { commonStyles } from "@/styles/common.style";
import { windowHeight } from "@/themes/app.constant";

interface Props {
  width?: number;
  phone_number: string;
  setphone_number: (phone_number: string) => void;
}

export default function PhoneNumberInput({
  phone_number,
  setphone_number,
}: Props) {
  return (
    <View>
      <Text
        style={[commonStyles.mediumTextBlack, { marginTop: windowHeight(8) }]}
      >
        Phone Number
      </Text>
      <View style={[external.fd_row, external.ai_center, external.mt_5]}>
        <View
          style={[
            styles.phoneNumberInput,
            {
              borderColor: color.border,
            },
          ]}
        >
          <TextInput
            style={[commonStyles.regularText]}
            placeholderTextColor={color.subtitle}
            placeholder={"Enter your number"}
            keyboardType="numeric"
            value={phone_number}
            onChangeText={setphone_number}
            maxLength={12}
          />
        </View>
      </View>
    </View>
  );
}
