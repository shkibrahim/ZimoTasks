import React, { useState, useRef, useEffect }  from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Pressable, Image, ActivityIndicator , FlatList} from "react-native";
import Video from "react-native-video";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import ImagePicker from 'react-native-image-crop-picker';
import { PermissionsAndroid } from 'react-native';
const Task5 =  (navigation) => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
  const videoRef = useRef(null);
  const [selectedType, setSelectedType] = useState('');


  
  const [selecteduri, setselecteduri] = useState([]);
  const [controlsVisible, setControlsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to track video loading
  const [SelectedImages, setSelectedImages] = useState([]);
 




  const openImagePicker = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: "photo",
    }).then((images) => {
      setSelectedImages(images);
    });
  };




  const handleRemoveMedia = (index) => {
    const newSelectedMedia = [...SelectedImages];
    newSelectedMedia.splice(index, 1);
    setSelectedImages(newSelectedMedia);
  };
  const renderImage = ({ item, index }) => {
    const isThirdImage = (index + 1) % 6 === 3; // Third image in each set of 6
    const isSixthImage = (index + 1) % 6 === 0; // Sixth image in each set of 6
    const isLastItem = index === SelectedImages.length - 1;
    const imageStyle = {
        width: isThirdImage || (isSixthImage && !isLastItem) ? "100%" : '50%',
      height: 200,
    //   resizeMode: "cover",
      margin: 5,
    
    
    };
  
    return <Image source={{ uri: item.path }} style={imageStyle} />;
  };
  return (
    <View style={{ flex: 1, }}>
   
        <View
          style={{
           alignSelf:"center",
           padding:12,
        
        
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

        <View style={{padding:12, backgroundColor:"black", width:'100%', alignSelf:'center', borderRadius:2}}> 


<View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly", marginBottom:12}}>

    <Text style={{color:'white', fontSize:8, fontWeight:"500"}}>SHELTOR STREET</Text>
     <Text style={{color:'white', fontSize:8, fontWeight:"500"}}>CONVENT GARDEN</Text>
     <Text style={{color:'white', fontSize:8, fontWeight:"500"}}>LONDON</Text>
     <Text style={{color:'white', fontSize:8, fontWeight:"500"}}>WC2H</Text>
      <Text style={{color:'white', fontSize:8, fontWeight:"500"}}>UNITED KINGDOM</Text>
</View>


<View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between", }}>

    <Text style={{color:'white', fontSize:12, fontWeight:"500"}}>Southby's</Text>
     <Text style={{color:'white', fontSize:12, fontWeight:"500"}}>$ 5000,000 GBP</Text>
     <Text style={{color:'white', fontSize:12, fontWeight:"500"}}>#ZFGJSKF425</Text>
    
</View>
        </View>

        <View style={{padding:12, width:'95%', flexDirection:'row', alignItems:"center", justifyContent:"space-between"}}> 

<TouchableOpacity onPress={openImagePicker}>
        <Text style={{color:'black', fontSize:13, fontWeight:"500"}}>PHOTOGRAPHY</Text>
</TouchableOpacity>
<TouchableOpacity>
     <Text style={{color:'black', fontSize:13, fontWeight:"500"}}>VIDEO</Text>
</TouchableOpacity>
<TouchableOpacity>
     <Text style={{color:'black', fontSize:13, fontWeight:"500"}}>FLOOR PLAN</Text>

    </TouchableOpacity>
     <TouchableOpacity>
     <Text style={{color:'black', fontSize:13, fontWeight:"500"}}>MAP</Text>
    </TouchableOpacity>
        </View>

      <View style={{height:600}}>
        <FlatList
        data={SelectedImages}
        renderItem={renderImage}
        keyExtractor={(item) => item.path}
        numColumns={2}
        
      />

</View>

     
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

export default Task5;
