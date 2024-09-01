import { Tabs } from "expo-router";
import TabBar from "../../components/home/TabBar";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="home"
        options={{ title: "Home", headerTitle: "Home" }}
      />
      <Tabs.Screen
        name="diagnosis"
        options={{ title: "Diagnosis", headerTitle: "Diagnosis" }}
      />
      <Tabs.Screen
        name="reports"
        options={{ title: "Reports", headerTitle: "Reports" }}
      />
      <Tabs.Screen
        name="alerts"
        options={{ title: "Alerts", headerTitle: "Alerts" }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Profile", headerTitle: "Profile" }}
      />
    </Tabs>
  );
}
