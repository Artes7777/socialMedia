import React, {useCallback} from 'react';
import Header from './Header';
import {useDispatch, useSelector} from 'react-redux';
import {logoutProfile} from '../store/Auth/actions';

const HeaderContainer = () => {
  
  const myData = useSelector((state) => state.auth)
  const dispatch = useDispatch();
 
  const logout = useCallback( () => {
    dispatch(logoutProfile());
  }, [dispatch])
 
    return (
    <Header 
      myData = {myData}
      logout = {logout} 
    />
  )
}

export default HeaderContainer;