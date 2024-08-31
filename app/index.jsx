import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SelectLang from "./onBoarding/selectLang";
import CreateAccount from "./AccountCreation/createAccount";
import VerifyOTP from "./AccountCreation/verifyOTP";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <SelectLang />
        {/* <CreateAccount/> */}
        {/* <VerifyOTP /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
