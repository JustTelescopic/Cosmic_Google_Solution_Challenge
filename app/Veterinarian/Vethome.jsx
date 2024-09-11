
import React, { useState } from "react";
import { 
  View, 
  Text, 
  ScrollView, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  LayoutAnimation, 
  UIManager, 
  Animated, 
  Platform 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";


// Enable LayoutAnimation for Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const VeterinarianHomePage = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [expandedReportId, setExpandedReportId] = useState(null);
  const [tabAnimation] = useState(new Animated.Value(0)); // Animated value for bottom tab animation

  const allReports = [
    { id: 1, title: "Report B12 - Livestock (FMD)", description: "Details about livestock disease FMD ", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
    { id: 2, title: "Report B04 - Crops (Blight)", description: "Blight affecting multiple crops", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
    { id: 3, title: "Report B04 - Crops (Blight)", description: "Blight affecting multiple crops", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
  ];

  const unreadReports = [
    { id: 3, title: "Report C21 - Poultry (Avian Influenza)", description: "Avian flu spreading across farms", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
  ];

  const readReports = [
    { id: 4, title: "Report D10 - Livestock (Fever)", description: "Fever observed in multiple animals", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
    { id: 5, title: "Report E02 - Crops (Pest Attack)", description: "Pest attacks on crops reported", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
  ];

  const getReports = () => {
    switch (selectedTab) {
      case "Unread":
        return unreadReports;
      case "Read":
        return readReports;
      default:
        return allReports;
    }
  };

  const toggleExpandReport = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Smooth animation
    setExpandedReportId(expandedReportId === id ? null : id);
  };

  const onTabPress = (tab) => {
    Animated.timing(tabAnimation, {
      toValue: tab === "Home" ? 0 : tab === "Alerts" ? 1 : 2,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setSelectedTab(tab);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Farmer Reports Section */}
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>Farmer Reports</Text>
          <View style={styles.underline} />

          {/* Filter Options */}
          <View style={styles.filterWrapper}>
            <TouchableOpacity onPress={() => setSelectedTab("All")}>
              <Text style={selectedTab === "All" ? styles.filterTextActive : styles.filterText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab("Unread")}>
              <Text style={selectedTab === "Unread" ? styles.filterTextActive : styles.filterText}>Unread</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab("Read")}>
              <Text style={selectedTab === "Read" ? styles.filterTextActive : styles.filterText}>Read</Text>
            </TouchableOpacity>
          </View>

          {/* Report Cards */}
          {/* Report Cards */}
        {getReports().map((report, index) => (
        <TouchableOpacity
        key={report.id}
        onPress={() => toggleExpandReport(report.id)}
        activeOpacity={0.8} // Adjust this value to control opacity on press
      >
        <View style={styles.reportCard}>
          <View style={styles.reportTitleWrapper}>
            <Text style={styles.reportTitle}>{report.title}</Text>
            {index === 0 && (
              <FontAwesome name="check" size={30} color="#5BA93A" style={styles.iconMargin} />
            )}
            {index === 1 && (
              <FontAwesome name="info-circle" size={30} color="#FFA500" style={styles.iconMargin} />
            )}
          </View>
          <Text style={styles.reportDescription}>{report.description}</Text>
          {expandedReportId === report.id && (
            <Text style={styles.reportDetails}>{report.details}</Text>
          )}
          <View style={styles.iconRow}>
            <Feather name="download" size={20} color="#5BA93A" />
            <Feather name="message-circle" size={20} color="#5BA93A" />
            <Feather name="tool" size={20} color="#5BA93A" />
          </View>
        </View>
      </TouchableOpacity>
        ))}
        </View>

        {/* Top Headlines Section */}
        <View style={styles.sectionWrapper}>
          <Text style={styles.heading}>Top Headlines</Text>
          <View style={styles.underline1} />

          {/* Full Width Image */}
          <View style={styles.fullWidthHeadlineCard}>
            <ImageBackground
              source={require("../../assets/vet/vet1.png")}
              style={styles.fullWidthImage}
              imageStyle={styles.imageStyle}
            >
              <Text style={styles.headlineTitle}>Progress Into Malignant Catarrhal Fever In Cattle</Text>
              <Text style={styles.headlineLink}>Learn more</Text>
            </ImageBackground>
          </View>

          {/* Side by Side Images */}
          <View style={styles.sideBySideContainer}>
            <View style={styles.halfWidthHeadlineCard}>
              <ImageBackground
                source={require("../../assets/vet/vet2.png")}
                style={styles.halfWidthImage}
                imageStyle={styles.imageStyle}
              >
                <Text style={styles.headlineTitle}>A Pandemic On Animals We Eat</Text>
                <Text style={styles.headlineLink}>Learn more</Text>
              </ImageBackground>
            </View>
            <View style={styles.halfWidthHeadlineCard}>
              <ImageBackground
                source={require("../../assets/vet/vet3.png")}
                style={styles.halfWidthImage}
                imageStyle={styles.imageStyle}
              >
                <Text style={styles.headlineTitle}>Emerging Diseases In Dogs</Text>
                <Text style={styles.headlineLink}>Learn more</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default VeterinarianHomePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop:5,
    padding: 30,
    backgroundColor: "#FFFFF",
  },
  sectionWrapper: {
    marginBottom: 24,
  },
  heading: {
    alignSelf: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    
  },
  underline: {
    alignSelf: "center",
    height: 3,
    backgroundColor: "#5BA93A",
    width: "60%",
    marginBottom: 16,
    marginTop: 4,
  },
  underline1: {
    alignSelf: "center",
    height: 3,
    backgroundColor: "#5BA93A",
    width: "60%",
    marginBottom: 36,
    marginTop: 4,
  },
   filterWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    marginTop: 20,
  },
  filterText: {
    color: "#999",
    fontWeight: "600",
    fontSize: 18,
  },
  filterTextActive: {
    color: "#5BA93A",
    fontWeight: "600",
    fontSize: 18,
    // textDecorationLine: "underline" ,
    borderBottomWidth: 2,
    borderBottomColor: "#5BA93A",
    paddingBottom: 5,
  },
  reportCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  reportTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    borderBottomWidth: 2,
    borderBottomColor: "#5BA93A",
    paddingBottom: 5,
  },
  reportDescription: {
    fontSize: 14,
    color: "#333333",
    marginTop: 4,
    marginBottom: 8,
  },
  reportDetails: {
    fontSize: 14,
    color: "#666666",
    marginTop: 8,
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  fullWidthHeadlineCard: {
    height: 200,
    marginBottom: 2,
    borderRadius: 5,
    overflow: "hidden",
  },
  fullWidthImage: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  imageStyle: {
    borderRadius: 5,
  },
  headlineTitle: {
    fontSize: 16,
    fontWeight: "semi-bold",
    color: "#FFFFFF",
  },
  headlineLink: {
    marginTop: 8,
    fontSize: 14,
    color: "#FFFFFF",
    textDecorationLine: "underline",
  },
  sideBySideContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    // padding:2,
  },
  halfWidthHeadlineCard: {
    width: "49.5%",
    height: 160,
    borderRadius: 5,
    overflow: "hidden",
  },
  halfWidthImage: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E6E6E6",
  },
  reportTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconMargin: {
    position: 'absolute',
    marginLeft: 285,
    marginRight: 10,
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#5BA93A",
    marginTop: 4,
  },
});

// import React, { useState } from "react";
// import { 
//   View, 
//   Text, 
//   ScrollView, 
//   StyleSheet, 
//   TouchableOpacity, 
//   ImageBackground, 
//   LayoutAnimation, 
//   UIManager, 
//   Animated, 
//   Platform 
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Feather from "@expo/vector-icons/Feather";
// import FontAwesome from "@expo/vector-icons/FontAwesome";


// // Enable LayoutAnimation for Android
// if (Platform.OS === 'android') {
//   if (UIManager.setLayoutAnimationEnabledExperimental) {
//     UIManager.setLayoutAnimationEnabledExperimental(true);
//   }
// }

// const VeterinarianHomePage = () => {
//   const [selectedTab, setSelectedTab] = useState("All");
//   const [expandedReportId, setExpandedReportId] = useState(null);
//   const [tabAnimation] = useState(new Animated.Value(0)); // Animated value for bottom tab animation

//   const allReports = [
//     { id: 1, title: "Report B12 - Livestock (FMD)", description: "Details about livestock disease FMD ", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
//     { id: 2, title: "Report B04 - Crops (Blight)", description: "Blight affecting multiple crops", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
//     { id: 3, title: "Report B04 - Crops (Blight)", description: "Blight affecting multiple crops", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
//   ];

//   const unreadReports = [
//     { id: 3, title: "Report C21 - Poultry (Avian Influenza)", description: "Avian flu spreading across farms", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
//   ];

//   const readReports = [
//     { id: 4, title: "Report D10 - Livestock (Fever)", description: "Fever observed in multiple animals", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
//     { id: 5, title: "Report E02 - Crops (Pest Attack)", description: "Pest attacks on crops reported", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem nec eros interdum laoreet. Curabitur in nibhsit amet nisl tincidunt fermentum." },
//   ];

//   const getReports = () => {
//     switch (selectedTab) {
//       case "Unread":
//         return unreadReports;
//       case "Read":
//         return readReports;
//       default:
//         return allReports;
//     }
//   };

//   const toggleExpandReport = (id) => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); // Smooth animation
//     setExpandedReportId(expandedReportId === id ? null : id);
//   };

//   const onTabPress = (tab) => {
//     Animated.timing(tabAnimation, {
//       toValue: tab === "Home" ? 0 : tab === "Alerts" ? 1 : 2,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//     setSelectedTab(tab);
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
//         {/* Farmer Reports Section */}
//         <View style={styles.sectionWrapper}>
//           <Text style={styles.heading}>Farmer Reports</Text>
//           <View style={styles.underline} />

//           {/* Filter Options */}
//           <View style={styles.filterWrapper}>
//             <TouchableOpacity onPress={() => setSelectedTab("All")}>
//               <Text style={selectedTab === "All" ? styles.filterTextActive : styles.filterText}>All</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => setSelectedTab("Unread")}>
//               <Text style={selectedTab === "Unread" ? styles.filterTextActive : styles.filterText}>Unread</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => setSelectedTab("Read")}>
//               <Text style={selectedTab === "Read" ? styles.filterTextActive : styles.filterText}>Read</Text>
//             </TouchableOpacity>
//           </View>

//           {/* Report Cards */}
//           {/* Report Cards */}
//         {getReports().map((report, index) => (
//         <TouchableOpacity key={report.id} onPress={() => toggleExpandReport(report.id)}>
//             <View style={styles.reportCard}>
//             <View style={styles.reportTitleWrapper}>
//                 <Text style={styles.reportTitle}>{report.title}</Text>
//                 {index === 0 && (
//                 <FontAwesome name="check" size={20} color="#5BA93A" style={styles.iconMargin} />
//                 )}
//                 {index === 1 && (
//                 <FontAwesome name="info-circle" size={20} color="#FFA500" style={styles.iconMargin} />
//                 )}
//             </View>
//             <Text style={styles.reportDescription}>{report.description}</Text>
//             {expandedReportId === report.id && (
//                 <Text style={styles.reportDetails}>{report.details}</Text>
//             )}
//             <View style={styles.iconRow}>
//                 <Feather name="download" size={20} color="#5BA93A" />
//                 <Feather name="message-circle" size={20} color="#5BA93A" />
//                 <Feather name="tool" size={20} color="#5BA93A" />
//             </View>
//             </View>
//         </TouchableOpacity>
//         ))}
//         </View>

//         {/* Top Headlines Section */}
//         <View style={styles.sectionWrapper}>
//           <Text style={styles.heading}>Top Headlines</Text>
//           <View style={styles.underline1} />

//           {/* Full Width Image */}
//           <View style={styles.fullWidthHeadlineCard}>
//             <ImageBackground
//               source={require("../../assets/vet/vet1.png")}
//               style={styles.fullWidthImage}
//               imageStyle={styles.imageStyle}
//             >
//               <Text style={styles.headlineTitle}>Progress Into Malignant Catarrhal Fever In Cattle</Text>
//               <Text style={styles.headlineLink}>Learn more</Text>
//             </ImageBackground>
//           </View>

//           {/* Side by Side Images */}
//           <View style={styles.sideBySideContainer}>
//             <View style={styles.halfWidthHeadlineCard}>
//               <ImageBackground
//                 source={require("../../assets/vet/vet2.png")}
//                 style={styles.halfWidthImage}
//                 imageStyle={styles.imageStyle}
//               >
//                 <Text style={styles.headlineTitle}>A Pandemic On Animals We Eat</Text>
//                 <Text style={styles.headlineLink}>Learn more</Text>
//               </ImageBackground>
//             </View>
//             <View style={styles.halfWidthHeadlineCard}>
//               <ImageBackground
//                 source={require("../../assets/vet/vet3.png")}
//                 style={styles.halfWidthImage}
//                 imageStyle={styles.imageStyle}
//               >
//                 <Text style={styles.headlineTitle}>Emerging Diseases In Dogs</Text>
//                 <Text style={styles.headlineLink}>Learn more</Text>
//               </ImageBackground>
//             </View>
//           </View>
//         </View>
//       </ScrollView>

//       {/* Bottom Navigation */}
//       {/* <View style={styles.bottomNav}>
//         <TouchableOpacity style={styles.navItem} onPress={() => onTabPress("Home")}>
//           <Animated.View style={[styles.navItem, { opacity: tabAnimation.interpolate({ inputRange: [0, 1, 2], outputRange: [1, 0.5, 0.5] }) }]}>
//             <Feather name="home" size={24} color="#5BA93A" />
//             <Text style={styles.navText}>Home</Text>
//           </Animated.View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => onTabPress("Alerts")}>
//           <Animated.View style={[styles.navItem, { opacity: tabAnimation.interpolate({ inputRange: [0, 1, 2], outputRange: [0.5, 1, 0.5] }) }]}>
//             <Feather name="bell" size={24} color="#5BA93A" />
//             <Text style={styles.navText}>Alerts</Text>
//           </Animated.View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.navItem} onPress={() => onTabPress("Profile")}>
//           <Animated.View style={[styles.navItem, { opacity: tabAnimation.interpolate({ inputRange: [0, 1, 2], outputRange: [0.5, 0.5, 1] }) }]}>
//             <Feather name="user" size={24} color="#5BA93A" />
//             <Text style={styles.navText}>Profile</Text>
//           </Animated.View>
//         </TouchableOpacity>
//       </View> */}
//     </SafeAreaView>
//   );
// };


// export default VeterinarianHomePage;

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     padding: 30,
//     backgroundColor: "#FFFFF",
//   },
//   sectionWrapper: {
//     marginBottom: 24,
//   },
//   heading: {
//     alignSelf: "center",
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333333",
    
//   },
//   underline: {
//     alignSelf: "center",
//     height: 3,
//     backgroundColor: "#5BA93A",
//     width: "60%",
//     marginBottom: 16,
//     marginTop: 4,
//   },
//   underline1: {
//     alignSelf: "center",
//     height: 3,
//     backgroundColor: "#5BA93A",
//     width: "60%",
//     marginBottom: 36,
//     marginTop: 4,
//   },
//    filterWrapper: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginBottom: 20,
//     marginTop: 20,
//   },
//   filterText: {
//     color: "#999",
//     fontWeight: "600",
//     fontSize: 18,
//   },
//   filterTextActive: {
//     color: "#5BA93A",
//     fontWeight: "600",
//     fontSize: 18,
//     // textDecorationLine: "underline" ,
//     borderBottomWidth: 2,
//     borderBottomColor: "#5BA93A",
//     paddingBottom: 5,
//   },
//   reportCard: {
//     backgroundColor: "#FFFFFF",
//     padding: 20,
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   reportTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "#333333",
//     borderBottomWidth: 2,
//     borderBottomColor: "#5BA93A",
//     paddingBottom: 5,
//   },
//   reportDescription: {
//     fontSize: 14,
//     color: "#333333",
//     marginTop: 4,
//     marginBottom: 8,
//   },
//   reportDetails: {
//     fontSize: 14,
//     color: "#666666",
//     marginTop: 8,
//   },
//   iconRow: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 16,
//   },
//   fullWidthHeadlineCard: {
//     height: 200,
//     marginBottom: 2,
//     borderRadius: 5,
//     overflow: "hidden",
//   },
//   fullWidthImage: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//   },
//   imageStyle: {
//     borderRadius: 5,
//   },
//   headlineTitle: {
//     fontSize: 16,
//     fontWeight: "semi-bold",
//     color: "#FFFFFF",
//   },
//   headlineLink: {
//     marginTop: 8,
//     fontSize: 14,
//     color: "#FFFFFF",
//     textDecorationLine: "underline",
//   },
//   sideBySideContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     // padding:2,
//   },
//   halfWidthHeadlineCard: {
//     width: "49.5%",
//     height: 160,
//     borderRadius: 5,
//     overflow: "hidden",
//   },
//   halfWidthImage: {
//     flex: 1,
//     justifyContent: "center",
//     padding: 16,
//   },
//   bottomNav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     backgroundColor: "#FFFFFF",
//     paddingVertical: 12,
//     borderTopWidth: 1,
//     borderTopColor: "#E6E6E6",
//   },
//   reportTitleWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconMargin: {
//     position: 'absolute',
//     marginLeft: 300,
//     marginRight: 10,
//   },
//   navItem: {
//     alignItems: "center",
//   },
//   navText: {
//     fontSize: 12,
//     color: "#5BA93A",
//     marginTop: 4,
//   },
// });
