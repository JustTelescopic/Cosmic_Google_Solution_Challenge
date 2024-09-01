import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="onBoarding1" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding3" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding4" options={{ headerShown: false }} />
      <Stack.Screen name="onBoarding5" options={{ headerShown: false }} />
    </Stack>
  );
}
