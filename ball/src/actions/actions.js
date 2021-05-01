//ball

export const BallStart =()=>({
    type:'BALL_START'
})

export const BallStats =(top,bottom,left,right,height,leftOffset,topOffset)=>({
    type:'BALL_STATS',
    top,
    bottom,
    left,
    right,
    height,
    leftOffset,
    topOffset
})

export const FirstBallData =(left,top)=>({
    type: 'FIRST_BALL_DATA',
    left,
    top
})

export const ResetBall =(top,left)=>({
    type:'RESET_BALL',
    top,
    left
})

export const UpDown =(up,down,mid)=>({
    type:'UP_DOWN',
    up,
    down,
    mid
})

export const BallMoveDown =(top,left)=>({
    type:'BALL_MOVE_DOWN',
    top,
    left,
})

export const BallMoveTop =(top,left)=>({
    type:'BALL_MOVE_TOP',
    top,
    left,
})

export const BallMidUp =(top,left,midField)=>({
    type:'BALL_MID_UP',
    top,
    left,
    midField
})

export const BounceFirstLeft =(top,left)=>({
    type:'BOUNCE_FIRST_LEFT',
    top,
    left
})

export const BounceSecondLeft =(top,left)=>({
    type:'BOUNCE_SECOND_LEFT',
    top,
    left
})

export const BounceThirdRight =(top,left)=>({
    type:'BOUNCE_THIRD_RIGHT',
    top,
    left
})

export const BallFourthRight =(top,left)=>({
    type:'BOUNCE_FOURTH_RIGHT',
    top,
    left
})

export const BallMidDown=(top,left)=>({
    type:'BALL_MID_DOWN',
    top,
    left
})

export const BounceRight =(top,left)=>({
    type:'BOUNCE_RIGHT',
    top,
    left
})

export const BounceLeft =(top,left)=>({
    type:'BOUNCE_LEFT',
    top,
    left
})

export const MoveBallToLeft=(left)=>({
    type:'MOVE_BALL_TO_LEFT',
    left
})

export const MoveBallToRight=(left)=>({
    type:'MOVE_BALL_TO_RIGHT',
    left
})

// playground:

export const PlaygroundData =(right,left,top,bottom,height)=>({
    type:'PLAYGROUND_DATA',
    right,
    left,
    top,
    bottom,
    height
})

export const GoalColor =(isGoalHome,isGoalAway)=>({
    type:'GOAL_COLOR',
    isGoalHome,
    isGoalAway
})

export const ReturnHomepage =()=>({
    type:'RETURN_HOMEPAGE'
})


//teams:

export const AddTeam =(payload)=>({
    type:'ADD_TEAM',
    payload
})

export const DeleteTeam =(payload)=>({
    type:'DELETE_TEAM',
    payload
})

export const EkstraklasaAction =()=>({
    type:'EKSTRAKLASA_ACTION'
})

export const Teams =(payload)=>({
    type:'TEAMs',
    payload
})

//goalkeeper

export const GoalKeeper =(top,width,left,right)=>({
    type:'GOALKEEPER',
    top,
    width,
    left,
    right
})

export const MoveLeft =(left,top)=>({
    type:'MOVE_LEFT',
    left,
    top
}) 

export const MoveRight =(right,top)=>({
    type:'MOVE_RIGHT',
    right,
    top
})

export const PlaygroundStats =(left,right)=>({
    type:'PLAYGROUND_STATS',
    left,
    right
})

//opponent

export const OpponentData =(left,bottom,width,right)=>({
    type:'OPPONENT_FIRST_DATA',
    left,
    bottom,
    width,
    right
})

export const OpponentMoveLeft =(left)=>({
    type:'OPPONENT_LEFT',
    left
})

export const OpponentMoveRight =(left)=>({
    type:'OPPONENT_RIGHT',
    left
})

export const OpponentAutoMove =(left,right)=>({
    type:'OPPONENT_AUTO_MOVE',
    left,
    right
})

//reset 

export const ResetSlide =()=>({
    type:'RESET_SLIDE'
})

export const ResetBallState =()=>({
    type:'RESET_BALL_STATE'
})


//run playground

export const RunPlayground =(isActive)=>({
    type:'RUN_PLAYGROUND',
    isActive
})

//playground middleware

export const LoadingElement =(isLoad)=>({
    type:'LOADING_ELEMENT',
    isLoad
})

export const LoadingMiddleware =()=>{
    return dispatch =>{
        dispatch(LoadingElement())
        setTimeout(() => {
            dispatch(RunPlayground())
        }, 5000);
    }
}

//score 

export const HomeScore =()=>({
    type:'HOME_SCORE'
})

export const AwayScore =()=>({
    type:'AWAY_SCORE'
})
