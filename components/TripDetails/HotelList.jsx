import { View, Text, Image } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import HotelCard from "./HotelCard";

export default function HotelList({ hotelList }) {
  const GetGooglePhotoRef = async () => {
    const result = await GetPhotoRef();
    console.log(result?.results[0]?.photos?.photo_reference);
  };

  return (
    <View
      style={{
        marginTop: 20,
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
        🏩 Hotel Recommendation
      </Text>

      <FlatList
        data={hotelList}
        style={{ marginTop: 10 }}
        renderItem={({ item, index }) => <HotelCard item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
}
