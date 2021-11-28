import React, { Component } from "react";
import { Text, StyleSheet, Image, View } from "react-native";

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={require("../assets/icon.png")} />
          <Text style={styles.headerTitle}>Smart Home</Text>
        </View>
        <View style={styles.rooms}>
          <Text style={styles.roomsTitle}>Rooms</Text>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.roomImage} source={require("../assets/icon.png")} />
            <Image style={styles.roomImage} source={require("../assets/icon.png")} />
            <Image style={styles.roomImage} source={require("../assets/icon.png")} />
          </View>
        </View>
        <View style={styles.devices}>
          <Text style={styles.devicesTitle}>Devices</Text>
          <View style={styles.devicesBody}>
            <View style={[styles.box, { backgroundColor: "green" }]} />
            <Text style={styles.deviceText}>Living room lamp</Text>
            <View style={styles.onOf}>
              <Text style={styles.onOfText}>On</Text>
              <Text style={styles.onOfText}>Off</Text>
            </View>
          </View>
          <View style={styles.devicesBody}>
            <View style={[styles.box, { backgroundColor: "red" }]} />
            <Text style={styles.deviceText}>Heater</Text>
            <View style={styles.onOf}>
              <Text style={styles.onOfText}>On</Text>
              <Text style={styles.onOfText}>Off</Text>
            </View>
          </View>
          <View style={styles.devicesBody}>
            <View style={[styles.box, { backgroundColor: "red" }]} />
            <Text style={styles.deviceText}>TV</Text>
            <View style={styles.onOf}>
              <Text style={styles.onOfText}>On</Text>
              <Text style={styles.onOfText}>Off</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Total devices on: 1</Text>
        </View>
      </View>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 70,
    width: 70,
  },
  header: {
    height: 130,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 30,
    alignItems: "center",
  },
  headerTitle: {
    color: "green",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  rooms: {
    flex: 1,
    paddingHorizontal: 20,
  },
  roomsTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  roomImage: {
    height: 110,
    width: 110,
    marginRight: 10,
  },
  devices: {
    flex: 3,
    paddingHorizontal: 20,
  },
  devicesTitle: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  devicesBody: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "yellow",
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  deviceText: {
    marginLeft: 20,
    fontSize: 20,
    width: "70%",
  },
  box: {
    width: 20,
    height: 20,
  },
  onOf: {
    width: 60,
    height: "80%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  onOfText: {
    fontSize: 20,
    height: "50%",
    textAlignVertical: "center",
    fontWeight: "bold",
    color: "blue",
  },
  footer: {
    paddingHorizontal: 20,
    height: 60,
  },
});
