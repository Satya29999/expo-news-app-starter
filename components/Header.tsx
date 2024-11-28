import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
const Header = () => {
  return (
    <View style={styles.container}>
        <View style={styles.userInfo}>
        <Image style={styles.img} source={require('@/assets/images/GDI_LOGO.png')}/>
        <View>
            <Text style={styles.welcome}>អគ្គនាយកដ្ឋាន អន្តោប្រវេសន៍</Text>
            <Text style={styles.userName}>GENERAL DEPARTMENT OF IMMIGRATION
            </Text>
        </View>
        </View>
        {/* <TouchableOpacity onPress={() => {}}> */}
         <Ionicons name="notifications-outline" size={26} color={Colors.primary}/>
       {/* </TouchableOpacity> */}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    img: {
        width: 40,
        height: 40,
        borderRadius: 30,
    },

    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },

    welcome: {
        fontSize: 16,
        color: Colors.darkGrey,
    },

    userName: {
        fontSize: 9,
        fontWeight: '700',
        color: Colors.black,
    }
})