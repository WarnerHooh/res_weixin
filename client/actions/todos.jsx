
import { createAction } from 'redux-actions'
import { UPDATE_LOCATION } from 'react-router-redux'

export const addTodo = createAction('add todo')
export const deleteTodo = createAction('delete todo')
export const editTodo = createAction('edit todo')
export const completeTodo = createAction('complete todo')
export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear complete')
export const upadate_location = createAction(UPDATE_LOCATION)

// export const clearCompleted = createAction(UPDATE_LOCATION)
