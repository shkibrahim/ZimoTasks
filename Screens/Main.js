import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground , Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Circle } from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { PermissionsAndroid } from 'react-native';
PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
    })
        .then((res) => {
            console.log('Permission: ', res);
            Contacts.getAll()
                .then((contacts) => {
                    // work with contacts
                    console.log(contacts);
                })
                .catch((e) => {
                    console.log(e);
                });
        })
        .catch((error) => {
            console.error('Permission error: ', error);
        });
const Main = ({navigation}) => {
 


  return (

    <View style={{flex:1, margin:12,alignItems:"center", justifyContent:'center'}}>


<View style={{flexDirection:"column", alignSelf:"center", alignItems:'center'}}>
    
<TouchableOpacity style={{backgroundColor:"lightblue", padding:10,alignItems:'center', justifyContent:"center"}} onPress={()=>navigation.navigate('Task1')}>

    <Text style={{color:'white', fontSize:16}}>Task1</Text>
</TouchableOpacity>


<TouchableOpacity style={{backgroundColor:"lightblue", padding:10,alignItems:'center', justifyContent:"center"}} onPress={()=>navigation.navigate('Task2')}>

    <Text style={{color:'white', fontSize:16}}>Task2</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"lightblue", padding:10,alignItems:'center', justifyContent:"center"}} onPress={()=>navigation.navigate('Task3')}> 

    <Text style={{color:'white', fontSize:16}}>Task3</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"lightblue", padding:10,alignItems:'center', justifyContent:"center"}} onPress={()=>navigation.navigate('Task4')}>

    <Text style={{color:'white', fontSize:16}}>Task4</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"lightblue", padding:10,alignItems:'center', justifyContent:"center"}} onPress={()=>navigation.navigate('Task5')}>

    <Text style={{color:'white', fontSize:16}}>Task5</Text>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:"lightblue", padding:10,alignItems:'center', justifyContent:"center"}} onPress={()=>navigation.navigate('Task6')}>

    <Text style={{color:'white', fontSize:16}}>Task6</Text>
</TouchableOpacity>

    
     </View>



    

    
    </View>
  );
};


const styles = StyleSheet.create({
  backgroundImage: {
    width: '99%',
    height: '70%',
    alignSelf:'center',
    // marginTop:40,
    borderRadius: 10,
    alignItems: 'center',
  },
  p:{
color:'white', fontSize:15
  },
  cardContainer: {
    width: '80%',
    // height:50,
   alignSelf:'center'
  },
  timerContainer: {
   
  },
  timerText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  progressBar: {
    width: '100%',
    height: 20,
    backgroundColor: 'gray',
    // borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    transform: [{ scaleX: +1 }], // Reverse the direction of the progress bar
  },
  swiperContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  swiperIndicator: {
    width: 20,
    height: 5,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  customThumb: {
    // width: 150,
    // height: 50,
  },
  paginationContainer: {
  
  },
  paginationContainera: {
    position: "absolute",
    top: 173,
    alignSelf: "center",
  },
  paginationDot: {
    width: 24,
    height: 6,
    borderRadius: 5,
    marginHorizontal: -6,
    backgroundColor: "orange",
  },
  paginationDota: {
    width: 24,
    height: 6,
    borderRadius: 5,
    marginHorizontal: -6,
    backgroundColor: "#fff",
  },
  inactivePaginationDot: {
    width: 24,
    height: 6,
    marginHorizontal: -6,
    borderRadius: 17,

    backgroundColor: "white",
  },
  inactivePaginationDota: {
    width: 12,
    height: 12,
    marginHorizontal: -6,
    borderRadius: 10,

    backgroundColor: "gray",
  },


});

export default Main;
