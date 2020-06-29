
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
                isActive:false
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
            if(state.move >= 75){ // the width of child is 25% of parent div - width is expressed in % 
                return{
                    ...state,
                    move:75
                }
            }
            return{
                ...state,
                move: state.move + 5 // + 5% === width of child div
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
                move:state.move - 5 // - 5% === width of child div
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
            /*if(state.moveOpponent <= 0){
                return{
                    ...state,
                    moveOpponent: state.moveOpponent + 5
                }
            }*/
            return{
                ...state,
                moveOpponent:state.moveOpponent - 5
            }

        case 'OPPONENT_RIGHT':
            /*if(state.moveOpponent >= 75){
                return{
                    ...state,
                    moveOpponent:state.moveOpponent - 5
                }
            }*/
            return{
                ...state,
                moveOpponent:state.moveOpponent + 5 // - 5% === width of child div
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

        default: return state
    }
}

export default SlideReducer;