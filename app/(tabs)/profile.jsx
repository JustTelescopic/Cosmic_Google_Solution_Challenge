import { router } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

const ProfilePage = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Profile Section */}
        <View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={styles.heading}>Your Profile</Text>
            <View style={styles.underline} />
          </View>

          <View style={{ alignItems: "center" }}>
            <View style={styles.card}>
              <View style={styles.imageWrapper}>
                <ImageBackground
                  source={require("../../assets/profile/profilebanner.png")}
                  style={styles.backgroundImage}
                  imageStyle={styles.zoomedImage}
                />
              </View>
              <View style={styles.cardContent}>
                <View style={styles.profileHeader}>
                  <Feather name="user" size={24} color="#5BA93A" />
                  <Text style={styles.heading1}>Shyamrao Patil</Text>
                </View>
                <View style={styles.underline1} />
                <Text style={styles.introText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer ac lorem nec eros interdum laoreet. Curabitur in nibh
                  sit amet nisl tincidunt fermentum.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Profile Insights Section */}
        
        <View style={styles.insightsContainer}>
          <Text style={styles.heading2}>Profile Insights</Text>
          <View style={styles.underline2} />

          {/* No of AI Generated Reports */}
          <View style={styles.insightSectionWrapper}>
            <View style={styles.insightBackgroundAI}>
              <View style={styles.insightSection}>
                <Text style={styles.insightTitle}>No. of AI generated reports</Text>
                <Text style={styles.insightData}>08</Text>
              </View>

              {/* AI Reports */}
              <View style={styles.reportCard}>
                <Text style={styles.reportTitle}>Report B12 - Livestock (FMD)</Text>
                <Text style={styles.reportDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                  nonumy Lorem ipsum dolor sit amet, consectetur.
                </Text>
                <Text style={styles.seeMore}>See More</Text>
              </View>

              <View style={styles.reportCard}>
                <Text style={styles.reportTitle}>Report B04 - Crop (Cherry Blossom)</Text>
                <Text style={styles.reportDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                  nonumy Lorem ipsum dolor sit amet, consectetur.
                </Text>
                <Text style={styles.seeMore}>See More</Text>
              </View>
            </View>
          </View>

          <View style={styles.underline3} />
          
          {/* No of Satisfactory Results */}
          <View style={styles.insightSectionWrapper}>
            <View style={styles.insightBackgroundSatisfactory}>
              <View style={styles.insightSection}>
                <Text style={styles.insightTitle}>No. of satisfactory results</Text>
                <Text style={styles.insightData}>06/08</Text>
              </View>

              {/* Satisfactory Reports */}
              <View style={styles.reportCard}>
                <Text style={styles.reportTitle}>
                  Solved FMD Spread in livestock
                </Text>
                <Text style={styles.reportDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                  nonumy Lorem ipsum dolor sit amet.
                </Text>
                <Text style={styles.seeMore}>See More</Text>
              </View>

              <View style={styles.reportCard}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.reportTitle}>
                    Minimized Potato Late Blight Effect
                  </Text>
                  {/* <Feather name="check-circle" size={18} color="#5BA93A" /> */}
                </View>
                <Text style={styles.reportDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
                  nonumy Lorem ipsum dolor sit amet.
                </Text>
                <Text style={styles.seeMore}>See More</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  heading1: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10, // Adjust spacing for the icon
  },
  heading2: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 0,
    textAlign: 'center',
  },
  underline: {
    width: "40%",
    height: 2,
    backgroundColor: "#5BA93A",
    marginTop: 4,
  },
  underline1: {
    width: "52%",
    height: 2,
    backgroundColor: "#5BA93A",
    marginTop: -5,
  },
  underline2: {
    width: "40%",
    height: 2,
    backgroundColor: "#5BA93A",
    marginTop: -5,
    marginBottom: 40,
    alignSelf: 'center',
  },
  underline3: {
    width: "50%",
    alignSelf: "center",
    height: 2,
    backgroundColor: "#5BA93A",
    marginTop: 10,
    marginBottom: 40,
  },
  card: {
    height: 270, // Adjusted for proper spacing between image and text
    width: "100%", // Make card width responsive
    borderRadius: 0,
    marginTop: 40,
    backgroundColor: "#fff", // Background for card
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow direction
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 3.84, // Shadow blur
    elevation: 5, // Shadow for Android
    overflow: "hidden", // To avoid content spilling outside
  },
  backgroundImage: {
    width: "100%",
    height: 150, // Adjust height for image section
    resizeMode: "cover",
  },
  cardContent: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  introText: {
    marginTop: 10, // Space between the underline and intro text
    fontSize: 14,
    color: "#666", // Subtle color for the introduction
    lineHeight: 20, // Line height for better readability
  },
  imageWrapper: {
    flex: 1,
    width: "100%",
    borderRadius: 0,
    overflow: "hidden",
    marginBottom: -50,
  },
  zoomedImage: {
    transform: [
      { scale: 1.3 }, // Zoom in the image
      { translateX: -20 }, // Move the image to the left
      { translateY: -10 }, // Move the image upwards
    ],
  },
  insightsContainer: {
    paddingHorizontal: 30,
    marginTop: 30,
  },
  insightSectionWrapper: {
    marginBottom: 20, // Space between sections
  },
  insightBackgroundAI: {
    backgroundColor: "#F4F3F0", // Ultra-light green for AI Reports
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  insightBackgroundSatisfactory: {
    backgroundColor: "#F0F9F0", // Ultra-light green for Satisfactory Results
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  insightSection: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: "space-between"
  },
  insightTitle: {
    fontSize: 15,
    fontWeight: "500",
  },
  insightData: {
    fontSize: 14,
    fontWeight: "bold",
  },
  reportCard: {
    backgroundColor: "#F5F9F6", // Light background for each card
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  reportTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  reportDescription: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },
  seeMore: {
    fontSize: 12,
    color: "#5BA93A",
    fontWeight: "bold",
  },
});


