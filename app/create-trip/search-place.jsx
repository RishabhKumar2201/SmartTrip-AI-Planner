import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useTrip } from "../../context/CreateTripProvider";

export default function SearchPlace() {
  const router = useRouter();
  const navigation = useNavigation();
  const { tripData, setTripData } = useTrip();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Search",
    });
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 65,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search place"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          // console.log(data.description);
          // console.log(details?.geometry.location);
          // console.log(details?.photos[0]?.photo_reference);
          // console.log(details?.url);
          setTripData({
            locationInfo: {
              name: data.description,
              coordinates: details?.geometry.location,
              photoRef: details?.photos[0]?.photo_reference,
              url: details?.url,
            },
          });

          router.push("/create-trip/select-traveler");
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        fetchDetails={true} // This fetches the full details of the place
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(0,0,0,0)",
            marginTop: 50,
            borderWidth: 1,
            borderRadius: 5,
          },
          textInput: {
            height: 38,
            color: "#5d5d5d",
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: "#1faadb",
          },
        }}
      />
    </View>
  );
}
