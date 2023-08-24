import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground , Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { Circle } from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";
import Carousel, { Pagination } from "react-native-snap-carousel";
const Task1 = () => {
  const totalDuration = 0* 24 * 60 * 60 + 0 * 60 * 60 + 1 * 60 + 10;
  const [remainingTime, setRemainingTime] = useState(totalDuration);
  const [progress, setProgress] = useState(0);
  const [swiperPosition, setSwiperPosition] = useState(new Animated.Value(0));
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderValue, setSliderValue] = useState(80);
  const [activeSlide1, setActiveSlide1] = useState(0);
  const navigation = useNavigation(); 
  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(prevTime => prevTime - 1);
        setProgress(1 - remainingTime / totalDuration); // Reverse the progress calculation
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]);



  const data = [
    {
      id: 1,
p:"$ 25.00 GBP",
b:"BUY ENTRY NOW",

      name:"Sotheby's",
      name2:"INTERNATIONAL REALITY",
      notification: "COMING SOON",
      price:"$$ 5000,000 GBP", 
      Address:"SHELTON STREET CONVENT GARDEN LONDON WC2H UNITED KINGDOM",
      
      code:"ZM7861234567",

      icon: require("../Images/im.png"),
    },
    {
      id: 2,
      p:"$ 25.00 GBP",
      b:"BUY ENTRY NOW",
      
      name:"Sotheby's",
      name2:"INTERNATIONAL REALITY",
      notification: "COMING SOON",
      price:"$$ 5000,000 GBP", 
      Address:"SHELTON STREET CONVENT GARDEN LONDON WC2H UNITED KINGDOM",
 
      code:"ZM7861234567",
      icon: require("../Images/im.png"),
    },
    {
      id: 3,
      p:"$ 25.00 GBP",
      b:"BUY ENTRY NOW",
      
      name:"Sotheby's",
      name2:"INTERNATIONAL REALITY",
      price:"$$ 5000,000 GBP", 
      Address:"SHELTON STREET CONVENT GARDEN LONDON WC2H UNITED KINGDOM",
      heading: "Meetups in person",
      code:"ZM7861234567",
    
      icon: require("../Images/im.png"),
    },
]



    const renderItem = ({ item }) => (
     <View style={{  marginTop:30, backgroundColor:'black',borderRadius: 20 , height:400}}>
    <ImageBackground
      source={item.icon}
      style={{
        width: "100%",
        height: '90%',

      
      }}
    //   imageStyle={{ }}
    >
   
      <View style={styles.cardContainer}>
        {/* Timer */}
        <View style={styles.timerContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10, }}>
            <View style={{alignItems:'center', flexDirection:"column"}}>
        <Text style={styles.timerText}>
            {`${Math.floor(remainingTime / (24 * 60 * 60))} `}
          </Text>
          <Text style={styles.timerText}>
            DAYS
          </Text>
          </View>



          <View style={{alignItems:'center',flexDirection:"column"}}>
        <Text style={styles.timerText}>
            {`${Math.floor(
              (remainingTime % (24 * 60 * 60)) / (60 * 60)
            )}`}
          </Text>
          <Text style={styles.timerText}>
           HOURS
          </Text>
          </View>



          <View style={{alignItems:'center',flexDirection:"column"}}>
        <Text style={styles.timerText}>
            {`${Math.floor((remainingTime % (60 * 60)) / 60)}`}
          </Text>
          <Text style={styles.timerText}>
           MINUTES
          </Text>
          </View>

          
          <View style={{alignItems:'center',flexDirection:"column"}}>
        <Text style={styles.timerText}>
            {`${remainingTime % 60}`}
          </Text>
          <Text style={styles.timerText}>
           SECONDS
          </Text>
          </View>
          </View>


            
        
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:20}}> 
            <View>
                 <Text></Text>
                 </View>
            <View style={{flexDirection:'row'}}>
             <Image
source={require("../Images/ar.png")}
style={{  height: 30,
  width: 50,
  resizeMode: "contain",}}
/> 

 <Image
source={require("../Images/heart.png")}
style={{  height: 30,
  width: 50,
  resizeMode: "contain",}}
/>
            </View>
        </View>
        </View>

        {/* Progress bar */}
        <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:"center", marginTop:80,paddingHorizontal:13}}>
        {/* <View style={styles.progressBarContainer}> */}
          <Circle
            size={50}
            progress={progress}
            color="#FFA500" // Orange color for completed progress
            borderWidth={0} // No border
            
            thickness={5} // Thickness of the circle
          />
        
        {/* </View> */}

<Text style={{color:'white'}}>
    {item.price}
</Text>
<View style={{alignItems:'center'}}> 
    <Text style={{color:'white', fontSize:19, fontWeight:'800'}}>
    {item.name}
</Text>
<Text style={{color:'white', fontSize:8}}>
    {item.name2}
</Text>
</View>
</View>


       
       
    
   

      <View style={{flexDirection:'row' ,justifyContent:'space-between',  alignItems:'center', paddingHorizontal:10}}>
<Text style={{color:'white', fontSize:16}}>
            {`${(progress * 100).toFixed(0)}%`}
          </Text>
<Pagination
        dotsLength={data.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.inactivePaginationDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />

</View>

<View style={{alignSelf:'center'}}>
    <Text style={{fontSize:10, bottom:12, color:'white', fontWeight:'500'}}>
        {item.Address}
    </Text>
</View>
<View style={{flexDirection:'row', justifyContent:"space-between", paddingHorizontal:16, bottom:12}}>
    <Text></Text> 
    <Text style={{fontSize:10,color:'white', fontWeight:'500'}}>{item.code}</Text>
    </View>
      
      <View style={{width:'100%', height:5, backgroundColor:'white', bottom:5}}></View>

      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:12}}>
        <Text style={styles.p}>{item.p}</Text>
        <Text style={styles.p}>{item.b}</Text>
      </View>
      <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:12}}>
        <Text></Text>
        <Text style={styles.p}>{item.code}</Text>
      </View>
    </ImageBackground>
    </View>
  );
  return (

    <View style={{flex:1}}>






<Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={391.5}
        itemWidth={366}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      


      <TouchableOpacity style={{backgroundColor:'orange', alignItems:'center', justifyContent:'center', alignSelf:"center",padding:10, borderRadius:12, bottom:170}}
      onPress={()=> navigation.navigate('Task2')}>
    <Text style={{color:'black', fontSize:20}}>
        TASK2
    </Text>
</TouchableOpacity>



    
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

export default Task1;
