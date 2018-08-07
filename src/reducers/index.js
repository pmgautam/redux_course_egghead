import {combineReducers} from "redux";
import {visibilityFilter} from "./visibility_filter_reducer";
import {todos} from "./todos_reducer";

const todoApp = combineReducers(
    {
        todos,
        visibilityFilter
    }
)

export default todoApp