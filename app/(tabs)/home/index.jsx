import { Link, Stack } from "expo-router";
import { View, Text, Button } from "react-native";

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Link href="/diagnosis">Push Settings</Link>
    </View>
  );
};
export default HomePage;
