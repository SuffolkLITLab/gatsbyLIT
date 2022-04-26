import React, { createContext, useReducer } from "react"

export const globalStateContext = createContext()
export const globalDispatchContext = createContext()

const initialState = {
  lang: "en-US",
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_ENG": {
      return {
        ...state,
        lang: (state.lang = "en-US"),
      }
    }
    case "CHANGE_ES": {
      return {
        ...state,
        lang: (state.lang = "es"),
      }
    }
    case "RETURN_LANG": {
      return state.lang
    }
    default:
      throw new Error("BAD ACTION TYPE")
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <globalStateContext.Provider value={state}>
      <globalDispatchContext.Provider value={dispatch}>
        {children}
      </globalDispatchContext.Provider>
    </globalStateContext.Provider>
  )
}

export default GlobalContextProvider
