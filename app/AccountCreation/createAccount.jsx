import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import NextButton from "../../components/onBoarding/nextButton";

const { height } = Dimensions.get("window");

export default function CreateAccount() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <View style={styles.iconContainer}>
          <Icon name="angle-left" size={35} />
        </View>
        <ImageBackground
          source={require("../../assets/farmer.png")}
          style={styles.backgroundImage}
          imageStyle={styles.imageStyle}
        >
          <View style={styles.greenCircle} />
          <View style={styles.textContainer}>
            <Text style={styles.overlayText}>
              Nourishing Crops, Caring for Animals
            </Text>
          </View>
        </ImageBackground>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View>
          <Text style={{ fontSize: 35, fontWeight: "bold" }}>Welcome</Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "gray",
              marginTop: 5,
              marginBottom: 50,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy
          </Text>
          <View style={{ alignContent: "center", justifyContent: "center" }}>
            <NextButton />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topSection: {
    height: height * 0.7,
    position: "relative",
  },
  iconContainer: {
    paddingStart: 25,
    paddingTop: 25,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end", // Aligns children to the bottom
  },
  textContainer: {
    position: "absolute",
    top: 20, // Distance from the bottom of the image
    left: 20, // Distance from the left edge of the image
    right: 20, // Distance from the right edge of the image
    width: "50%",
  },
  overlayText: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#016E05",
  },
  bottomSection: {
    height: height * 0.3,
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  circleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  greenCircle: {
    position: "absolute",
    top: 20, // Distance from the bottom of the image
    right: -20, // Distance from the right edge of the image
    width: 400,
    height: 400,
    borderRadius: 200, // Half of the width and height to make it a circle
    backgroundColor: "#CAFF81",
    zIndex: -1, // Place the circle behind the image
  },
  imageStyle: {
    resizeMode: "cover",
    right: -50, // Move the image to the right
    position: "absolute",
  },
});
