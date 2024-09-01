import { StyleSheet,Text ,View } from "react-native";
import SelectLang from "./onboarding/selectLang";
import { Link } from "expo-router";
import CreateAccount from "./AccountCreation/createAccount";
import VerifyOTP from "./AccountCreation/verifyOTP";
import LivestockTypeScreen from "./diagnosis/livestock";
import CropTypeScreen from "./diagnosis/crop";

export default function Page() {
  return (
    <View>
      <View style={styles.onboarding_container}>
        <SelectLang />
        {/* <SelectLang /> */}
        {/* <Onboarding1/> */}
        {/* <LivestockTypeScreen /> */}
        {/* <CropTypeScreen /> */}
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
  },
  onboarding_container: {
    height: "100%",
  },
});
