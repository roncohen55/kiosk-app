import { StyleSheet, Text, View,ActivityIndicator,TouchableOpacity , FlatList } from 'react-native';
import React , {useEffect,useState , useCallback} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import Colors from '../../utilis/appColor';
import StoreItem from '../../../components/StoreItem';


const StoresScreen = props=> {

 
    const allStores = useSelector((state)=> state.allStores);

    return (
        <View>
            {
                allStores.allStores.stores.length > 0 ? (
                  <FlatList 
                  
                  data ={allStores.allStores.stores}
                  keyExtractor={item => item._id}
                  renderItem={store => <StoreItem store={store.item }  onClick={()=> {props.navigation.navigate("StoresInfo", {data:store.item})}} />
                
                
                
                }

                  />
                ):(
                    <Text>store</Text>
                )
            }
            
           
            
        </View>
    )
}

export default StoresScreen;