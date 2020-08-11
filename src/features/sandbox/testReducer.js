export const INCREMENT_OPERATOR = "INCREMENT_OPERATOR"
export const DECREMENT_OPERATOR = "DECREMENT_OPERATOR"
const initialState = {
    data : 40
}

export function increment(amount){
    return{
        type: INCREMENT_OPERATOR,
        payload : amount
    }
}
export function decrement(amount){
    return{
        type: DECREMENT_OPERATOR,
        payload : amount
    }
}

export default function testReducer(state=initialState,{type,payload}){
    switch(type){
        case INCREMENT_OPERATOR:
            return{
                ...state,
                data : state.data+payload
            }
            case DECREMENT_OPERATOR:
                return{
                    ...state,
                    data : state.data-payload
                }
                default :
                return state;
    
    }
}