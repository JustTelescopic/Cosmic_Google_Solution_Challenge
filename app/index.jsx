import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Page() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const isLoggedIn = true; // Replace this with actual login check logic

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      if (isLoggedIn) {
        router.push('/onBoarding/selectLang');
      } else {
        router.push('/onBoarding/selectLang');
      }
    }
  }, [isMounted, isLoggedIn]);


  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Harshal Patil</Text>
        <Link href={'/home'} style={styles.subtitle}>This is the first page of your app.</Link>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
