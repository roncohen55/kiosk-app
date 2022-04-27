import { StyleSheet, Text, View,ActivityIndicator ,TouchableOpacity, FlatList , Image } from 'react-native';
import React , {useEffect,useState , useCallback} from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import appColor from '../src/utilis/appColor';
import Entypo from "react-native-vector-icons/Entypo";


const StoreItem = props =>{

    return(
        <TouchableOpacity onPress={props.onClick} style={Style.row}>
              <View style={{padding:5}}>
                  <Image  source={{uri: props.store.logo}} style = {Style.logo} />
              </View>
            <View style={{padding:10}}>
            <Text style={{fontSize:20 , fontWeight:'600'}}>{props.store.storeName}</Text>
            <Text style={{fontSize:20 , fontWeight:'300'}}>{props.store.contactInfo.address} || {props.store.contactInfo.city} </Text>
            </View>
            <View style={{padding:10}}>
                <View>
                {
                    props.store.isDelivery ? (<MaterialIcons   name="delivery-dining" color={appColor.happy_green} size={32} />) : (<View></View>)
                }
                </View>
                <View>
                {
                    props.store.isTakeaway ? (<Entypo name="shopping-bag" color={appColor.orange} size={26} />) : (<View></View>)
                }
                </View>
            </View>


        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    row:{
        marginTop:12,
        width:'100%',
        paddingVertical:15,
        flexDirection:'row',
        borderRadius:12,

    },
    logo:{width:60 , height:60}
});

export default StoreItem;