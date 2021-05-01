import {combineReducers} from 'redux';
import TeamsReducer from './TeamsReducer';
import SlideReducer from './SlideReducer';
import BallConditionsMove from './BallConditionsMove';

const rootReducer = combineReducers({
    ekstraklasa: TeamsReducer,
    playground: SlideReducer,
    conditions: BallConditionsMove
})

export default rootReducer;