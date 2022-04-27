import { StyleSheet, Text, View,ActivityIndicator,Image , FlatList } from 'react-native';
import React , {useEffect,useState , useCallback} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Colors from '../../utilis/appColor';
import StoreItemInfo from '../../../components/storeItemInfo';

const StoresInfoScreen = props=> {


    const allStores = useSelector((state)=> state.allStores);

    return (
        <View>
           <Image source={{uri: props.route.params.data.logo}} style = {{width:60 ,height:60}} />
           
            
        </View>
    )
}

export default StoresInfoScreen; 