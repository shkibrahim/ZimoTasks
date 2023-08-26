import React, { useState, useRef, useEffect }  from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Pressable, Image, ActivityIndicator , FlatList} from "react-native";
import Video from "react-native-video";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import {VidReq} from '../Context/Api';
import { StorageKeys } from "../Data/StorageKeys";
import AsyncStorage from '@react-native-async-storage/async-storage';
 
const Task4 =  ({navigation}) => {
  const videoRef = useRef(null);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track video loading

  const [Data1, setData1] = useState([]);

  const toggleControls = async () => {
    VidReq();
    const Data = await AsyncStorage.getItem(StorageKeys.VidData);
    
    if (Data) {
      const parsedData = JSON.parse(Data);
      setData1(parsedData.movies);
    }
  };

  useEffect(() => {
    toggleControls();
  }, []);

  const renderItem = ({ item }) => (
    <View style={{ alignSelf:"center", padding:40, backgroundColor:'#FFC6AC' ,margin:10, borderRadius:12, height:300}}>
      <Text style={styles.text}>Title: {item.title}</Text>
      <Text style={styles.text}>Release Year: {item.releaseYear}</Text>
    </View>
  );



//   useEffect(() => {
//     VidReq()
//     const Data = AsyncStorage.getItem(StorageKeys.VidData);


//   }, []);








  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
   
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

      
   



      <View style={{alignItems:'center', justifyContent:'center', alignSelf:'center', height:600}}>
      <FlatList
        data={Data1}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>

<TouchableOpacity onPress={toggleControls} style={{alignSelf:'center'}}>
    <Text> Refresh</Text>
</TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
color:'white',fontSize:22,
fontWeight:'500'
  }

  ,
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

export default Task4;
