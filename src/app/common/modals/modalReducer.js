const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export function openModal(payload){
    return{
        type : OPEN_MODAL,
        payload
    }
}
export function closeModal(payload){
    return{
        type : CLOSE_MODAL,
        payload
    }
}

const initalState = null
export default function modalReducer(state=initalState,{type,payload}){
    switch(type){
        case OPEN_MODAL:
            const {modalType,modalprops} = payload
            return {modalType,modalprops}
        case CLOSE_MODAL:
            return null
        default:
            return state
    }
}