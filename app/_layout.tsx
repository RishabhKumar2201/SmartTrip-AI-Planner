import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { CreateTripProvider } from "../context/CreateTripProvider";
export default function RootLayout() {
  useFonts({
    "outfit": require("./../assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <CreateTripProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      /> */}
        <Stack.Screen
          name="(tabs)"
          // options={{
          //   headerShown: false,
          // }}
        />
      </Stack>
    </CreateTripProvider>
  );
}
