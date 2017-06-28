import axios from 'axios';
import {AUTH_USER} from './types';
import {browserHistory} from 'react-router';

const ROOT_URL = 'http://localhost:3000'; 

export function signinUser({email, password}) {
	return function(dispatch) {
		axios.post(`${ROOT_URL}/signup`, {email, password})
			.then((response)=>{
				dispatch({type: AUTH_USER});
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(()=>{
				console.log('err');
			});
	}
}

