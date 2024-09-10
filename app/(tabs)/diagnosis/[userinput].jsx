import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Button, ScrollView, Pressable, ImageBackground,ActivityIndicator, TurboModuleRegistry } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import FeatherIcon from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ReportContext } from '../../../context';
const apiUrl = process.env.EXPO_BACKEND_URI
// import axios from 'axios';
const livestockArray= [
  "cattle",
  "horse",
  "ship",
  "pig"
]
const cropArray = [
  "fruits",
  "vegetables",
  "pulses",
"medicinal",
"beverage",
"fibre",
]
const imageData={
  cattle : {image: require("../../../assets/diagosis-page-assets/cattle.png"),},
  horse : {image: require("../../../assets/diagosis-page-assets/horse.png"),},
  ship : {image: require("../../../assets/diagosis-page-assets/ship.png"),},
  pig : {image: require("../../../assets/diagosis-page-assets/pig.png"),},
  fruits : {image: require("../../../assets/diagosis-page-assets/fruits.png"),},
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
  const [isProcessing,setIsProcessing] = useState(false)
  const {report,setReport} = useContext(ReportContext)
  const endpoint = livestockArray.includes(userinput) ? 'cattle' : "fruits" 
  function handleImageUpload() {
    const formData = new FormData();
    console.log(media.uri)
    formData.append('file', {
      uri: media.uri,
      type: 'image/jpeg', // Adjust the type according to the captured image type
      name: 'photo.jpg',  // Name of the file
    });
  }
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
  const imageToBase64 = async (uri) => {
    try {
      // Fetch the image data
      const response = await fetch(uri);
      const blob = await response.blob();
  
      // Create a FileReader instance
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          // The result attribute contains the data as a base64 encoded string
          const base64String = reader.result.split(',')[1];
          resolve(base64String);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        // Read the blob as a Data URL (base64)
        reader.readAsDataURL(blob);
      });
    } catch (error) {
      console.error('Error converting image to base64:', error);
      throw error;
    }
  };
  const handleImageConversion = async () => {
    try {
      const uri = 'path/to/your/image.jpg'; // Replace with your actual image URI
      const base64String = await imageToBase64(uri);
      console.log('Base64 string:', base64String);
      // Now you can use this base64String to send to your backend or for other purposes
    } catch (error) {
      console.error('Error in image conversion:', error);
    }
  };
  const uriToFile = async (uri, name) => {
    try {
      // Fetch the image data from the URI
      const response = await fetch(uri);
      const blob = await response.blob();
  
      // Create a file object with the fetched data
      // Note: `lastModified` and `webkitRelativePath` are not directly available, so you might need to set defaults
      const file = new File([blob], name, {
        type: blob.type,
        lastModified: Date.now(),
        webkitRelativePath: '',
      });
  
      return file;
    } catch (error) {
      console.error('Error creating file from URI:', error);
      throw error;
    }
  };
  const convertUriToBlob = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      const file = new File([blob], 'image.jpg', { type: blob.type }); // Adjust the filename and type as needed
      return file;
    } catch (error) {
      console.error('Error converting URI to File:', error);
      return null;
    }
  };
function sample() {
  console.log(media.base64)
}
  const handleSubmit = async (event) => {
    // event.preventDefault(); // Prevent the default form submission behavior if this is in a form
    
    // Create a FormData object
    const uri = media.uri; // Your image URI
    const name = 'photo.jpg'; 
    console.log({uri})
    const file = await uriToFile(uri, name);
    // const file = await uriToFile(uri);
    // const file = await convertUriToBlob(uri);
    console.log('File object created:', JSON.stringify(file));
     // Example of uploading the file using fetch
     const formData = new FormData();
    formData.append('file', {
      uri: media.uri,
      type: 'image/jpeg', // Adjust the type according to the captured image type
      name: 'photo.jpg',  // Name of the file
  });
  formData.append('inputText',symptoms)
    //  formData.append('file', file);
    // console.log(JSON.stringify(formData))
      // const base64String = await imageToBase64(media.);
      // console.log('Base64 string:', base64String);
      console.log({symptoms,endpoint})
    try {
      // Perform the POST request with fetch
      setIsProcessing(true)
      const response = await fetch(`http://192.168.0.205:8000/${endpoint}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data', // This is automatically set by FormData, so it might be optional
        },
      });
      
      // if (!response.ok) {
      //   // throw new Error('Network response was not ok');
      // }
  
      // Parse the response
      const responseData = await response.json();
      console.log('New Post:', responseData.response.candidates[0].content.parts[0].text,null,2);
      reportJsonData = JSON.parse(responseData.response.candidates[0].content.parts[0].text,null,2)
      setIsProcessing(false)
      setReport(reportJsonData)
      // Show success toast or perform additional actions
      if(livestockArray.includes(userinput))   {
        router.push('/reports')
      }else if(cropArray.includes(userinput)){
        router.push('/cropreport')
      }

    } catch (error) {
      console.error('Error:', JSON.stringify(error));
      console.error('Error:', error);
      setIsProcessing(false)
      
      // Show error toast or perform additional actions
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
      // console.log(result.assets);
    }
  };
  const sendBase64ToBackend = async (base64String) => {
    try {
      const response = await fetch('http://192.168.125.188:8000/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: base64String,
          // You can include other data here if needed
          filename: 'image.jpg',
          contentType: 'image/jpeg',
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Server response:', result);
      return result;
    } catch (error) {
      console.error('Error sending image to backend:', error);
      throw error;
    }
  };
  const usingBase64uploads = async () => {
    try {
      // const uri = media.uri;
      // const base64String = await imageToBase64(uri);
      const result = await sendBase64ToBackend(media.base64);
      console.log('Upload successful:', result);
    } catch (error) {
      console.error('Error in image upload process:', error);
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

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleSubmit}
        disabled={isProcessing}
        >
        <LinearGradient
            colors={["#A8E063", "#56AB2F"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.button}
        >
           {!isProcessing ? (<Text style={styles.buttonText}>Generate Report</Text>)
            : (<ActivityIndicator size="small" color="white" />)
           }
        </LinearGradient>
    </TouchableOpacity>
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
    alignItems: "center",height : 50
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
