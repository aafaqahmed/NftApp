import { View, Text, Image, TextInput } from 'react-native'
import { FONTS, COLORS, SHADOWS, assets, SIZES } from '../constants'
const HomeHeader = ( {onSearch} ) => {
  return (
    <View style={{
      backgroundColor:COLORS.primary,
      padding:SIZES.font,
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
      }}>
        <Image 
          source={assets.logo}
          resizeMode='contain'
          style={{
            width:90,
            height:20
          }}/>
        <View style={{
          width:45,
          height:45
        }}>
          <Image 
            source={assets.person01}
            resizeMode='contain'
            style={{
              width:'100%',
              height:'100%'
            }}/>
            <Image 
            source={assets.badge}
            resizeMode='contain'
            style={{
              position:'absolute',
              width:15,
              height:15,
              right:0,
              bottom:0,
            }}/>
        </View>
      </View>
        <View style={{
          marginVertical:SIZES.font,
        }}>
          <Text style={{
            color:COLORS.white,
            marginLeft:SIZES.font,
          }}>Hello, Victoria 👋</Text>
          <Text style={{
            color:COLORS.white,
            fontSize:SIZES.large,
            fontFamily:FONTS.bold,
            marginLeft:SIZES.font,
          }}>Let's find a masterpiece.</Text>
        </View> 
        <View style={{
          marginTop:SIZES.font,
          width:'100%',
          height:45,
          flexDirection:'row',
          backgroundColor:COLORS.gray,
          paddingHorizontal:SIZES.font,
          paddingVertical:SIZES.small,
          borderRadius:SIZES.extraLarge,  
        }}>
            <Image 
              source={assets.search}
              resizeMode='contain'
              style={{
                marginRight:SIZES.base,
                justifyContent:'center',
                alignItems:'center',
                width:20,
                height:20,
              }}/>
            <TextInput 
              placeholder='Search NFTs'
              onChangeText={onSearch}/>
        </View>
    </View>
  )
}

export default HomeHeader