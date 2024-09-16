import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import StartNewTripCard from "../../components/MyTrips/StartNewTripCard";

import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db, auth } from "../../configs/FirebaseConfig.js";
import UserTripList from "../../components/MyTrips/UserTripList.jsx";
import { useRouter } from "expo-router";
const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;
  const router = useRouter();
  useEffect(() => {
    user && GetMyTrips();
  }, [user]);

  const GetMyTrips = async () => {
    setLoading(true);
    setUserTrips([]);
    const q = query(
      collection(db, "UserTrips"),
      where("userEmail", "==", user.email)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, " => ", doc.data());
      setUserTrips((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };

  return (
    <ScrollView
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 35,
          }}
        >
          My Trips
        </Text>
        <Ionicons
          onPress={() => router.push("/create-trip/search-place")}
          name="add-circle"
          size={40}
          color="black"
        />
      </View>
      {loading && <ActivityIndicator size={"large"} color={"#000"} />}
      {userTrips?.length == 0 ? (
        <StartNewTripCard />
      ) : (
        <UserTripList userTrips={userTrips} />
      )}
    </ScrollView>
  );
};

export default MyTrip;
