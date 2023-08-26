import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Linking,View,Pressable,Image} from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const Task3 = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occurred', err),
    );
  };

  return (
    
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
       
        <View
        style={{
         alignSelf:"center",
         padding:4,
      
      
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
          
        <Pressable
          // onPress={() => navigation.navigate('Task1')}
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
          <MaterialIcons name="arrow-back" size={25} color={"black"} />
        </Pressable>
        <Image
          source={require("../Images/logo.png")}
          style={{ width: 50, height: 30, resizeMode: "contain" }}
        />
       
          
           <Image
          source={require("../Images/heart.png")}
          style={{ width: 20, height: 20, resizeMode: "contain" }}
        />
         
       
      </View>
    
      }
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable}>
          <Text style={styles.buttonText}>Scan QR Code</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default Task3;
