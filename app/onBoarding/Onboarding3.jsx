import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,SafeAreaViewBase, ViewBase }from 'react-native';
import DotIndicator from '../../components/onBoarding/DotIndicator';
import NextButton from '../../components/onBoarding/nextButton';
import { Link } from 'expo-router';
import { router } from 'expo-router';




export default function Onboarding3() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/onboarding-assets/vegis2.png')} // Use your local image or an online source
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <View style={styles.curve}/>
        <Text style={styles.title}>Receive Timely Alerts & Expert Advice</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        </Text>
       <DotIndicator activeIndex={2} totalDots={4}/>
       {/* <Link  href="/onBoarding/Onboarding4">HI there
       </Link> */}
       <TouchableOpacity onPress={() => { router.push('/onBoarding/Onboarding4')}}>
          <Text>hi there buddy  </Text>
       </TouchableOpacity>
          <NextButton title="Next" onPress={() => { router.push('/onBoarding/Onboarding4')}} accessibilityLabel="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:0,
    marginVertical: 0,
    justifyContent: 'center',
    alignItems : 'center'
  },
  image: {
    width: '100%',
    height: '55%',
    resizeMode: 'cover',
    // position: 'absolute',
  },
  textContainer: {
    flex: 1,
    width : '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    position : 'relative'
  },
  curve : {
    position : 'absolute',
    backgroundColor : 'red',
    top : -50,
    left : -300, 
    width: 1000,           // Diameter of the circle
    height: 1000, 
    borderRadius: 500,    // Half of the width/height
    backgroundColor: 'white', // Circle color
    justifyContent: 'center', // Center content inside the circle (optional)
    alignItems: 'center', 
},
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop : -50,
    marginBottom : 30
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
    marginHorizontal: 4,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
