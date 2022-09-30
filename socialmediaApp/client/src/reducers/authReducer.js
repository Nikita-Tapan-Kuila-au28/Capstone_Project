

const initialState={
    data:""
}


const authReducer=(state={data: null,loading:false,error:false},action)=>{
    switch(action.type){
        case "AUTH_START":
            return{
                ...state,
                loading:true,
                error:false,
          
        };
        case"AUTH_SUCCESS":
        localStorage.setItem("Profile",JSON.stringify({...action.data}))
        return{
            ...state,
            error:false,
            loading: false,
            data:action.data
        };
        case"AUTH_FAIL":
        return{
            ...state,
            error:true,
            loading:false
        }
        default:
            return state

     
    }
}

export default authReducer;