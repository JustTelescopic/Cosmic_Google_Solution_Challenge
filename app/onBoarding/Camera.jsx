// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
// import { useState } from 'react';
// import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// export default function Camera() {
//   const [facing, setFacing] = useState('back');
//   const [permission, requestPermission] = useCameraPermissions();

//   if (!permission) {
//     // Camera permissions are still loading.
//     return <View />;
//   }

//   if (!permission.granted) {
//     // Camera permissions are not granted yet.
//     return (
//       <View style={styles.container}>
//         <Text style={styles.message}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="grant permission" />
//       </View>
//     );
//   }

//   function toggleCameraFacing() {
//     setFacing(current => (current === 'back' ? 'front' : 'back'));
//   }

//   return (
//     <View style={styles.container}>
//       <CameraView style={styles.camera} facing={facing}>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
//             <Text style={styles.text}>Flip Camera</Text>
//           </TouchableOpacity>
//         </View>
//       </CameraView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   message: {
//     textAlign: 'center',
//     paddingBottom: 10,
//   },
//   camera: {
//     flex: 1,
//   },
//   buttonContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'transparent',
//     margin: 64,
//   },
//   button: {
//     flex: 1,
//     alignSelf: 'flex-end',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HandleCamera() {
  const [media, setMedia] = useState(null);

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

  const logMediaData = () => {
    if (media) {
      console.log("URI:", media.uri);
      console.log("Base64:", media.base64 ? media.base64.slice(0, 100) + '...' : 'N/A'); // Log first 100 chars
      console.log("EXIF Data:", media.exif);
      console.log("Width:", media.width);
      console.log("Height:", media.height);
      console.log("Type:", media.type);
      console.log("Duration:", media.duration); // Applicable if it's a video
    } else {
      console.log("No media selected");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Capture Image or Video" onPress={pickMedia} />
      {media && <Image source={{ uri: media.uri }} style={styles.image} />}
      <Button title="Log Media Data" onPress={logMediaData} style={styles.logButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  logButton: {
    marginTop: 20,
  },
});
