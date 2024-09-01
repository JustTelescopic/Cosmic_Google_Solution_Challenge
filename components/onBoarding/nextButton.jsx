import { LinearGradient } from "expo-linear-gradient";
import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter from expo-router

export default function NextButton({
  title = "Next",
  destination,
  accessibilityLabel,
}) {
  const router = useRouter(); // Initialize the router
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => router.push(destination)}
    >
      <LinearGradient
        colors={["#A8E063", "#56AB2F"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: 365,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 10,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 365,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
