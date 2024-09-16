import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { getPhotoRef } from "../../services/GooglePlaceApi";

export default function HotelCard({ item }) {
  const [photoRef, setPhotoRef] = useState(null);

  useEffect(() => {
    const GetGooglePhotoRef = async () => {
      const result = await getPhotoRef(item.name);
      if (result?.results[0]?.photos?.length > 0) {
        setPhotoRef(result.results[0].photos[0].photo_reference);
      }
    };

    GetGooglePhotoRef();
  }, [item.name]);

  return (
    <View
      style={{
        marginRight: 20,
        width: 180,
      }}
    >
      {photoRef && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoRef}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            width: 180,
            height: 120,
            borderRadius: 15,
            objectFit: "cover",
          }}
        />
      )}
      <View
        style={{
          padding: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 17,
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
            }}
          >
            ⭐ {item.rating}
          </Text>
          <Text
            style={{
              fontFamily: "outfit-medium",
            }}
          >
            💸 {item.price}
          </Text>
        </View>
      </View>
    </View>
  );
}
