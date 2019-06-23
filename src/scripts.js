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
  let newState;
  switch (action.type) {
      case SELECT:
          newState = {
              ...state,
              selectedIndex: +(action.index)
          };
          console.log(newState);
          break;
      case EDIT:
          newState = {
              ...state,
              inEdit: true
          };
          console.log(newState);
          break;
      case APPLY_EDIT:
          let newClothers = state.clothers;
          if (action.inputValue === '') {
            newClothers.splice(state.selectedIndex, 1);
          } else {
            newClothers[state.selectedIndex] = action.inputValue;
          }
          newState = {
              ...state,
              clothers: newClothers,
              inEdit: false,
              selectedIndex: -1
          };
          console.log(newState);
          break;
      case CANCEL_EDIT:
          newState = {
              ...state,
              inEdit: false,
              selectedIndex: -1
          };
          break;
      default:
          newState = state;
  }
  return newState;
}

const store = Redux.createStore(getNextState);

initClothers();
