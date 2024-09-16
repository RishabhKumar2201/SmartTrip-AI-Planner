import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { useTrip } from "../../context/CreateTripProvider";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";

export default function ReviewTrip() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useTrip();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onClickContinue = () => {};

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
        Review Your Trip
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
          Before generating your trip, please review your selection
        </Text>

        {/* Destination */}
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 30,
              color: "gray",
            }}
          >
            📍
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "gray",
              }}
            >
              Destination{" "}
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.locationInfo?.name}
            </Text>
          </View>
        </View>
        {/* Date selected */}
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 30,
              color: "gray",
            }}
          >
            🗓️
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "gray",
              }}
            >
              Travel Date
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {moment(tripData?.startDate).format("DD MMM") +
                " -- " +
                moment(tripData?.endDate).format("DD MMM") +
                " " +
                `(${tripData?.totalNumberOfDay} Days)`}
            </Text>
          </View>
        </View>
        {/* Traveler info */}
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 30,
              color: "gray",
            }}
          >
            🚀
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "gray",
              }}
            >
              Who is traveling
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>
        {/* Traveler info */}
        <View
          style={{
            marginTop: 25,
            flexDirection: "row",
            gap: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 30,
              color: "gray",
            }}
          >
            💰
          </Text>
          <View>
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 20,
                color: "gray",
              }}
            >
              Budget
            </Text>
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 20,
              }}
            >
              {tripData?.tripBudget?.title}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/create-trip/generate-trip")}
        style={{
          marginTop: 50,
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
          Build My Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
