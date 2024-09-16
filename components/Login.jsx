import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/login2.jpg")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-bold",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          AI Trip Planner
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 18,
            textAlign: "center",
            color: "gray",
            marginTop: 20,
          }}
        >
          Welcome to your ultimate travel companion. Effortlessly discover the
          wonders of the world with our innovative and intelligent travel
          planner designed for your convenience.
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>router.push('auth/sign-in')}>
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: "outfit",
              fontSize: 17,
              textAlign: "center",
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
  },
  button: {
    padding: 15,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 99,
    marginTop: "25%",
  },
});

export default Login;
