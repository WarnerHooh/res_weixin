
import { createAction } from 'redux-actions'
import { UPDATE_LOCATION } from 'react-router-redux'
import reqwest from 'reqwest'

export const addTodo = createAction('add todo')
export const deleteTodo = createAction('delete todo')
export const editTodo = createAction('edit todo')
export const completeTodo = createAction('complete todo')
export const completeAll = createAction('complete all')
export const clearCompleted = createAction('clear complete')
export const upadate_location = createAction(UPDATE_LOCATION)
export const testMidWare = () => {
	return (dispatch, getState) => {
		reqwest({
			url: 'http://localhost:10086/users',
			type:'json',
			method: 'get',
			data: {limit:4,offset:10},
			error: function (err) { 
				console.log('fail')
				console.error(`error:${err.statusText}`)
			},
			success: function (resp) {
				console.log(resp)
				dispatch(addTodo())
			}
		})
	}
}


