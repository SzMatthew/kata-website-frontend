import React, { createContext, useContext, useMemo, useReducer } from 'react';
import ApiCalls from '../Utils/ApiCalls';

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
      case 'SET_CONSULTATIONS': {
        return { consultations: action.payload };
      }
      case 'SET_ABOUT_ME': {
        return { aboutMe: action.payload };
      }
      case 'SET_CONTACTS': {
        return { contacts: action.payload }
      }
      case 'SET_INITIALE_CONTEXT': {
        return {
          consultations: action.payload.consultations,
          aboutMe: action.payload.aboutMe,
          contacts: action.payload.contacts
        }
      }
      default: {
          throw new Error(`Unsupported action type: ${action.type}`);
      }
  }
};

const AppProvider = props => {
  const [state, dispatch] = useReducer(appReducer, { consultations: null, aboutMe: null, contacts: null });
  const value = useMemo(() => [state, dispatch], [state]);
  return <AppContext.Provider value={value} {...props} />;
};

const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  const [state, dispatch] = context;

  const setConsultations = consultations => {
    if (state.consultations !== consultations) {
      dispatch({type: 'SET_CONSULTATIONS', payload: consultations});
    }
  };

  const setAboutMe = aboutMe => {
    if (state.aboutMe !== aboutMe) {
      dispatch({type: 'SET_ABOUT_ME', payload: aboutMe});
    }
  };

  const setContacts = contacts => {
    if (state.contacts !== contacts) {
      dispatch({type: 'SET_CONTACTS', payload: contacts});
    }
  };

  const initialLoading = async() => {
    const consultations = await ApiCalls.getConsultations();
    const contacts = await ApiCalls.getConstacts();
    const aboutMe = {};
    dispatch({type: 'SET_INITIALE_CONTEXT', payload: {consultations,aboutMe,contacts}});
  };

  return {
      state,
      dispatch,
      setConsultations,
      setAboutMe,
      setContacts,
      initialLoading
  };
};

export { useAppContext, AppProvider };