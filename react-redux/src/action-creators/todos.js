export const loadTodos = () =>
  async (dispatch) => {
    dispatch({ type: 'todos/initiated', payload: {} })
    try {
      const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      dispatch({
        type: 'todos/success',
        payload: todos
      })
    } catch (e) {
      dispatch({ type: 'todos/error', payload: e })
    };
 }


window.loadTodos = loadTodos
