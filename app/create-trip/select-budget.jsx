import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { SelectBudgetList } from "../../constants/Options";
import OptionCard from "../../components/CreateTrip/OptionCard";
import { useTrip } from "../../context/CreateTripProvider";

export default function SelectBudget() {
  const navigation = useNavigation();
  const router = useRouter();
  const { tripData, setTripData } = useTrip();
  const [selectBudget, setSelectBudget] = useState(tripData.tripBudget || {});

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  useEffect(() => {
    if (selectBudget) {
      setTripData({ ...tripData, tripBudget: selectBudget });
    }
  }, [selectBudget]);

  const onClickContinue = () => {
    if (!selectBudget) {
      ToastAndroid.show("Select Your Budget", ToastAndroid.LONG);
      return;
    }
    router.push("/create-trip/review-trip");
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
        Budget
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
          Choose Spending Habits for your trip
        </Text>
        <FlatList
          data={SelectBudgetList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectBudget(item)}
              style={{ marginVertical: 10 }}
            >
              <OptionCard option={item} selectBudget={selectBudget} />
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity
        onPress={onClickContinue}
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
