import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function FlightInfo({ flightData }) {
  //     booking_url
  // "https://www.spicejet.com/"
  // (string)

  // details
  // "Roundtrip flight from Mumbai (BOM) to Delhi (DEL) on SpiceJet"
  // (string)

  // price
  // "₹3,500"
  return (
    <View
      style={{
        marginTop: 20,
        // backgroundColor: "#D3D3D3",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        padding: 10,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 20,
          }}
        >
          ✈️ Flights
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#000",
            padding: 5,
            width: 100,
            marginTop: 7,
            borderRadius: 7,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              textAlign: "center",
              color: "#fff",
              fontSize: 17,
            }}
          >
            Book Here
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
          marginTop: 7,
        }}
      >
        Airline: Delta
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 17,
        }}
      >
        Price: {flightData.price}
      </Text>
    </View>
  );
}
