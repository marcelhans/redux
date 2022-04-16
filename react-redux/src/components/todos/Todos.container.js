import { loadTodos } from "../../action-creators/todos"
import { Todos } from "./Todos.component"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return {
        todos: state.todos.slice(0, 10)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadTodos: (payload) => dispatch(loadTodos(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
   