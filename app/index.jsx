import { StyleSheet,Text ,View } from "react-native";
import { Link, Redirect } from "expo-router";
import SelectLang from "./onBoarding/selectLang";
export default function Page() {
  return (
    <View>
      <View style={styles.onboarding_container}>
        <SelectLang />
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
