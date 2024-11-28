import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '@/components/SearchBar'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import newsCategoryList from '@/constants/Categories';
import CheckBox from '@/components/CheckBox'
import { useNewsCategories } from '@/hooks/useNewsCategories'


type Props = {}

const Page = (props: Props) => {
  const {top: safeTop} = useSafeAreaInsets();

  const {newsCategories, toggleNewsCategory} = useNewsCategories();

  return (
    <View style={[styles.container, {paddingTop: safeTop + 20}]}>
      <SearchBar withHorizontalPadding={false}/> 
       <Text style={styles.title}> Categories </Text>
       <View style={styles.listContainer}>
           {newsCategories.map((item) => (
            // <Text>{item.title}</Text>
            <CheckBox key={item.id} label={item.title} checked={item.selected} onPress={() => {
              toggleNewsCategory(item.id)
            }}/>
           ))}
            </View>
    </View>
  
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center",
  },

  title: {
    fontSize: 18, 
    fontWeight: '600',
    color: Colors.black,
  },

  listContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 12,
    marginBottom: 20,

  }
})