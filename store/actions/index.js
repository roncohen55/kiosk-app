export const GET_STORES = 'GET_STORES';
const baseUrl = 'http://localhost:5090/api/';


export const get_stores_action = ()=>{

    return async dispatch =>{
        const response = await fetch(baseUrl + 'store/getGeneralData',{
            method:'get',
            headers:{
                'Content-Type':'application/json'
            }
        }); 

        const data = await response.json();
        console.log(data);
        console.log('4');
        if(data.status){

            dispatch(get_stores_dispath(data));
        }
        else{
            let message = data.message;
            throw new Error(message);
        }
    }
      
}

export const get_stores_dispath = (data)=>{
    return dispatch =>{
        dispatch({type: GET_STORES ,data})
    }
}


