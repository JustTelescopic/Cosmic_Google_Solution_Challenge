import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import FeatherIcon from "react-native-vector-icons/Feather";
import NextButton from "../../components/onBoarding/nextButton";

const { height } = Dimensions.get("window");

export default function VerifyOTP() {
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
          <View style={styles.inputContainer}>
            <FeatherIcon name="phone" size={20} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={10} // Optional: Limit the number of digits
              placeholder="Phone Number"
            />
            <TouchableOpacity style={styles.otpButton}>
              <Text style={styles.otpButtonText}>Send OTP</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.inputContainer}>
            <FeatherIcon name="lock" size={20} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              maxLength={10} // Optional: Limit the number of digits
              placeholder="Enter OTP"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              marginTop: 10,
            }}
          >
            <TouchableOpacity>
              <Text style={styles.resendOtpButtonText}>Resend OTP</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
          }}
        >
          <NextButton />
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
    height: height * 0.65,
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
    padding: 17,
    backgroundColor: "#F4F5F9",
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "#fff",
    borderRadius: 6,
    height: 50,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  inputIcon: {
    marginRight: 10,
    color: "#016E05",
  },
  input: {
    flex: 1,
    fontSize: 18,
    borderRadius: 6,
    fontWeight: "500",
  },
  otpButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#E2FFE4",
    borderRadius: 6,
  },
  otpButtonText: {
    color: "#054c05",
    fontWeight: "bold",
    fontSize: 16,
  },
  resendOtpButtonText: {
    color: "#407EC7",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },
});
