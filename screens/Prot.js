import { Platform, SafeAreaView, StyleSheet, Text, StatusBar, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Prot() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.protHeader}>
        <Text style={styles.protUsername}>
          Basiru Y.
        </Text>

        <Text style={styles.protBalance}>
          Balance: <Text style={styles.protBalanceValue}>{'\u20A6'} 2,000</Text>
        </Text>

        <TouchableOpacity style={styles.protAction}>
          <Text style={styles.protActionText}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.protDetail}>
        <Image source={require('../assets/images/profile.jpg')}
        style={styles.protImage}/>

        <View style={styles.protDetailInfo}>
          <View style={styles.protDetailInfoItem}>
            <Text style={styles.protDetailInfoItemKey}>Name:</Text>
            <Text style={styles.protDetailInfoItemValue}>Basiru Yekinni</Text>
          </View>
          <View style={styles.protDetailInfoItem}>
            <Text style={styles.protDetailInfoItemKey}>Course:</Text>
            <Text style={styles.protDetailInfoItemValue}>Mathematics</Text>
          </View>
          <View style={styles.protDetailInfoItem}>
            <Text style={styles.protDetailInfoItemKey}>Level:</Text>
            <Text style={styles.protDetailInfoItemValue}>300 Level</Text>
          </View>
          <View style={styles.protDetailInfoItem}>
            <Text style={styles.protDetailInfoItemKey}>Gender:</Text>
            <Text style={styles.protDetailInfoItemValue}>Male</Text>
          </View>
        </View>

        <View style={styles.copyright}>
          <Text>
            Built by <Text style={styles.brandName}>Dacode</Text> | My first app layout         
          </Text>
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    protHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: hp(2.5),
      backgroundColor: 'blue',
      paddingHorizontal: hp(2)
    },
    protUsername: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: hp(2.5)
    },
    protAction: {
      backgroundColor: 'gray',
      paddingVertical: hp(1),
      paddingHorizontal: hp(3),
      borderRadius: hp(4)
    },
    protActionText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: hp(2)
    },
    protBalance: {
      fontSize: hp(2),
      color: '#fff',
    },
    protBalanceValue: {
      fontWeight: 'bold',
    },
    protDetail: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    protImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      resizeMode: 'cover'
    },
    protDetailInfo: {
      marginTop: hp(4),
      paddingVertical: hp(3)
    },
    protDetailInfoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: hp(20),
      borderBottomColor: 'gray',
      borderBottomWidth: 1, 
      paddingVertical: hp(2)
    },
    protDetailInfoItemKey: {
      fontWeight: 'bold',
      fontSize: hp(2.5)
    },
    protDetailInfoItemValue: {
      fontSize: hp(2.2)
    }, 
    copyright: {
      position: 'absolute',
      bottom: hp(7)
    },
    brandName: {
      fontWeight: 'bold'
    }
})