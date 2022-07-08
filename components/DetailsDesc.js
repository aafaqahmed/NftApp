import { View, Text } from 'react-native'
import { SIZES, COLORS, SHADOWS, assets, FONTS } from '../constants'
import { NFTTitle, EthPrice } from './SubInfo'
import { useState } from 'react'

const DetailsDesc = ({data}) => {
  const [text, setText] = useState(data.description.slice(0,100))
  const [readMore, setreadMore] = useState(false)

  return (
    <>
      <View style={{ 
          flex:1, 
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
          }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}/>
        <EthPrice price={data.price}/>
      </View>
      <View style={{ marginVertical:SIZES.extraLarge}}>
        <Text style={{
          fontSize:SIZES.font,
          fontFamily:FONTS.semiBold,
          color:COLORS.primary,
        }}>Description</Text>
        <Text style={{
          marginTop:SIZES.base,
          fontSize:SIZES.small,
          fontFamily:FONTS.regular,
          color:COLORS.secondary,
          lineHeight:SIZES.large
        }}>{text}
        {!readMore && '...'}
          <Text style={{
            fontSize:SIZES.small,
            fontFamily:FONTS.semiBold,
            color:COLORS.primary,
          }}
            onPress = {() => {
              if(!readMore){
                setText(data.description)
                setreadMore(true)
              }else{
                setText(data.description.slice(0,100))
                setreadMore(false)
              }
            }}>
            {readMore ? 'Show Less' : 'Show More'}
          </Text>
        </Text>
      </View>
    </>
  )
}

export default DetailsDesc