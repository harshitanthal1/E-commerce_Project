import { signUp as signUpService, login as loginService } from '../../services/authService';

export const signUp = (username, password) => async (dispatch) => {
  try {
    const user = await signUpService(username, password);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: { user } });
  } catch (error) {
    
  }
};

export const login = (username, password) => async (dispatch) => {
  try {
    const user = await loginService(username, password);
    dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
  } catch (error) {
    
  }
};

export const logout = () => ({ type: 'LOGOUT_SUCCESS' });
