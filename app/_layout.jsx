import { Stack } from "expo-router";
import {  ReportProvider } from "../context";

export default function Layout(){
  return(
    <ReportProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="onBoarding" options={{ headerShown: false }} />
        <Stack.Screen name="VeterinarianHomePage" options={{ headerShown: false }} />
      </Stack>
    </ReportProvider>
  )
}
