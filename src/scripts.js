'use strict';

let initialState = {
    clothers: [
      'Apron',
      'Belt',
      'Cardigan',
      'Dress',
      'Earrings',
      'Fur',
      'Coat',
      'Gloves',
      'Hat'
    ],

    selectedIndex: -1,
    inEdit: false
};

function getNextState(state = initialState, action) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selectedIndex: +(action.index)
      };
    case EDIT:
      return {
        ...state,
        inEdit: true
      };
    case APPLY_EDIT:
      let newClothers = state.clothers;
      if (action.inputValue === '') {
        newClothers.splice(state.selectedIndex, 1);
      } else {
        newClothers[state.selectedIndex] = action.inputValue;
      }
      return {
        ...state,
        clothers: newClothers,
        inEdit: false,
        selectedIndex: -1
      };
    case CANCEL_EDIT:
      return {
        ...state,
        inEdit: false,
        selectedIndex: -1
      };
    default:
      return state;
  }
}

const store = Redux.createStore(getNextState);

initClothers(store);
