import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ButtonComponent = ({ text, hindiText, borderColor }) => {
  return (
    <View style={{alignItems: "center",}}>
      <TouchableOpacity style={[styles.button, { borderColor }]}>
        <Text style={{ fontWeight: "bold", fontSize: 35 ,color: "gray"}}>हा</Text>
      </TouchableOpacity>
      <Text style={styles.buttonLowerText}>हिन्दी</Text>
    </View>
  );
};

export default function SelectLang() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Image
        source={require("../../assets/icon.png")}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ducimus
        illo, voluptas
      </Text>
      <View style={{ paddingVertical: 25 }}>
        <Text style={styles.title}>Select a language</Text>
      </View>

      <ButtonComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 17,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 17,
    color: "868889",
    fontWeight: "medium",
    textAlign: "center",
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonLowerText: {
    fontSize: 25,
    fontWeight: "bold",
  },
});
