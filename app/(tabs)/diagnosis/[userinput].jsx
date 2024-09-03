import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button, ScrollView, Pressable, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FeatherIcon from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import { useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const imageData={
  cattle : {image: require("../../../assets/diagosis-page-assets/cattle.png"),},
  horse : {image: require("../../../assets/diagosis-page-assets/horse.png"),},
  ship : {image: require("../../../assets/diagosis-page-assets/ship.png"),},
  pig : {image: require("../../../assets/diagosis-page-assets/pig.png"),},
  fruits : {image: require("../../../assets/diagosis-page-assets/cattle.png"),},
  vegetables : {image: require("../../../assets/diagosis-page-assets/vegetables.png"),},
  pulses : {image: require("../../../assets/diagosis-page-assets/pulses.png"),},
  medicinal : {image: require("../../../assets/diagosis-page-assets/medicinal.png"),},
  beverage : {image: require("../../../assets/diagosis-page-assets/beverage.png"),},
  fibre : {image: require("../../../assets/diagosis-page-assets/fibre.png"),},
}
export default function Userinput() {
  const [image, setImage] = useState(null);
  const [symptoms, setSymptoms] = useState('');
  const [media, setMedia] = useState(null);
  const { userinput } = useLocalSearchParams();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      console.log(result);
    }
  };

  const pickMedia = async () => {
    // Request camera permissions
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Camera permissions are required to use this feature.');
      return;
    }

    // Launch the camera and capture the media
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      base64: true,
      exif: true,
      videoMaxDuration: 60, // 60 seconds max duration for video
    //   cameraType: ImagePicker.,
    });

    if (!result.canceled) {
      setMedia(result.assets[0]); // Set the media data
    }
  };
  return (

  // <SafeAreaView style={styles.safeArea}>
    <ScrollView style={styles.container}
        contentContainerStyle={{ paddingBottom: 150 }}
    >
      <View style={styles.headerContainer}>
          <Text style={styles.header}>Crop Disease Diagnosis</Text>
          <View style={styles.underline} />
          {/* <Text style={styles.subheader}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
            nonumy
        </Text> */}
        </View>
      <Text style={styles.header}>Category Selected</Text>
      {/* <Image
        style={styles.categoryImage}
        source={{ uri: 'https://example.com/fruit-category-image.jpg' }} // Replace with the correct image URI
      /> */}
      {/* <Text style={styles.categoryText}>Fruits</Text> */}
      <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={imageData[userinput].image}
              style={styles.cardImage}
            //   imageStyle={{ ...styles.imagePosition }}
            >
              <LinearGradient
                colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.4)"]}
                style={styles.gradient}
              >
                <Text style={styles.cardTitle}>{userinput}</Text>
                {/* <Text style={styles.cardDescription}>
                  something
                </Text> */}
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        <View style={styles.inputContainer}>
            <TouchableOpacity style={{...styles.uploadContainer, borderStyle : media ? "solid" : "dashed"}} onPress={pickMedia}>
                {media ? (
                <Image source={{ uri: media.uri }} style={styles.uploadedImage} />
                ) : (
                <View style={styles.uploadPlaceholder}>
                    <FeatherIcon name="camera" size={50} style={styles.inputIcon} />
                    <Text style={styles.uploadText}>Click to upload an image</Text>
                    {/* <Text style={styles.uploadTextSmall}>Click to upload an image</Text> */}
                </View>
                )}
            </TouchableOpacity>
            <Text style={styles.header}>Enter The Symptoms Observed</Text>

            <Text style={styles.mentionText}
            >
                Mention These Things{'\n'}Crop Type: Specify the crop you’re growing.{'\n'}Pesticide: Name and dosage of
                pesticide used.{'\n'}Weather Conditions: Recent weather (rain, drought).{'\n'}Plot Area: Size of your plot (in
                acres/hectares).
            </Text>

            <TextInput
                style={styles.symptomsInputText}
                placeholder="Enter The Symptoms Observed"
                placeholderTextColor="white"
                multiline
                value={symptoms}
                onChangeText={setSymptoms}
            />
      </View>

      <Pressable
        style={styles.buttonContainer}
        onPress={() => {}}
        >
        <LinearGradient
            colors={["#A8E063", "#56AB2F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
        >
            <Text style={styles.buttonText}>Generate Report</Text>
        </LinearGradient>
    </Pressable>
    </ScrollView>
    //</SafeAreaView> */}
  );
}

const styles = StyleSheet.create({
  safeArea : {
    flex : 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    marginBottom : 0
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#999',
    marginBottom: 20,
  },
  categorySelected: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  categoryText: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  inputContainer : {    
    backgroundColor: "#E5FFDA",
    paddingHorizontal : 20,
    marginTop: 5
  },
  uploadContainer: {
    borderWidth: 1,
    borderStyle : 'dashed',
    // flex : 1,
    alignSelf: 'center',
    borderColor: '#0F3009',
    borderRadius: 10,
    width : '90%',
    aspectRatio : 4/2,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
  uploadedImage: {
    width : '100%',
    height : '100%',
    resizeMode : 'cover',
    borderRadius: 10,
  },
  uploadText: {
    fontSize: 16,
    color: '#999',
  },
  symptomsInputText: {
    height: 150,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#0F3009',
    marginBottom: 20,
    textAlignVertical: 'top',
    
    color: '#fff',
  },
  mentionText: {    
    fontSize: 12,
    color: '#0F3009',
    marginBottom: 20,
    textAlign: 'center',
  },
  header: {
    // flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    width: "100%",
  },
  headerContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent : 'center',
    padding: 16,
    width: "100%",
  },
  subheader: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 0,
    color: "#666",
    lineHeight: 18,
  },
  underline: {
    width: "70%",
    height: 2,
    backgroundColor: "#7CFC00",
    marginTop: 4,
    transform: "translateY(-10px)",
  },
  uploadPlaceholder : {
    flex : 1,
    padding: 20,
    justifyContent : 'center',
  },
  inputIcon : {
    alignSelf : 'center',
    color : "#0F3009",
  },
  generateBtn : {
    backgroundColor : "#70C723",
    borderRadius : 10
  },
  buttonContainer: {
    alignSelf : 'center',
    width: "100%",
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 5,
    // },
    // elevation: 10,
    marginTop : 10,
    // borderBottomColor : "#0F4C05",
    // borderBottomWidth : 1,
  },
  button: {
    paddingVertical: 10,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    // borderBottomColor : "#0F4C05",
    // borderBottomWidth : 1,
  },
  buttonText: {
    color: "#0F4C05",
    fontSize: 16,
  },
  cardTitle : {
    color : "white",
    fontSize : 18,
    fontWeight : "bold",
    marginBottom : 8,
    paddingVertical : 20,
    textAlign : 'center',
    textTransform :'capitalize'
},
  cardImage : {
    flex : 1,
    width : '100%',
    height : '100%',
    resizeMode : 'cover',
    borderRadius: 10,
  }
  
});
