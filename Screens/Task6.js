import React, { useEffect, useState } from 'react';
import { View, StyleSheet,Text, Image ,FlatList,TouchableOpacity,ScrollView, ActivityIndicator} from 'react-native';
import { PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts'; //
const Task6 = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
//   PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
//     title: 'Contacts',
//     message: 'This app would like to view your contacts.',
//     buttonPositive: 'Please accept bare mortal',
// })
//     .then((res) => {
//         console.log('Permission: ', res);
//         Contacts.getAll()
//             .then((contacts) => {
//                 // work with contacts
//                 console.log(contacts);
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     })
//     .catch((error) => {
//         console.error('Permission error: ', error);
//     });
  const [contactsData, setContactsData] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    Contacts.getAll((err, contacts) => {
      if (err) {
        console.error(err);
      } else {
        const formattedContacts = contacts.map(contact => ({
          name: contact.givenName,
          number: contact.phoneNumbers[0]?.number || 'No number available',
          saved: true,
        }));
        setContactsData(formattedContacts);
      }
      setLoading(false);
    });
  };

  const renderContact = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactNumber}>{item.number}</Text>
      <Text style={styles.contactCategory}>
        {item.saved ? 'Zimo' : 'Invite'}
      </Text>
    </TouchableOpacity>
  );
  return (
    <View style={{}}>
         {loading && <ActivityIndicator style={styles.loadingIndicator} size="large" color="orange" />}
     <View style={{flexDirection:'row' , justifyContent:"space-between", margin:20}}> 
     <TouchableOpacity onPress={()=>navigation.goBack()}>
     <Image
                source={ require('../Images/arrow.png')}
            
              />
              </TouchableOpacity>
     <Image
                source={ require('../Images/logo.png')}
            
              />
     <Image
                source={ require('../Images/card.png')}
            
              />
     </View>

<View style={{height:1, width:'100%', backgroundColor:'orange', }}>
    <Text></Text>
</View>
<View style={{flexDirection:'row' , justifyContent:"space-between", marginHorizontal:15,marginVertical:20}}> 
<Image 
                source={ require('../Images/786.png')}
            
              />
  <Image style={{alignSelf:'center', marginRight:42}}
                source={ require('../Images/CONTACTS.png')}
            
              />
   <Image
                source={ require('../Images/users.png')}
            
              />
     </View>



     <View style={{flexDirection:'row' , justifyContent:"space-between", marginHorizontal:15,marginVertical:20, alignItems:'center'}}> 
     <View style={{flexDirection:'row', alignItems:'center',}}>
<Image 
                source={ require('../Images/avatar.png')}
            
              />
  <Image style={{marginLeft:17}}
                source={ require('../Images/john.png')}
            
              />
              </View>
   <Image
                source={ require('../Images/plus.png')}
            
              />
     </View>

     <View style={{height:1, width:'95%', backgroundColor:'orange',alignSelf:'center' , marginBottom:20}}>
    <Text></Text>
</View>
<View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:12, marginBottom:10}}>
<Image
                source={ require('../Images/A.png')}
            
              />
               <Image
                source={ require('../Images/A.png')}
            
              />
</View>
<FlatList
  style={{ height: 460 }}
  data={contactsData}
        renderItem={renderContact}
        keyExtractor={(item) => item.number}
      />
<ScrollView><Text></Text></ScrollView>
<View style={{flexDirection:"row", height:20, width:'93%', justifyContent:"space-between", alignSelf:"center"}}>
<TouchableOpacity>
 <Image
                source={ require('../Images/1.png')}
            
              />
</TouchableOpacity>
<TouchableOpacity>
<Image
                source={ require('../Images/2.png')}
            
              />
</TouchableOpacity>
<TouchableOpacity>
<Image
                source={ require('../Images/3.png')}
            
              />
              </TouchableOpacity>
<TouchableOpacity>
<Image
                source={ require('../Images/4.png')}
            
              />
              </TouchableOpacity>
</View>


    </View>
  );
};

const styles = StyleSheet.create({
    A:{
        color:"orange"
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
      },
      contactItem: {
       paddingHorizontal:12,
       paddingVertical:4,
       borderBottomWidth:2,borderBottomColor:'lightgray',
        flexDirection:'row',justifyContent:'space-between',
      
      },
      contactName: {
        fontSize: 15,
        marginBottom: 6,
        color:"black"
      },
      contactNumber: {
        fontSize: 12,
        color: 'lightgray',
        marginBottom: 4,
      },
      contactCategory: {
        fontSize: 14,
        color: 'orange',
      },
    
      loadingIndicator: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
      },
});

export default Task6;
