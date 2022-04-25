import { StyleSheet, Text, View,ActivityIndicator , FlatList } from 'react-native';
import React , {useEffect,useState , useCallback} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import * as storeActions from '../../../store/actions';
import Colors from '../../utilis/appColor';


const StoresScreen = props=> {

    const dispatch = useDispatch();

    const [isLoading , setIsLoading] = useState(false);

    const getAllStores = useCallback(async ()=> {
        console.log('1');
        let action = storeActions.get_stores_action();

        setIsLoading(true);
        try{
            console.log('2');
            await dispatch(action);
            setIsLoading(false);

        }
        catch(err){
            setIsLoading(false);
        }
    }, [setIsLoading , dispatch ,storeActions.get_stores_action]);

    useEffect (()=>{
        getAllStores();
    }, [getAllStores]);

    const allStores = useSelector((state)=> state.allStores);

    console.log(JSON.stringify(allStores));

    return (
        <View>
            {
            isLoading ? (
                <ActivityIndicator size ='large' color = {Colors.happy_green} />
            )
            :
            (<Text>store</Text>)
            }
            
        </View>
    )
}

export default StoresScreen;