import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import moment from "moment";
import FlightInfo from "../../components/TripDetails/FlightInfo";
import HotelList from "../../components/TripDetails/HotelList";
import PlannedTrip from "../../components/TripDetails/PlannedTrip";

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams();
  const [tripDetails, setTripDetails] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Trip Details",
    });

    if (trip) {
      try {
        const parsedTrip = JSON.parse(trip);
        setTripDetails(parsedTrip);
      } catch (error) {
        console.error("Error parsing trip data:", error);
      }
    }
  }, [trip]);

  const formatData = (data) => {
    try {
      return JSON.parse(data);
    } catch (error) {
      console.error("Error parsing data:", error);
      return null;
    }
  };

  const locationInfo = tripDetails
    ? formatData(tripDetails.tripData)?.locationInfo
    : null;
  const photoReference = locationInfo?.photoRef;

  const formatTripData = (data) => {
    return data.reduce((acc, item) => {
      const day = item.dayPlan.day;
      if (!acc[day]) {
        acc[day] = [];
      }
      acc[day].push({
        placeName: item.placeName,
        placeImageUrl: item.placeImageUrl,
        description: item.dayPlan.description,
        timeToVisit: item.dayPlan.timeToVisit,
        geoCoordinates: item.geoCoordinates,
        placeDetails: item.placeDetails,
        ticketPricing: item.ticketPricing,
        timeToTravel: item.timeToTravel,
      });
      return acc;
    }, {});
  };

  return (
    <ScrollView
      style={
        {
          // padding: 20,
          // paddingTop: 55,
          // backgroundColor: "#fff",
          // height: "100%",
        }
      }
    >
      {photoReference ? (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${photoReference}&key=${process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}`,
          }}
          style={{
            width: "100%",
            height: 330,
          }}
        />
      ) : (
        <Text>No photo available for this location.</Text>
      )}
      <View
        style={{
          marginTop: -30,
          padding: 15,
          backgroundColor: "#fff",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {tripDetails ? (
          <>
            <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
              {tripDetails.tripPlan?.trip?.destination}
            </Text>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ flexDirection: "row", gap: 5 }}>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    color: "gray",
                  }}
                >
                  {moment(formatData(tripDetails.tripData)?.startDate).format(
                    "DD MMM YYYY"
                  )}
                </Text>
                <Text
                  style={{
                    fontFamily: "outfit",
                    fontSize: 18,
                    color: "gray",
                  }}
                >
                  -{" "}
                  {moment(formatData(tripDetails.tripData)?.endDate).format(
                    "DD MMM YYYY"
                  )}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "outfit",
                  fontSize: 18,
                  color: "gray",
                }}
              >
                🗺️ {formatData(tripDetails.tripData)?.traveler?.title}
              </Text>
            </View>

            {/*Flight Info*/}
            <FlightInfo flightData={tripDetails?.tripPlan?.trip?.flight} />
            {/*Hotel List*/}
            <HotelList
              hotelList={tripDetails?.tripPlan?.trip?.hotel?.options}
            />

            {/*Day Planner Info*/}
            <PlannedTrip
              details={formatTripData(tripDetails?.tripPlan?.trip?.activities)}
            />
          </>
        ) : (
          <Text>Loading trip details...</Text>
        )}
      </View>
    </ScrollView>
  );
}
