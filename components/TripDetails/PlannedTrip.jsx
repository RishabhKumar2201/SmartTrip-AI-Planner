import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import PlaceCard from "../MyTrips/PlaceCard";
export default function PlannedTrip({ details }) {
  return (
    <View
      style={{
        marginTop: 5,
        // backgroundColor: "#D3D3D3",
        // borderWidth: 1,
        // borderColor: "#D3D3D3",
        // padding: 10,
        // borderRadius: 15,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 20,
        }}
      >
        🏕️ PlannedTrip
      </Text>
      {/* 
      "placeName": "Red Fort",
      "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Red_Fort_Delhi.jpg/1280px-Red_Fort_Delhi.jpg",
      "description": "Explore the fort's magnificent architecture and learn about its history.",
      "timeToVisit": "Morning",
      "geoCoordinates": [28.6562, 77.2339],
      "placeDetails": "A UNESCO World Heritage Site, the Red Fort is a historic Mughal-era fort that served as the main residence of the Mughal emperors.",
      "ticketPricing": "₹50 per adult",
      "timeToTravel": "30 minutes" */}

      {Object.entries(details).map(([day, details]) => (
        <View key={day} style={{ marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 17,
            }}
          >
            {day.charAt(0).toUpperCase() + day.slice(1)}
          </Text>
          {details.map((data, index) => (
            <PlaceCard key={index} data={data} />
          ))}
        </View>
      ))}
    </View>
  );
}
