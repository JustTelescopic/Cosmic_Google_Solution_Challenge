import React from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import FeatherIcon from "react-native-vector-icons/Feather";
import NextButton from "../../components/onBoarding/nextButton";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function VerifyOTP() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
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
                  maxLength={10}
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
                  maxLength={6} // Adjust OTP length as needed
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
              <NextButton  destination={'/home'}/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
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
    left: 20,
    right: 20,
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
  greenCircle: {
    position: "absolute",
    top: 20,
    right: -20,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#CAFF81",
    zIndex: -1,
  },
  imageStyle: {
    resizeMode: "cover",
    right: -50,
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
