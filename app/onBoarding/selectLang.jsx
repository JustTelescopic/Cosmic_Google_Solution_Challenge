import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import NextButton from "../../components/onBoarding/nextButton";
import DotIndicator from "../../components/onBoarding/DotIndicator";

const ButtonComponent = ({ text, hindiText, borderColor }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={[styles.button, { borderColor }]}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>हा</Text>
      </TouchableOpacity>
      <Text style={styles.buttonLowerText}>हिन्दी</Text>
    </View>
  );
};

export default function SelectLang() {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          marginBottom: 35,
          paddingHorizontal: 35,
        }}
      >
        <Text style={styles.title}>Welcome to</Text>
        <Image
          source={require("../../assets/image.png")}
          style={{ width: 200, height: 100, marginVertical: 20 }}
        />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          ducimus illo, voluptas
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 35 }}>
        <View style={{ paddingVertical: 25 }}>
          <Text style={styles.title}>Select a language</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 12 }}>
          <ButtonComponent borderColor="#D4AF37" />
          <ButtonComponent borderColor="#85BDB6" />
          <ButtonComponent borderColor="#4F2D93" />
          <ButtonComponent borderColor="#4A5AA8" />
        </View>
        <View style={{ flexDirection: "row" }}>
          <ButtonComponent borderColor="#4556D9" />
          <ButtonComponent borderColor="#322C66" />
          <ButtonComponent borderColor="#D24A52" />
        </View>
      </View>

      <View style={{ marginTop: 40 }}>
        <DotIndicator activeIndex={0} totalDots={4} />
        <NextButton title={"Next"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
    color: "gray",
    fontWeight: "medium",
    textAlign: "center",
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
    marginHorizontal: 9,
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonLowerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gray",
  },
  nextButton: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#34C759",
  },
  nextButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#34C759",
  },
  pagination: {
    flexDirection: "row",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
    marginHorizontal: 4,
  },
});
