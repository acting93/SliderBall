import Ekstraklasa from '../arrays/EkstraklasaArray.json'

const leagues = {
    ekstraklasa:[],
    teams:[],
    homeScore:0,
    awayScore:0,
    goalColorHome:false,
    goalColorAway:false
}

const TeamsReducer =(state=leagues,action)=>{
    
    switch(action.type){
        case 'EKSTRAKLASA_ACTION':
            let ekstraklasaParse = JSON.parse(JSON.stringify(Ekstraklasa))
            return {
                ...state,
                ekstraklasa: ekstraklasaParse.ekstraklasa
            }

        case 'TEAMS':
            let clubs = [...state.ekstraklasa];
            clubs.findIndex(item =>{
                if(item.id === action.payload){
                    item.active = !item.active
                    return item
                }
            })
           
            return{
                ...state,
               ekstraklasa:clubs
            }

        case 'ADD_TEAM':
            let getClubs = [...state.ekstraklasa];
            let addTeam = [...state.teams];
            let filterActive = getClubs.filter(item =>{
                if(item.id === action.payload){
                    if(item.active === true){
                        return item 
                    }
                }
            })
            let concat = addTeam.concat(filterActive)

            return{
                ...state,
                teams:concat
            }

        case 'DELETE_TEAM':
            let deleteTeam = [...state.teams];
            const index = deleteTeam.findIndex(item => {
                if(item.active === false){
                    return item.id
                }
            });
            deleteTeam.splice(index,1)    

            return{
                ...state,
                teams:deleteTeam
            }

        case 'HOME_SCORE':
            return{
                ...state,
                homeScore: state.homeScore +1
            }
        
        case 'AWAY_SCORE':
            return{
                ...state,
                awayScore: state.awayScore +1
            }

        case 'GOAL_COLOR':
            return{
                ...state,
                goalColorHome: action.isGoalHome,
                goalColorAway: action.isGoalAway
            }
        
        case 'RETURN_HOMEPAGE':
            return{
                ...state,
                teams:[],
                homeScore:0,
                awayScore:0,
                goalColorHome:false,
                goalColorAway:false
            }

        default: return state
    }
}

export default TeamsReducer;