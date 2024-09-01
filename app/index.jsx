import { StyleSheet, View } from "react-native";
import SelectLang from "./onBoarding/selectLang";

export default function Page() {
  return (
    <View>
      <View style={styles.onboarding_container}>
        <SelectLang />
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
