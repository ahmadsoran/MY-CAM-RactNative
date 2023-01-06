import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  AntDesign,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import CustomButton from "../Custom-Button";
import MyDivider from "../Divider";
import pickImageAsync from "../../util/ImagePicker";
import { Button } from "@rneui/themed";
import { SuccesInputCheckerAnimatedIcon } from "../Succes-input-checker-animated";

const Documentation = () => {
  const [Documents, setDocuments] = useState({
    passport: false,
    ID: false,
  });
  const UploadButtonHandelr = async (data: "pass" | "id") => {
    const res = await pickImageAsync();
    if (res && data === "id") {
      setDocuments((prv) => ({
        ...prv,
        ID: true,
      }));
    } else if (res && data === "pass") {
      setDocuments((prv) => ({
        ...prv,
        passport: true,
      }));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.HeaderText}>Documentation</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Entypo style={styles.icon} name="documents" size={30} />
          <View style={styles.textContainer}>
            <Text style={styles.textContainer.HeaderText}>Passport</Text>
            <Text style={styles.description}>
              Must be clear, readable and high quality
            </Text>
          </View>
        </View>
        <Button
          icon={
            Documents.passport ? (
              <SuccesInputCheckerAnimatedIcon color="#12af41" show size={30} />
            ) : (
              <Text style={styles.textContainer.HeaderText}>Upload</Text>
            )
          }
          buttonStyle={{
            backgroundColor: Documents.passport ? "#dcffd9" : "whitesmoke",
            marginTop: "10%",
            padding: "4.5%",
            marginHorizontal: 15,
          }}
          radius={10}
          onPress={() => UploadButtonHandelr("pass")}
        />
      </View>

      <MyDivider
        color="#80808038"
        type="middle text"
        text="Or"
        textStyle={{
          marginHorizontal: 5,
          fontFamily: "dm-sans",
          color: "#80808081",
        }}
      />

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <AntDesign style={styles.icon} name="user" size={30} />
          <View style={styles.textContainer}>
            <Text style={styles.textContainer.HeaderText}>
              Personal ID Card
            </Text>
            <Text style={styles.description}>
              Must be clear, readable and high quality
            </Text>
          </View>
        </View>
        <Button
          icon={
            Documents.ID ? (
              <SuccesInputCheckerAnimatedIcon color="#12af41" show size={30} />
            ) : (
              <Text style={styles.textContainer.HeaderText}>Upload</Text>
            )
          }
          buttonStyle={{
            backgroundColor: Documents.ID ? "#dcffd9" : "whitesmoke",
            marginTop: "10%",
            padding: "4.5%",
            marginHorizontal: 15,
          }}
          radius={10}
          onPress={() => UploadButtonHandelr("id")}
        />
      </View>
    </View>
  );
};

export default Documentation;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    position: "relative",
  },
  HeaderText: {
    fontFamily: "dm-sans-bold",
    fontSize: 20,
    marginVertical: 10,
  },
  description: {
    fontSize: 15,
    color: "gray",
    opacity: 0.6,
    width: Layout.window.width / 1.8,
  },
  cardContainer: {
    borderColor: "#8080802d",
    borderWidth: 1.5,
    borderStyle: "dashed",
    padding: 20,
    borderRadius: 20,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  icon: {
    backgroundColor: "#c5f8ff",
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    color: Colors.light.primary,
  },
  textContainer: {
    paddingHorizontal: 10,
    HeaderText: {
      fontFamily: "dm-sans",
      fontSize: 18,
    },
  },
});
