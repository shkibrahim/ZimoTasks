import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Pressable, Image, ActivityIndicator } from "react-native";
import Video from "react-native-video";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Task2 = ({navigation}) => {
  const videoRef = useRef(null);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track video loading


  const toggleControls = () => {
    setControlsVisible(!controlsVisible);
    if (controlsVisible) {
      // Hide controls after 5 seconds
      setTimeout(() => {
        setControlsVisible(false);
      }, 5000);
    }
  };

  const onPlayPausePress = () => {
    if (videoRef.current) {
      setIsPlaying(!isPlaying);
    }
  };

  const onLoad = () => {
    setIsLoading(false); // Video has loaded, set isLoading to false
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      {controlsVisible && (
        <View
          style={{
            height: 50,
            marginTop: 30,
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate('Task1')}
            style={({ pressed }) => [
              {
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
                marginHorizontal: 5,
              },
              pressed && { backgroundColor: "gray" },
            ]}
          >
            <MaterialIcons name="arrow-back" size={25} color={"white"} />
          </Pressable>
          <Image
            source={require("../Images/zimogreen.png")}
            style={{ width: 50, height: 30, resizeMode: "contain" }}
          />
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              padding: 5,
              marginHorizontal: 5,
            }}
          >
            <MaterialIcons name="arrow-back" size={25} color={"transparent"} />
          </View>
        </View>
      )}
      <TouchableWithoutFeedback onPress={toggleControls}>
        <View style={styles.container}>
          <Video
            ref={videoRef}
            source={{ uri: "https://youtu.be/UT5F9AXjwhg" }}
            style={styles.video}
            resizeMode="contain"
            paused={!isPlaying}
            onLoad={onLoad} // Call onLoad when the video is loaded
          />

          {isLoading && ( // Show loading indicator while isLoading is true
            <ActivityIndicator
              size="large"
              color="white"
              style={styles.loadingIndicator}
            />
          )}

          {controlsVisible && !isLoading && ( // Show controls when they're visible and video is not loading
            <View style={styles.controlsContainer}>
              <TouchableOpacity onPress={onPlayPausePress}>
                <MaterialIcons
                  name={isPlaying ? "pause" : "play-arrow"}
                  size={40}
                  color="white"
                />
              </TouchableOpacity>
              {/* Add more controls/icons as needed */}
            </View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  controlsContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingIndicator: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Task2;
