import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useTrip } from "../../context/CreateTripProvider";
import Constants from 'expo-constants';

export default function SearchPlace() {

  const GOOGLE_MAPS_API_KEY = Constants.expoConfig.extra.googleApiKey;

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


  const handlePlaceSelect = async (data, details) => {
    // try {
      setTripData({
        locationInfo: {
          name: data.description,
          coordinates: details?.geometry.location,
          photoRef: details?.photos[0]?.photo_reference,
          url: details?.url,
        },
      });

      router.push("/create-trip/select-traveler");
    // } catch (error) {
    //   console.error("Error selecting place:", error);
    // }
  };


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
        onPress={handlePlaceSelect}

        query={{
          // key: "AIzaSyBjMmeepu0rrqUkzCWJmGVPE7ODKKN3rwQ",
          key: GOOGLE_MAPS_API_KEY,
          // key: "AIzaSyAZWv8qvfyDIArGtjkFP-xeaCmErHMwjRI",
          language: "en",
        }}
        // fetchDetails={true} // This fetches the full details of the place
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
