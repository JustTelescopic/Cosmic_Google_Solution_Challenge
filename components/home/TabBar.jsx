import { View, Text, Pressable, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

export default function TabBar({ state, descriptors, navigation }) {
  const icon = {
    index: (props) => (
      <Feather name="home" size={24} color="black" {...props} />
    ),
    diagnosis: (props) => (
      <Feather name="search" size={24} color="black" {...props} />
    ),
    reports: (props) => (
      <Feather name="pie-chart" size={24} color="black" {...props} />
    ),
    alerts: (props) => (
      <Feather name="clock" size={24} color="black" {...props} />
    ),
    profile: (props) => (
      <Feather name="user" size={24} color="black" {...props} />
    ),
  };
  return (
    <View style={styles.TabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={route.name}
            style={[
              styles.tabbarItem,
              { backgroundColor: isFocused ? "#BAE5AC" : "transparent" },
            ]}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {icon[route.name]({
              color: isFocused ? "#245F1A" : "#222",
            })}
            <Text
              style={{
                color: isFocused ? "#245F1A" : "#222",
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  TabBar: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 6,
    margin: 5,
  },
});
