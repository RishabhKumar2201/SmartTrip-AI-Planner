import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { getPhotoRef } from "../../services/GooglePlaceApi";
export default function PlaceCard({ data }) {
  const [photoRef, setPhotoRef] = useState(null);

  useEffect(() => {
    const GetGooglePhotoRef = async () => {
      const result = await getPhotoRef(data.placeName);
      if (result?.results[0]?.photos?.length > 0) {
        setPhotoRef(result.results[0].photos[0].photo_reference);
      }
    };

    GetGooglePhotoRef();
  }, [data.placeName]);
  return (
    <View
      style={{
        // borderWidth: 1,
        backgroundColor: "#EFE9FF",
        // padding: 10,
        borderRadius: 15,
        // borderColor: "gray",
        marginTop: 10,
      }}
    >
      {photoRef && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 15,
            objectFit: "cover",
          }}
        />
      )}
      <View style={{ marginBottom: 5, padding: 10 }}>
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
            {data?.placeName}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 17,
              marginTop: 5,
            }}
          >
            🕰️ {data?.timeToVisit}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            color: "gray",
          }}
        >
          {data?.placeDetails}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 17,
                marginTop: 5,
              }}
            >
              🎫 Ticket Price: {data?.ticketPricing}
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 17,
                marginTop: 5,
              }}
            >
              ⌛ Time To Travel: {data?.timeToTravel}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#000",
              borderRadius: 7,
            }}
          >
            <Fontisto name="navigate" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
