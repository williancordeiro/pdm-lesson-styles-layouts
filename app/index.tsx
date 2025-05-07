import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import SecondaryCard from "@/components/cards/SecondaryCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      <MainCard
        title="Vice Awakens"
        participating={3}
        imgUrl="https://cdn-icons-png.flaticon.com/512/2603/2603009.png"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>
      
      <Text style={styles.title}>Invite a Member</Text>

      <SecondaryCard
        imgUrl="https://cdn-icons-png.flaticon.com/512/2603/2603009.png"
        name="Shopiala"
        userId="@bestieee"
        levelName="Level 12"
      />

    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "rgb(249 249 249)",
    height: 40,
    paddingTop: 5,
    borderRadius: 4
  }
})