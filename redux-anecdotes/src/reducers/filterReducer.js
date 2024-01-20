/* eslint-disable no-case-declarations */


const filterReducer = (state = [{ value: "" }], action) => {
  switch (action.type) {
    case 'FILTER_BY_ANECDOTE':
      let value = action.payload.value
      return { ...state, value }
    default:
      return state
  }
};

export const filterByAnecdote = payload => ({
  type: 'FILTER_BY_ANECDOTE',
  payload: payload
})

export default filterReducer