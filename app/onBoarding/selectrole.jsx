import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    Pressable
} from "react-native";
import DotIndicator from "../../components/onBoarding/DotIndicator";
import NextButton from "../../components/onBoarding/nextButton";
import { router } from 'expo-router';
import { LinearGradient } from "expo-linear-gradient";
import { Platform } from 'react-native';


const inactiveOpacity=['rgba(0,0,0,0.4)', 'rgba(0,0,0,0.4)']
const activeOpacity=['rgba(0,0,0,0)', 'rgba(0,0,0,0)']
const Selectrole = () => {
  const [role,setRole]= useState(null);
  const handleSelectRole = (roleType) => {
    setRole(prev =>roleType)    
    // if (roleType === 'farmer') {
    //   router.push('/tabs/diagnosis/crop')
    // } else if (roleType === 'veterinarian') {
    //   router.push('/tabs/diagnosis/livestock')
    // }
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.textContainer}>
        <View style={styles.curve} />
        <Text style={styles.title}>Diagnose Crop & Livestock Diseases</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy
        </Text>
      </View> */}
      <View style={styles.headerContainer}> 
          <View style={styles.curve} />
        <Text style={styles.header}>Select Your Role</Text>
        <View style={styles.underline} />
        <Text style={styles.subheader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy</Text>
        </View>
      <View style={styles.imageContainer}>
        <View style={styles.cardContainer}>
        {/* Fruits row     */}
        <TouchableOpacity style={role =='farmer' ? [styles.card,styles.active] :  styles.card } onPress={() => handleSelectRole('farmer')}>  
          <ImageBackground source={require('../../assets/onboarding-assets/farmer.png')} style={styles.cardImage}
            imageStyle={{...styles.imagePosition,}}
          >
          <LinearGradient colors={role =='farmer'? activeOpacity :inactiveOpacity} style={styles.gradient}>
            <View style={styles.overlay}>
              <View style={styles.after_overlay}/>

              <Text style={styles.cardTitle}>Farmer</Text>
              <Text style={styles.cardDescription}>Select your role as Farmer</Text>
            </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{...styles.underline,transform : 'translateY(0)'}} />
        <TouchableOpacity style={role =='veterinarian' ? [styles.card,styles.active] :  styles.card } onPress={() => handleSelectRole('veterinarian')}>  
          <ImageBackground source={require('../../assets/onboarding-assets/veterinarian.png')} style={styles.cardImage}
            imageStyle={{...styles.imagePosition,}}
          >
          <LinearGradient colors={role =='veterinarian'? activeOpacity :inactiveOpacity} style={styles.gradient}>
            <View style={{...styles.overlay,left : 'unset' ,right : 0}}>
              <View style={styles.before_overlay}/>

              <Text style={{...styles.cardTitle,textAlign : 'right'}}>Veterinarian</Text>
              <Text style={{...styles.cardDescription,textAlign : 'right'}}>Select your role as Veterinarian</Text>
            </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
        </View>
        {/* <Image
          source={require("../../assets/onboarding-assets/cattle.png")} // Use your local image or an online source
          style={styles.image}
        />
        <View style={styles.bgStop}></View> */}
        <View style={styles.btn_container}>
          <DotIndicator activeIndex={1} totalDots={6} />
          <NextButton title={"Next"} destination={"/home"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBFDDA",
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
    paddingTop : 90,
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
  header: {
    // flex : 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    width : '100%'
  },
  headerContainer : {
    // flex : 1,
    position : 'relative',
    backgroundColor : "white",
    alignItems : 'center',
    justifyContent : 'center',
    padding:16,
    width : '100%',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 0,
  },
  subheader: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 16,
    paddingHorizontal : 20,
    color: '#666',
    lineHeight: 22
  }, 
  underline: {
    width: '50%',
    height: 2,
    backgroundColor: '#5BA93A',
    marginTop: 4,
    transform : 'translateY(-10px)',
  },
  cardContainer : {
    width : '100%',
    // flex : 1,
    marginBottom : 4,
    // flexDirection : 'row',
    // flexWrap : 'wrap',
    rowGap: 25, 
    // columnGap: 4,
    // justifyContent : 'center',
    alignItems : 'center',
  },
card: {
    // flexBasis : '100%',
    // marginBottom: 8,
    // borderLeftWidth : 3,
    // borderLeftColor : 'transparent',
    // borderRightWidth : 3,
    // borderRightColor : 'transparent',
    position : 'relative',
    borderRadius: 5,
    overflow: 'hidden',
    height: 150,
    width : '80%'
  },
  active : {
    borderBottomWidth : 3,
    borderBottomColor : '#0D4803',
  },
cardImage: {
      height : '100%',
    // justifyContent: 'center',
    resizeMode : 'cover'    
  },
  imagePosition : {
    // position : 'absolute',
    // top : 0,
    // left : 0,
    width: "100%",  // Increase the size to zoom in
    // height: "100%",
    // top: 10, 
    // left: 0,
  },
  gradient: {
    // padding: 16,
    // paddingLeft : 22,
    justifyContent: 'center',
    height: '100%',
    // position : 'relative'
  },
  after_overlay : {
    position: 'absolute',
    top : -1,
    right : -49,
    height : 0,
    width : 0,
    borderTopColor : "transparent",
    borderBottomColor : "transparent",
    borderLeftColor : "white",
    borderRightColor : 'transparent',
    borderTopWidth : 150,
    borderBottomWidth : 40,
    borderLeftWidth : 50,
  },
  before_overlay : {
    position: 'absolute',
    bottom: -1,
    left : -50,
    height : 0,
    width : 0,
    borderTopColor : "transparent",
    borderBottomColor : "transparent",
    borderRightColor : "white",
    // borderRightColor : 'transparent',
    borderTopWidth : 40,
    borderBottomWidth : 150,
    borderRightWidth : 50,
  },
  overlay: {
    position: 'absolute',
    height : '100%',
    width : '45%',
    backgroundColor : "white",
    flex : 1,
    gap :6,
    justifyContent: 'center',
    padding : 16,
    top: 0,
    left: 0,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  cardTitle: {
    // wordWrap: 'wrap',
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#070034',
    marginTop: 4,

  },
});

export default Selectrole;