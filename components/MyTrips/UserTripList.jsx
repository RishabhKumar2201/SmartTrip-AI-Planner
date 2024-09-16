import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import UserTripCard from "./UserTripCard";
import { useRouter } from "expo-router";

export default function UserTripList({ userTrips }) {
  const LatestTrip =
    userTrips.length > 0
      ? JSON.parse(userTrips[userTrips.length - 1].tripData)
      : null;
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          marginBottom: 60,
        }}
      >
        {LatestTrip?.locationInfo?.photoRef ? (
          <Image
            source={{
              uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${LatestTrip?.locationInfo?.photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
            }}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        ) : (
          <Image
            source={require("../../assets/images/login.jpg")}
            style={{
              width: "100%",
              height: 240,
              objectFit: "cover",
              borderRadius: 15,
            }}
          />
        )}

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
            {userTrips[userTrips.length - 1]?.tripPlan?.trip?.destination}
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 17,
                color: "gray",
              }}
            >
              {moment(LatestTrip?.startDate).format("DD MMM YYYY")}
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 17,
                color: "gray",
              }}
            >
              {`🗺️  ${LatestTrip?.traveler?.title}`}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: "#000",
              borderRadius: 15,
              marginTop: 10,
            }}
            onPress={() =>
              router.push({
                pathname: "/trip-details",
                params: {
                  trip: JSON.stringify(userTrips[userTrips.length - 1]),
                },
              })
            }
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 15,
                color: "#fff",
                textAlign: "center",
              }}
            >
              See Your Plane
            </Text>
          </TouchableOpacity>
        </View>
        {userTrips.map((trip, index) => {
          return <UserTripCard key={index} trip={trip} />;
        })}
      </View>
    </View>
  );
}
