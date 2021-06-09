import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Image} from 'react-native-elements'
import {FONT_SIZES,FONT_MED,FONT_BOLD} from '@components/styles'


export default function CardDasbord(props) {
    const  {title,image,data,footer,color} = props;

    return (
    <View style={{flex:1}}>
        <View style={[styles.main,{ backgroundColor: color}]}>
             <View style={{flexDirection:'row',padding:10}}>
               <Text style={{textAlign:'left',color:'#ffffff',fontFamily:FONT_BOLD}}>{title}</Text>
             </View>
            <View style={{flexDirection:'row',padding:10}}>
                 <View style={{flex:0.6}}>
                   <Image style={{width:30,height:30}} resizeMode="cover" source={image} />
                 </View>
                 <View style={{flex:0.4}}> 
                    <Text style={{textAlign:'right',color:'#ffffff',fontFamily:FONT_MED,fontSize:FONT_SIZES['400']}}>{data}</Text>
                 </View>
             </View>
             <View style={{flexDirection:'row',padding:10}}>
                  <View style={{borderTopWidth:0.5,width:165,padding:5,borderTopColor:'#ffffff' }}>
                  <Text style={{textAlign:'right',color:'#ffffff',fontFamily:FONT_MED,fontSize:FONT_SIZES['200']}}>{footer}</Text>
                  </View>
             </View>
        </View>
     </View>
        
    )
}

const styles = StyleSheet.create({
    main: {
        elevation: 3,
        marginLeft: 10,
        marginTop: 20,
        borderRadius: 15,
        marginBottom: 10,
        width: 185,
        paddingBottom: 15,
        height: 130
    }
  });

