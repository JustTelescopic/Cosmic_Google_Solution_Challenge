import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

const fruitsData = {
  type: "Fruits",
  description: "Lorem ipsum dolor sit amet.",
  image: require("../../../assets/diagosis-page-assets/fruits.png"),
};
const MedicinalData = {
  type: "Medicinal",
  description: "Lorem ipsum dolor sit amet.",
  image: require("../../../assets/diagosis-page-assets/medicinal.png"),
};
const topCropData = [
  {
    type: "Vegetables",
    description: "Lorem ipsum dolor sit amet.",
    image: require("../../../assets/diagosis-page-assets/fruits.png"),
  },
  {
    type: "Pulses",
    description: "Lorem ipsum dolor sit amet.",
    image: require("../../../assets/diagosis-page-assets/medicinal.png"),
  },
];
const bottomCropData = [
  {
    type: "Beverage",
    description: "Lorem ipsum dolor sit amet.",
    image: require("../../../assets/diagosis-page-assets/fruits.png"),
  },
  {
    type: "Fibre",
    description: "Lorem ipsum dolor sit amet.",
    image: require("../../../assets/diagosis-page-assets/medicinal.png"),
  },
];

const extraFeatures = [
  {
    type: "Use certified seeds",
    description: "Ensure high-quality, disease-resistant seeds.",
    image: require("../../../assets/diagosis-page-assets/vaccination.png"),
  },
  {
    type: "Timely pesticide use",
    description: "Prevent disease buildup by alternating crops.",
    image: require("../../../assets/diagosis-page-assets/nutrition.png"),
  },
  {
    type: "Crop rotation",
    description: "Apply appropriate pesticides early for disease control.",
    image: require("../../../assets/diagosis-page-assets/hygiene.png"),
  },
];
const CropTypeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Select Your Crop Type</Text>
          <View style={styles.underline} />
          <Text style={styles.subheader}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy
          </Text>
        </View>
        <View style={styles.cardContainer}>
          {/* Fruits row     */}
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={fruitsData.image}
              style={styles.cardImage}
              imageStyle={{ ...styles.imagePosition }}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)"]}
                style={styles.gradient}
              >
                <Text style={styles.cardTitle}>{fruitsData.type}</Text>
                <Text style={styles.cardDescription}>
                  {fruitsData.description}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>

          {/* Medicinal row */}

          <View style={styles.bottomCardContainer}>
            {topCropData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{ ...styles.card, flexBasis: "50%" }}
              >
                <ImageBackground
                  source={item.image}
                  style={styles.cardImage}
                  imageStyle={styles.imagePosition}
                >
                  <LinearGradient
                    colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)"]}
                    style={styles.gradient}
                  >
                    <Text style={styles.cardTitle}>{item.type}</Text>
                    <Text style={styles.cardDescription}>
                      {item.description}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={MedicinalData.image}
              style={styles.cardImage}
              imageStyle={{ ...styles.imagePosition }}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.3)"]}
                style={styles.gradient}
              >
                <Text style={styles.cardTitle}>{MedicinalData.type}</Text>
                <Text style={styles.cardDescription}>
                  {MedicinalData.description}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>

          <View style={styles.bottomCardContainer}>
            {bottomCropData.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{ ...styles.card, flexBasis: "50%" }}
              >
                <ImageBackground
                  source={item.image}
                  style={styles.cardImage}
                  imageStyle={styles.imagePosition}
                >
                  <LinearGradient
                    colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.2)"]}
                    style={styles.gradient}
                  >
                    <Text style={styles.cardTitle}>{item.type}</Text>
                    <Text style={styles.cardDescription}>
                      {item.description}
                    </Text>
                  </LinearGradient>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* <View style={styles.sectionHeaderContainer}>
        <Text style={styles.sectionHeader}>How To Handle Livestock Efficiently?</Text>
        <View style={styles.underline} />
      </View> */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>How to grow disease free crops ?</Text>
          <View style={styles.underline} />
        </View>
        {/* <View style={styles.cardContainer}>
      {topLivestockData.map((item, index) => (
        <TouchableOpacity key={index} style={styles.card}>  
          <ImageBackground source={item.image} style={styles.cardImage}
            imageStyle={{...styles.imagePosition, top : index ==1 ? 0 : -60}}
          >
            <LinearGradient colors={['rgba(0,0,0,0.3)', 'rgba(0,0,0,0.3)']} style={styles.gradient}>
              <Text style={styles.cardTitle}>{item.type}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      ))}
    </View> */}
        <View style={styles.cardContainer}>
          {extraFeatures.map((feature, index) => (
            <View style={styles.card} key={index}>
              <ImageBackground source={feature.image} style={styles.cardImage}>
                <LinearGradient
                  colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.2)"]}
                  start={{ x: 0, y: 0.5 }}
                  end={{ x: 1, y: 0.5 }}
                  style={styles.gradient}
                >
                  <Text style={styles.cardTitle}>{feature.type}</Text>
                  <Text style={styles.cardDescription}>
                    {feature.description}
                  </Text>
                  <TouchableOpacity style={styles.discoverBtnWrapper}>
                    <Text style={styles.discoverMore}>Discover more</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </ImageBackground>
            </View>
          ))}
        </View>
        {/* <View style={styles.card}>
        <ImageBackground source={require('../../../assets/diagosis-page-assets/vaccination.png')} style={styles.cardImage}>
          <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']} style={styles.gradient}>
            <Text style={styles.cardTitle}>Vaccination</Text>
            <Text style={styles.cardDescription}>Regular immunization to prevent diseases.</Text>
            <TouchableOpacity><Text style={styles.discoverMore}>Discover more</Text></TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.card}>
        <ImageBackground source={require('../../../assets/diagosis-page-assets/nutrition.png')} style={styles.cardImage}>
          <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']} style={styles.gradient}>
            <Text style={styles.cardTitle}>Proper nutrition</Text>
            <Text style={styles.cardDescription}>Balanced diet for healthy growth.</Text>
            <TouchableOpacity><Text style={styles.discoverMore}>Discover more</Text></TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View>

      <View style={styles.card}>
        <ImageBackground source={require('../../../assets/diagosis-page-assets/hygiene.png')} style={styles.cardImage}>
          <LinearGradient colors={['rgba(0,0,0,0.5)', 'transparent']} style={styles.gradient}>
            <Text style={styles.cardTitle}>Hygiene maintenance</Text>
            <Text style={styles.cardDescription}>Clean environment to reduce infections.</Text>
            <TouchableOpacity><Text style={styles.discoverMore}>Discover more</Text></TouchableOpacity>
          </LinearGradient>
        </ImageBackground>
      </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 16,
    // alignItems : 'center',
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    width: "100%",
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    width: "100%",
  },
  subheader: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 16,
    color: "#666",
    lineHeight: 22,
  },
  cardContainer: {
    width: "100%",
    flex: 1,
    marginBottom: 4,
    // flexDirection : 'row',
    // flexWrap : 'wrap',
    rowGap: 2,
    // columnGap: 4,
    // justifyContent : 'center',
    // alignItems : 'center',
  },
  bottomCardContainer: {
    width: "100%",
    flex: 2,
    // marginBottom : 8,
    flexDirection: "row",
    // flexWrap : 'wrap',
    rowGap: 8,
    columnGap: 4,
    justifyContent: "space-between",
    alignItems: "center",
  },
  card: {
    flexBasis: "100%",
    // marginBottom: 8,
    borderRadius: 5,
    overflow: "hidden",
    height: 110,
  },
  cardImage: {
    height: "100%",
    // justifyContent: 'center',
    resizeMode: "cover",
  },
  imagePosition: {
    // position : 'absolute',
    // top : 0,
    // left : 0,
    width: "100%", // Increase the size to zoom in
    // height: 220,
    // top: -60,
    // left: 0,
  },
  gradient: {
    padding: 16,
    paddingLeft: 22,
    justifyContent: "center",
    height: "100%",
  },
  cardTitle: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#fff",
    marginTop: 4,
  },
  discoverBtnWrapper: {
    flex: 1,
    alignItems: "flex-end",
    // backgroundColor : 'white',
    justifyContent: "center",
  },
  discoverMore: {
    // marginTop: 8,
    color: "#fff",
    flex: 0,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    // textDecorationLine: 'underline',
    // paddingVertical : 4,
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 4,
  },
  sectionHeaderContainer: {
    marginVertical: 24,
    alignItems: "center",
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  underline: {
    width: "70%",
    height: 2,
    backgroundColor: "#7CFC00",
    marginTop: 4,
    transform: "translateY(-10px)",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // or any color you prefer
  },
});

export default CropTypeScreen;
