import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";

import CalendarPicker from "react-native-calendar-picker";
import { useTrip } from "../../context/CreateTripProvider";
import moment from "moment";
export default function SelectDates() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useTrip();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  //   useEffect(() => {
  //     console.log(tripData);
  //   }, [tripData]);

  const onDateChange = (date, type) => {
    if (type === "START_DATE") {
      setStartDate(moment(date));
    }
    if (type === "END_DATE") {
      setEndDate(moment(date));
    }
  };

  const onDateSelect = () => {
    if (!startDate && !endDate) {
      ToastAndroid.show("Please Select Start and End Date", ToastAndroid.LONG);
      return;
    }
    const totalNumberOfDay = endDate.diff(startDate, "days");

    setTripData({
      ...tripData,
      startDate: startDate,
      endDate: endDate,
      totalNumberOfDay: totalNumberOfDay + 1,
    });

    router.push("/create-trip/select-budget");
  };

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
        Travel Dates
      </Text>

      <View style={{ marginTop: 30 }}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={10}
          selectedRangeStyle={{
            backgroundColor: "#000",
          }}
          selectedDayTextStyle={{
            color: "#fff",
          }}
        />
      </View>

      <TouchableOpacity
        onPress={onDateSelect}
        style={{
          marginTop: 70,
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