// import { router } from "expo-router";
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   ImageBackground,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Feather from "@expo/vector-icons/Feather";

// const ProfilePage = () => {
//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={{ paddingBottom: 100 }}
//       >
//         {/* Profile Section */}
//         <View>
//           <View style={{ alignItems: "center", marginTop: 20 }}>
//             <Text style={styles.heading}>Your Profile</Text>
//             <View style={styles.underline} />
//           </View>

//           <View style={{ alignItems: "center" }}>
//             <View style={styles.card}>
//               <View style={styles.imageWrapper}>
//                 <ImageBackground
//                   source={require("../../assets/profile/profilebanner.png")}
//                   style={styles.backgroundImage}
//                   imageStyle={styles.zoomedImage}
//                 />
//               </View>
//               <View style={styles.cardContent}>
//                 <View style={styles.profileHeader}>
//                   <Feather name="user" size={24} color="#5BA93A" />
//                   <Text style={styles.heading1}>Shyamrao Patil</Text>
//                 </View>
//                 <View style={styles.underline1} />
//                 <Text style={styles.introText}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   Integer ac lorem nec eros interdum laoreet. Curabitur in nibh
//                   sit amet nisl tincidunt fermentum.
//                 </Text>
//               </View>
//             </View>
//           </View>
//         </View>

//         {/* Profile Insights Section */}
        
//         <View style={styles.insightsContainer}>
//           <Text style={styles.heading2}>Profile Insights</Text>
//           <View style={styles.underline2} />

//           {/* No of AI Generated Reports */}
//           <View style={styles.insightSectionWrapper}>
//             <View style={styles.insightBackgroundAI}>
//               <View style={styles.insightSection}>
//                 <Text style={styles.insightTitle}>No. of AI generated reports</Text>
//                 <Text style={styles.insightData}>08</Text>
//               </View>

//               {/* AI Reports */}
//               <View style={styles.reportCard}>
//                 <Text style={styles.reportTitle}>Report B12 - Livestock (FMD)</Text>
//                 <Text style={styles.reportDescription}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//                   nonumy Lorem ipsum dolor sit amet, consectetur.
//                 </Text>
//                 <Text style={styles.seeMore}>See More</Text>
//               </View>

//               <View style={styles.reportCard}>
//                 <Text style={styles.reportTitle}>Report B04 - Crop (Cherry Blossom)</Text>
//                 <Text style={styles.reportDescription}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//                   nonumy Lorem ipsum dolor sit amet, consectetur.
//                 </Text>
//                 <Text style={styles.seeMore}>See More</Text>
//               </View>
//             </View>
//           </View>

//           <View style={styles.underline3} />
          
//           {/* No of Satisfactory Results */}
//           <View style={styles.insightSectionWrapper}>
//             <View style={styles.insightBackgroundSatisfactory}>
//               <View style={styles.insightSection}>
//                 <Text style={styles.insightTitle}>No. of satisfactory results</Text>
//                 <Text style={styles.insightData}>06/08</Text>
//               </View>

//               {/* Satisfactory Reports */}
//               <View style={styles.reportCard}>
//                 <Text style={styles.reportTitle}>
//                   Solved FMD Spread in livestock
//                 </Text>
//                 <Text style={styles.reportDescription}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//                   nonumy Lorem ipsum dolor sit amet.
//                 </Text>
//                 <Text style={styles.seeMore}>See More</Text>
//               </View>

