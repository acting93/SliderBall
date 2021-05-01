
const states = {
    move:null,//left-right move goalkkeper
    isActive:false,
    isPlaygroundActive:false,
    rightPlayground:null,
    leftPlayground:null,
    widthOpponent:null,
    moveOpponent:null,
    LeftOpponent:null,
    bottomOpponent:null,
    rightOpponent:null,
}

const SlideReducer =(state=states,action)=>{
    switch(action.type){

        case 'RUN_PLAYGROUND':
            return{
                ...state,
                isPlaygroundActive:true,
                isActive:false
            }
        
        case 'RETURN_HOMEPAGE':
            return{
                ...state,
                isPlaygroundActive:false,
                isActive:false,
            }
        
        case 'LOADING_ELEMENT':
            return{
                ...state,
                isActive:true
            }
        //goalkeeper
        case 'GOALKEEPER':
            return{
                ...state,
                tileTop: action.top,
                widthTile: action.width,
                tileLeft:action.left,
                tileRight:action.right
            }

        case 'MOVE_RIGHT':
            if(state.move >= 70){
                return{
                    ...state,
                    move:70
                }
            }
            return{
                ...state,
                move: state.move + 5
            }

        case 'MOVE_LEFT':
            if(state.move <= 0){
                return{
                    ...state,
                    move:0
                }
            }
            return{
                ...state,
                move:state.move - 5
            }
        //opponent

        case 'OPPONENT_FIRST_DATA':
            return{
                ...state,
                leftOpponent:action.left,
                widthOpponent:action.width,
                bottomOpponent:action.bottom,
                rightOpponent:action.right
            }    

        case 'OPPONENT_LEFT':
            return{
                ...state,
                moveOpponent:state.moveOpponent - 5
            }

        case 'OPPONENT_RIGHT':
            return{
                ...state,
                moveOpponent:state.moveOpponent + 5 
            }

        case 'OPPONENT_AUTO_MOVE':
            return{
                ...state,
                isLeft:action.left,
                isRight:action.right
            }

        //playground
        case 'PLAYGROUND_DATA':
            return{
                ...state,
                rightPlayground: action.right,
                leftPlayground: action.left,
                topPlayground: action.top,
                bottomPlayground: action.bottom,
                heightPlayground:action.height
            }
        case'LOADING':
            return{
                isActive: action.isActive
            }
        
        case 'RESET_SLIDE':
            return{
                ...state,
                move:null,
                isActive:false,
                isPlaygroundActive:false,
                rightPlayground:null,
                leftPlayground:null,
                widthOpponent:null,
                moveOpponent:null,
                LeftOpponent:null,
                bottomOpponent:null,
                rightOpponent:null
            }

        default: return state
    }
}

export default SlideReducer;