const condition = {
    isTop: false,
    midField:null,
    straightBottom: null,
    straightTop:null,
    midTile:null,
    firstPartTile:null,
    secondPartTile:null,
    fourthPartTile:null,
    thirdPartTile:null,
    bounceRight:null,
    bounceLeft:null,
    up:false,
    down:false,
    ballStart:false
}

const ballConditionsMove =(state=condition,action)=>{
    switch(action.type){
        case 'BALL_STATS':
            return{
                ...state,
                ballLeft: action.left,
                ballRight: action.right,
                ballTop: action.top,
                ballBottom: action.bottom,
                ballHeight:action.height,
                ballTopPosition:action.topOffset
            }

        case 'BALL_START':
            return{
                ...state,
                ballStart: true
            }
        
        case 'FIRST_BALL_DATA':
            return{
                ...state,
                ballTopPosition:action.top,
                ballLeftPosition:action.left

            }

        case 'BALL_MOVE_DOWN':
            return{
                ...state,
                ballTopPosition:state.ballTopPosition + state.ballHeight,
            }

        case 'BALL_MOVE_TOP':
            return{
                ...state,
                ballTopPosition:state.ballTopPosition - state.ballHeight,
            }
        
        case 'UP_DOWN':
            return{
                ...state,
                up:action.up,
                down:action.down,
                midField:action.midField
            }

        case 'BALL_MID_UP':
            return{
                ...state,
                midTile:true,
                firstPartTile:false,
                secondPartTile:false,
                fourthPartTile:false,
                thirdPartTile:false,
            }
            
        case 'BALL_MID_DOWN':
            return{
                ...state,
                midTile:true,
                firstPartTile:false,
                secondPartTile:false,
                fourthPartTile:false,
                thirdPartTile:false,
                bounceRight:false,
                bounceLeft:false
            }
        
        case 'BALL_FIRST_LEFT':
            return{
                ...state,
                mid:false,
                firstPartTile:true,
                secondPartTile:false,
                fourthPartTile:false,
                thirdPartTile:false,
                bounceRight:false,
                bounceLeft:false
            }

        case 'BALL_SECOND_LEFT':
            return{
                ...state,
                mid:false,
                secondPartTile:true,
                firstPartTile:false,
                fourthPartTile:false,
                thirdPartTile:false,
                bounceRight:false,
                bounceLeft:false
            }

        case 'BALL_FOURTH_RIGHT':
            return{
                ...state,
                mid:false,
                fourthPartTile:true,
                thirdPartTile:false,
                secondPartTile:false,
                firstPartTile:false,
                bounceRight:false,
                bounceLeft:false
            }

        case 'BALL_THIRD_RIGHT':
            return{
                ...state,
                mid:false,
                thirdPartTile:true,
                fourthPartTile:false,
                secondPartTile:false,
                firstPartTile:false,
                bounceRight:false,
                bounceLeft:false
            }
        
        case 'BOUNCE_RIGHT':
            return{
                ...state,
                bounceRight:true,
                mid:false,
                bounceLeft:false,
                thirdPartTile:false,
                fourthPartTile:false,
                secondPartTile:false,
                firstPartTile:false
            }

        case 'BOUNCE_LEFT':
            return{
                ...state,
                bounceLeft:true,
                mid:false,
                bounceRight:false,
                thirdPartTile:false,
                fourthPartTile:false,
                secondPartTile:false,
                firstPartTile:false
            }

        case 'MOVE_BALL_TO_LEFT':
            return{
                ...state,
                ballLeftPosition:state.ballLeftPosition + action.left
            }
            
        case 'RESET_BALL':
            return{
                ...state,
                ballLeftPosition: action.left,
                ballTopPosition:action.top
            }
        
        case 'RESET_BALL_STATE':
            return{
                isTop: false,
                midField:null,
                straightBottom: null,
                straightTop:null,
                midTile:null,
                firstPartTile:null,
                secondPartTile:null,
                fourthPartTile:null,
                thirdPartTile:null,
                bounceRight:null,
                bounceLeft:null,
                up:false,
                down:false,
                ballStart:false
            }


        default: return state
    }
}

export default ballConditionsMove;