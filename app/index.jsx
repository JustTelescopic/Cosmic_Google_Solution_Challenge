import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SelectLang from "./onBoarding/selectLang";
import Onboarding3 from "./onBoarding/Onboarding3";
import Onboarding4 from "./onBoarding/Onboarding4";
import Onboarding5 from "./onBoarding/Onboarding5";
import Onboarding1 from "./onBoarding/Onboarding1";
import CreateAccount from "./AccountCreation/createAccount";
import VerifyOTP from "./AccountCreation/verifyOTP";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.onboarding_container}>
        {/* <SelectLang /> */}
        <Onboarding1/>
        {/* <CreateAccount/> */}
        {/* <VerifyOTP /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // fontFamily: "Poppins_400Regular",
  },
  onboarding_container :{
    height : "100%",
  }
});

