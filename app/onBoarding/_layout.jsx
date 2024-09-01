import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="Onboarding1" options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding3" options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding4" options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding5" options={{ headerShown: false }} />
      <Stack.Screen name="selectrole" options={{ headerShown: false }} />
    </Stack>
  );
}
