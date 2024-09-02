import { StyleSheet,Text ,View } from "react-native";
import SelectLang from "./onBoarding/selectLang";
import { Link, Redirect } from "expo-router";
import Selectrole from "./onBoarding/selectrole";
import HandleCamera from "./onBoarding/Camera";
// import Userinput from "./(tabs)/[userinput]";


export default function Page() {
  return (
    <View>
      <View style={styles.onboarding_container}>
        <SelectLang />
        {/* <Userinput/> */}
        {/* <HandleCamera /> */}
        {/* <Selectrole/> */}
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
