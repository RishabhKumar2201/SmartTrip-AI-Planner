import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SelectTravelerList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { useTrip } from "../../context/CreateTripProvider";

export default function SelectTraveler() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useTrip();
  const [selectTraveler, setSelectTraveler] = useState(tripData.traveler || {});

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    if (selectTraveler) {
      setTripData({ ...tripData, traveler: selectTraveler });
    }
  }, [selectTraveler]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 100,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
        }}
      >
        Who's Traveling
      </Text>

      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 23,
          }}
        >
          Choose Your Travelers
        </Text>
        <FlatList
          data={SelectTravelerList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectTraveler(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectTraveler={selectTraveler} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/select-dates")}
        style={{
          marginTop: 20,
          padding: 20,
          backgroundColor: "#000",
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
            color: "#fff",
            textAlign: "center",
          }}
        >
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
