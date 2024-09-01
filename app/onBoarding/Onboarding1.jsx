import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import DotIndicator from "../../components/onBoarding/DotIndicator";
import NextButton from "../../components/onBoarding/nextButton";

export default function OnBoarding1() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.curve} />
        <Text style={styles.title}>Diagnose Crop & Livestock Diseases</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/onboarding-assets/cattle.png")} // Use your local image or an online source
          style={styles.image}
        />
        <View style={styles.bgStop}></View>
        <View style={styles.btn_container}>
          <DotIndicator activeIndex={1} totalDots={6} />
          <NextButton title={"Next"} destination={"/onBoarding/Onboarding3"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBFFD7",
    paddingHorizontal: 0,
    marginVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "100%",
    // height : '100%',
    alignItems: "center",
    // justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 0,
    position: "relative",
  },
  imageContainer: {
    flex: 1,
    // backgroundColor:'cyan',
    width: "100%",
    height: "100%",
    alignItems: "center",
    // justifyContent: 'flex-end',
    position: "relative",
    zIndex: 0,
  },
  image: {
    width: "80%",
    height: "80%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    left: -20,
  },
  bgStop: {
    position: "absolute",
    backgroundColor: "red",
    top: 20,
    left: -30,
    width: 400, // Diameter of the circle
    height: 400,
    borderRadius: 200, // Half of the width/height
    backgroundColor: "#CAFF98", // Circle color
    justifyContent: "center", // Center content inside the circle (optional)
    alignItems: "center",
    zIndex: -1,
  },
  curve: {
    position: "absolute",
    backgroundColor: "red",
    bottom: -50,
    left: -230,
    width: 900, // Diameter of the circle
    height: 900,
    borderRadius: 500, // Half of the width/height
    backgroundColor: "white", // Circle color
    justifyContent: "center", // Center content inside the circle (optional)
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    maxWidth: 305,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop : -50,
    marginBottom: 30,
  },
  subtitle: {
    fontSize: 14,
    maxWidth: 350,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
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
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  btn_container: {
    position: "absolute",
    bottom: 30,
    left: 0,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
