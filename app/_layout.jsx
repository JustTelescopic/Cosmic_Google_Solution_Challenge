// import { Slot } from "expo-router";
// import { StyleSheet, View } from "react-native";

import { Stack } from "expo-router";

// export default function Layout() {
//     return (
//         <View style={styles.container}>
//             <Slot />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//     },
//     onboarding_container: {
//       height: "100%",
//     },
//   });

export default function Layout(){
  return(
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  )
}
