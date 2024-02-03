import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Split Wise</Text>
      <Text style={styles.subheader}>Your Money Splitter App</Text>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('Prot')}>
            <Text style={styles.homeButtonText}>
                Get Started
            </Text>
       </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
      fontWeight: "bold",
      fontSize: hp(7),
      color: "#fff"
    },
    subheader: {
      opacity: 0.85,
      color: "#fff",
      fontSize: hp(2),
      marginTop: hp(0.5)
    },
    homeButton: {
        position: 'absolute',
        bottom: hp(20),
        backgroundColor: "#fff",
        paddingHorizontal: hp(6),
        paddingVertical: hp(2.7),
        borderRadius: hp(5),
    },
    homeButtonText: {
        fontWeight: 'bold',
        fontSize: hp(2.5)
    }
  });
  

