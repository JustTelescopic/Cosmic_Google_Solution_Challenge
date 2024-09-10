import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

const HomePage = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={styles.heading}>Get Started</Text>
            <View style={styles.underline} />
          </View>

          <View style={{ alignItems: "center" }}>
            <Pressable
              style={styles.card}
              onPress={() => router.push("/diagnosis")}
            >
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={require("../../../assets/home/cow1.png")}
                  style={styles.backgroundImage}
                  imageStyle={styles.zoomedImage}
                >
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.cardText}>
                        Diagnose Livestock convenientljy
                      </Text>
                      <Text
                        style={{
                          textAlign: "right",
                          color: "white",
                          textDecorationLine: "underline",
                          marginTop: 5,
                          marginEnd: 40,
                        }}
                      >
                        Learn More
                      </Text>
                    </View>
                    <Feather
                      name="chevron-right"
                      size={75}
                      style={{ position: "absolute", right: -30, top: 0 }}
                      color="white"
                    />
                  </View>
                </ImageBackground>
              </View>
            </Pressable>

            <Pressable
              style={styles.card}
              onPress={() => router.push("/diagnosis/crop")}
            >
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={require("../../../assets/home/home2.png")}
                  style={styles.backgroundImage1}
                  imageStyle={styles.zoomedImage}
                >
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.cardText1}>
                        Diagnose Crops With Ease
                      </Text>
                      <Text
                        style={{
                          textAlign: "left",
                          color: "white",
                          textDecorationLine: "underline",
                          marginTop: 5,
                        }}
                      >
                        Learn More
                      </Text>
                    </View>
                    <Feather
                      name="chevron-right"
                      style={{ position: "absolute", right: -160, top: 0 }}
                      size={75}
                      color="white"
                    />
                  </View>
                </ImageBackground>
              </View>
            </Pressable>

            <Pressable style={styles.card}>
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={require("../../../assets/home/home3.png")}
                  style={styles.backgroundImage}
                  imageStyle={styles.zoomedImage}
                >
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.cardText}>
                        Engage With Your Community
                      </Text>
                      <Text
                        style={{
                          textAlign: "right",
                          color: "white",
                          textDecorationLine: "underline",
                          marginTop: 5,
                          marginEnd: 40,
                        }}
                      >
                        Learn More
                      </Text>
                    </View>
                    <Feather
                      name="chevron-right"
                      size={75}
                      style={{ position: "absolute", right: -30, top: 0 }}
                      color="white"
                    />
                  </View>
                </ImageBackground>
              </View>
            </Pressable>

            <Pressable style={styles.card}>
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={require("../../../assets/home/home4.png")}
                  style={styles.backgroundImage1}
                  imageStyle={styles.zoomedImage}
                >
                  <View style={styles.cardContent}>
                    <View>
                      <Text style={styles.cardText2}>
                        Sustainable Agriculture Practices
                      </Text>
                      <Text
                        style={{
                          textAlign: "left",
                          color: "white",
                          textDecorationLine: "underline",
                          marginTop: 5,
                        }}
                      >
                        Learn More
                      </Text>
                    </View>
                    <Feather
                      name="chevron-right"
                      style={{ position: "absolute", right: -120, top: 0 }}
                      size={75}
                      color="white"
                    />
                  </View>
                </ImageBackground>
              </View>
            </Pressable>
          </View>

          {/* Section Two */}

          <View style={{ alignItems: "center" }}>
            <Text style={[styles.heading, { marginTop: 30 }]}>
              Information Hub
            </Text>
            <View style={styles.underline} />
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <View>
              <Text style={styles.Sec2Heading}>
                Benefits of Organic Livestock
              </Text>
              <View style={styles.Sec2Underline} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <ImageBackground
                source={require("../../../assets/home/home5.png")}
                style={styles.Sec2Image}
                imageStyle={{ opacity: 0.9, borderRadius: 10 }}
              >
                <Text
                  style={{
                    width: 150,
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Managing organic livestock
                </Text>
              </ImageBackground>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "normal",
                    color: "gray",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </Text>
              </View>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <View>
              <Text style={styles.Sec2Heading}>
                Importance of Crop Management
              </Text>
              <View style={styles.Sec2Underline} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <View style={{ flex: 1, marginRight: 25 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "normal",
                    color: "gray",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </Text>
              </View>
              <ImageBackground
                source={require("../../../assets/home/home6.png")}
                style={styles.Sec2Image}
                imageStyle={{ opacity: 0.9, borderRadius: 10 }}
              >
                <Text
                  style={{
                    width: 150,
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 18,
                    textAlign: "right",
                  }}
                >
                  Efficient Crop Management
                </Text>
              </ImageBackground>
            </View>
          </View>

          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <View>
              <Text style={styles.Sec2Heading}>Use Of Sequester Carbon</Text>
              <View style={styles.Sec2Underline} />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                marginTop: 4,
              }}
            >
              <ImageBackground
                source={require("../../../assets/home/home7.png")}
                style={styles.Sec2Image}
                imageStyle={{ opacity: 0.9, borderRadius: 10 }}
              >
                <Text
                  style={{
                    width: 150,
                    fontWeight: "bold",
                    color: "white",
                    fontSize: 18,
                  }}
                >
                  Managing organic livestock
                </Text>
              </ImageBackground>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "normal",
                    color: "gray",
                    textAlign: "justify",
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy
                </Text>
              </View>
            </View>
          </View>

          {/* Section Three */}
          <View style={{ alignItems: "center" }}>
            <Text style={[styles.heading, { marginTop: 30 }]}>
              Government Schemes
            </Text>
            <View style={styles.underline} />
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={require("../../../assets/home/home8.png")}
              style={styles.Sec3Image}
              imageStyle={{ opacity: 0.9, borderRadius: 10 }}
            >
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "white",
                  width: 180,
                  textAlign: "right",
                }}
              >
                PM Kisaan Samman Nidhi
              </Text>
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                  marginTop: 7,
                }}
              >
                Learn More
              </Text>
            </ImageBackground>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={require("../../../assets/home/home9.png")}
              style={styles.Sec3Image}
              imageStyle={{ opacity: 0.9, borderRadius: 10 }}
            >
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "white",
                  width: 180,
                  textAlign: "right",
                }}
              >
                PM Fasal Bima Yojana
              </Text>
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                  marginTop: 7,
                }}
              >
                Learn More
              </Text>
            </ImageBackground>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              marginTop: 20,
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={require("../../../assets/home/home19.png")}
              style={styles.Sec3Image}
              imageStyle={{ opacity: 0.9, borderRadius: 10 }}
            >
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "white",
                  width: 180,
                  textAlign: "right",
                }}
              >
                PM Kisaan Mandhan Yojana
              </Text>
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                  marginTop: 7,
                }}
              >
                Learn More
              </Text>
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  //Section 1
  safeArea: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
  },
  underline: {
    width: "20%",
    height: 2,
    backgroundColor: "#5BA93A",
    marginTop: 4,
    transform: "translateY(-10px)",
  },
  card: {
    height: 160,
    width: 370,
    borderRadius: 10,
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  backgroundImage1: {
    flex: 1,
    resizeMode: "cover",
    opacity: 2.2,
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  cardText: {
    textAlign: "right",
    fontWeight: "bold",
    color: "white",
    fontSize: 23,
    width: 250,
    paddingEnd: 40,
  },
  cardText1: {
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
    fontSize: 23,
    width: 200,
  },
  cardText2: {
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
    fontSize: 23,
    width: 230,
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardContent: {
    flexDirection: "row",
    position: "realtive",
  },
  zoomedImage: {
    transform: [
      { scale: 1.3 }, // Zoom in the image by 10%
      { translateX: -20 }, // Move the image 20 units to the left
      { translateY: -10 }, // Move the image 10 units upwards
    ],
  },
  //Section 2
  Sec2Heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Sec2Underline: {
    width: "55%",
    height: 2,
    backgroundColor: "#5BA93A",
    marginTop: 2,
    transform: "translateY(-10px)",
  },
  Sec2Image: {
    flex: 1,
    width: 180,
    height: 120,
    borderRadius: 10,
    alignItems: "flex-start",
    padding: 10,
  },
  Sec2Conatiner: {
    flex: 1,
  },
  //Section 3
  Sec3Image: {
    flex: 1,
    width: 365,
    height: 120,
    borderRadius: 10,
    alignItems: "flex-end",
    padding: 10,
  },
});
