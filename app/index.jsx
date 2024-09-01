import { StyleSheet,Text ,View } from "react-native";
import SelectLang from "./onBoarding/selectLang";
import CreateAccount from "./accountcreation/createAccount";
import VerifyOTP from "./accountcreation/verifyotp";
import { Link, Redirect } from "expo-router";
import Selectrole from "./onBoarding/selectrole";


export default function Page() {
  return (
    <View>
      <View style={styles.onboarding_container}>
        <SelectLang />
        {/* <Selectrole/> */}
        {/* <VerifyOTP /> */}
        {/* <Redirect href="/home" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  onboarding_container: {
    height: "100%",
  },
});
