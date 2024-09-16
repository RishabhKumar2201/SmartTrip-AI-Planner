import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { useRouter } from "expo-router";

export default function UserTripCard({ trip }) {
  const router = useRouter();

  const formatData = (data) => {
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Failed to parse tripData:", e);
      return null;
    }
  };

  const formattedTripData = formatData(trip?.tripData);

  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={() =>
        router.push({
          pathname: "/trip-details",
          params: {
            trip: JSON.stringify(trip),
          },
        })
      }
    >
      {formattedTripData?.locationInfo?.photoRef ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${formattedTripData?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 15,
            objectFit: "cover",
          }}
        />
      ) : (
        <Image
          source={require("../../assets/images/login.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 15,
            objectFit: "cover",
          }}
        />
      )}

      <View
        style={{
          marginLeft: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
            color: "#000",
          }}
        >
          {trip?.tripPlan?.trip?.destination}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: "gray",
            marginTop: 5,
          }}
        >
          {moment(formattedTripData?.startDate).format("DD MMM YYYY")}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: "gray",
            marginTop: 5,
          }}
        >
          Traveling: {formattedTripData?.traveler?.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
