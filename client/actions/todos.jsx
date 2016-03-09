
import { createAction } from 'redux-actions'
import { UPDATE_LOCATION, routerActions } from 'react-router-redux'
import reqwest from 'reqwest'
import * as appcfg from '../constants/appcfg'

export const upadate_location = createAction(UPDATE_LOCATION)
export const addTiles = createAction('add tiles')//新增磁贴

/****thunk中间件****/

//pushUrl
export const pushUrl = (url,params) => {
	return (dispatch, getState) => {
		dispatch(routerActions.push(url))
	}
}

export const sendXHR = (servId,reqData='',action,pathname) => {
	// let {header,data} = reqData
		
	return (dispatch, getState) => {

		let { APP_VERSION, APP_XHR_URL } = appcfg

		let { userId } = getState().appData.user
		let header = {
			'APP_OP_CODE':servId,
			'APP_OP_USER_ID':72,
			'APP_OP_TOKEN':'',
			'APP_OP_VERSION':APP_VERSION
		}
		reqwest({
			url: APP_XHR_URL,
			type:'json',
			// contentType:'application/json',
			method: 'post',
			headers:header,
			crossOrigin: true,
			// withCredentials: true,
			data: reqData,
			error: function (err) { 
				console.error(`error:${err.statusText}`)
			},
			success: function (resp) {
				console.log('---------------respData---------------')
				console.log(resp)
				console.log('---------------respData---------------')
				if(resp.APP_OP_RESULT == '1'){
					//报文无异常
					// console.log(getState().routing);
					let dispatchData = [resp.APP_OP_CONTENT,pathname]
					action(dispatchData)
				}else{
					//服务器错误处理
					
				}
				
			}
		})
	}
}


