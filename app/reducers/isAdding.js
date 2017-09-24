var isAddingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_IS_ADDING':
      return !state.isAdding;
    default:
      return state;
  }
}

module.exports = isAddingReducer;
