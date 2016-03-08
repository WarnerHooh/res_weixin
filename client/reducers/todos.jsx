
import { handleActions } from 'redux-actions'
import { UPDATE_LOCATION } from 'react-router-redux'

const initialState = {
	user:{
		userId:'72',
		userName:'',
		userAvatar:'',
		userType:''
	},
	RmsIndex:{
		tiles:[]
	}
}

export default handleActions({
	'add tiles' :(state, action)=>{
		console.log(action.payload)
		const [tiles, pathname] = action.payload
		state[pathname].tiles = tiles
		// state.RmsIndex.tiles = [
		// 	{
		// 		catgId: 1466,
		// 		menuName: "微课"
		// 	},{
		// 		catgId: 1466,
		// 		menuName: "微课"
		// 	},{
		// 		catgId: 1466,
		// 		menuName: "微课"
		// 	},{
		// 		catgId: 1466,
		// 		menuName: "微课"
		// 	}

		// ]
		return state
	}
}, initialState)