//               <View style={styles.reportCard}>
//                 <View style={{ flexDirection: "row", alignItems: "center" }}>
//                   <Text style={styles.reportTitle}>
//                     Minimized Potato Late Blight Effect
//                   </Text>
//                   {/* <Feather name="check-circle" size={18} color="#5BA93A" /> */}
//                 </View>
//                 <Text style={styles.reportDescription}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam
//                   nonumy Lorem ipsum dolor sit amet.
//                 </Text>
//                 <Text style={styles.seeMore}>See More</Text>
//               </View>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default ProfilePage;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   heading: {
//     fontSize: 25,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   heading1: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginBottom: 10,
//     marginTop: 10,
//     marginLeft: 10, // Adjust spacing for the icon
//   },
//   heading2: {
//     fontSize: 20,
//     fontWeight: "600",
//     marginBottom: 10,
//     marginTop: 10,
//     paddingLeft: 0,
//     textAlign: 'center',
//   },
//   underline: {
//     width: "40%",
//     height: 2,
//     backgroundColor: "#5BA93A",
//     marginTop: 4,
//   },
//   underline1: {
//     width: "52%",
//     height: 2,
//     backgroundColor: "#5BA93A",
//     marginTop: -5,
//   },
//   underline2: {
//     width: "40%",
//     height: 2,
//     backgroundColor: "#5BA93A",
//     marginTop: -5,
//     marginBottom: 40,
//     alignSelf: 'center',
//   },
//   underline3: {
//     width: "50%",
//     alignSelf: "center",
//     height: 2,
//     backgroundColor: "#5BA93A",
//     marginTop: 10,
//     marginBottom: 40,
//   },
//   card: {
//     height: 270, // Adjusted for proper spacing between image and text
//     width: "100%", // Make card width responsive
//     borderRadius: 0,
//     marginTop: 40,
//     backgroundColor: "#fff", // Background for card
//     shadowColor: "#000", // Shadow color
//     shadowOffset: { width: 0, height: 2 }, // Shadow direction
//     shadowOpacity: 0.25, // Shadow opacity
//     shadowRadius: 3.84, // Shadow blur
//     elevation: 5, // Shadow for Android
//     overflow: "hidden", // To avoid content spilling outside
//   },
//   backgroundImage: {
//     width: "100%",
//     height: 150, // Adjust height for image section
//     resizeMode: "cover",
//   },
//   cardContent: {
//     paddingLeft: 20,
//     paddingRight: 20,
//     paddingTop: 60,
//     paddingBottom: 20,
//   },
//   profileHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   introText: {
//     marginTop: 10, // Space between the underline and intro text
//     fontSize: 14,
//     color: "#666", // Subtle color for the introduction
//     lineHeight: 20, // Line height for better readability
//   },
//   imageWrapper: {
//     flex: 1,
//     width: "100%",
//     borderRadius: 0,
//     overflow: "hidden",
//     marginBottom: -50,
//   },
//   zoomedImage: {
//     transform: [
//       { scale: 1.3 }, // Zoom in the image
//       { translateX: -20 }, // Move the image to the left
//       { translateY: -10 }, // Move the image upwards
//     ],
//   },
//   insightsContainer: {
//     paddingHorizontal: 30,
//     marginTop: 30,
//   },
//   insightSectionWrapper: {
//     marginBottom: 20, // Space between sections
//   },
//   insightBackgroundAI: {
//     backgroundColor: "#F4F3F0", // Ultra-light green for AI Reports
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//   },
//   insightBackgroundSatisfactory: {
//     backgroundColor: "#F0F9F0", // Ultra-light green for Satisfactory Results
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     paddingVertical: 15,
//   },
//   insightSection: {
//     flexDirection: 'row',
//     marginVertical: 10,
//     justifyContent: "space-between"
//   },
//   insightTitle: {
//     fontSize: 15,
//     fontWeight: "500",
//   },
//   insightData: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   reportCard: {
//     backgroundColor: "#F5F9F6", // Light background for each card
//     padding: 15,
//     borderRadius: 10,
//     marginVertical: 10,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3.84,
//     elevation: 2,
//   },
//   reportTitle: {
//     fontSize: 14,
//     fontWeight: "600",
//     marginBottom: 5,
//   },
//   reportDescription: {
//     fontSize: 12,
//     color: "#666",
//     marginBottom: 10,
//   },
//   seeMore: {
//     fontSize: 12,
//     color: "#5BA93A",
//     fontWeight: "bold",
//   },
// });


