import React, { useEffect } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import {setMyProfile} from '../store/Auth/actions';

const HeaderContainer = () => {
  
  const myData = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  
  useEffect( () => {
    dispatch(setMyProfile()) }, [])

    return (
    <Header myData = {myData} />
  )
}

export default HeaderContainer;