import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { NewsDataType } from '@/types'
import { FadeInDown, SharedValue } from 'react-native-reanimated'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'
import Animated from 'react-native-reanimated'
import { Link } from 'expo-router'

type Props = {
    slideItem: NewsDataType,
    index: number,
    scrollX: SharedValue<number>
}

const {width} = Dimensions.get('screen');

const SliderItem = ({slideItem, index, scrollX}: Props) => {
  return (
   
    <Animated.View entering={FadeInDown. delay(300).duration(500)} style={styles.itemWrapper} key={slideItem.article_id} > 
        <Image source={{uri: slideItem.image_url}} style={styles.image}/>
        <LinearGradient colors={["transparent", 'rgba(0, 0, 0, 0.8)']} style={styles.background}> 
        <View style={styles.sourceInfo}>
            {slideItem.source_icon && (
                <Image source={{uri: slideItem.source_icon}} style={styles.sourceIcon}/>
            )}
            <Text style={styles.sourceName}>{slideItem.source_name}</Text>
        </View>  
            <Text style={styles.title} numberOfLines={2}>{slideItem.title}</Text>
        </LinearGradient>
        
    </Animated.View>

  )
}

export default SliderItem

const styles = StyleSheet.create({
    itemWrapper:{
        position: 'relative',
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image:{
        width: width - 40,
        height: 180,
        borderRadius: 20,
    },

    background:{
        position: 'absolute',
        left: 20,
        right: 0,
        top: 0,
        width: width - 40,
        height: 180,
        borderRadius: 20,
        padding: 30,
    },

    sourceIcon:{
        width: 25,
        height: 25,
        borderRadius: 20,
        
    },

    sourceInfo:{
        flexDirection: 'row',
        position: 'absolute',
        top: 85,
        paddingHorizontal: 20,
        alignItems: 'center'

    },

    sourceName:{
        color: Colors.white,
        fontSize: 12,
        fontWeight: 'bold',
        paddingLeft: 10,
        
    },
    
    title:{
        fontSize: 14,
        color: Colors.white,
        position: 'absolute',
        top: 120,
        paddingHorizontal: 15,
        fontWeight: '600'
    }
})