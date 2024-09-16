import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { useTrip } from "../../context/CreateTripProvider";
import { AI_PROMPT } from "../../constants/Options";
import { useEffect } from "react";
import { chatSession } from "../../configs/AiModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../configs/FirebaseConfig";
export default function GenerateTrip() {
  const { tripData, setTripData } = useTrip();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;
  const GenerateAiTrip = async () => {
    setLoading(true);
    const FINAL_PROMT = AI_PROMPT.replace(
      "{location}",
      tripData?.locationInfo?.name
    )
      .replace("{totalDays}", tripData?.totalNumberOfDay)
      .replace("{totalNights}", tripData?.totalNumberOfDay - 1)
      .replace("{traveler}", tripData?.traveler?.title)
      .replace("{budget}", tripData?.tripBudget?.title)
      .replace("{totalDays}", tripData?.totalNumberOfDay)
      .replace("{totalNights}", tripData?.totalNumberOfDay - 1);

    const result = await chatSession.sendMessage(FINAL_PROMT);
    // console.log(result.response.text());
    const tripResponse = JSON.parse(result.response.text());
    setLoading(false);
    const docId = Date.now().toString();
    const data = await setDoc(doc(db, "UserTrips", docId), {
      userEmail: user.email,
      tripPlan: tripResponse,
      tripData: JSON.stringify(tripData),
      docId: docId,
    });

    router.push("(tabs)/mytrip");
  };

  useEffect(() => {
    GenerateAiTrip();
  }, []);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 200,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 35,
          textAlign: "center",
        }}
      >
        Please Wait...
      </Text>
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          marginTop: 40,
          textAlign: "center",
        }}
      >
        We are working to generate your dream trip
      </Text>

      <Image
        source={require("../../assets/images/Airplane Gif.gif")}
        style={{
          width: "100%",
          height: 200,
          alignSelf: "center",
          marginTop: 60,
        }}
      />

      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 30,
          marginTop: 40,
          color: "gray",
          textAlign: "center",
        }}
      >
        Do not Go Back
      </Text>
    </View>
  );
}
