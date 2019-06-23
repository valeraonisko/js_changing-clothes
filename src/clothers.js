'use strict';
let clothers;

function getClothersList() {
  const state = store.getState();
  return state.clothers.reduce((sum, clother, i) => {
    let line;
    if (i === state.selectedIndex) {
      if (state.inEdit) {
        line = `<input id="input" value="${clother}" onkeydown="inputHandler()">`;
      } else {
        line = `<li id="${i}">${clother}<button id="edit" onclick="editClickHandler()">Edit</button></li>`
      }

    } else {
      if (state.inEdit) {
        line = `<li id="${i}">${clother}</li>`;
      } else {
        line = `<li id="${i}" onclick="listClickHandler()">${clother}</li>`;
      }

    }
    return sum += line;
  },'');
}

function listClickHandler(event) {
  event = event|| window.event;
  const id = +(event.target.id);
  if (!isNaN(id)) {
    store.dispatch(getSelectAction(id));
  }
}

function editClickHandler(event) {
  store.dispatch(getEditAction());
}

function inputHandler(event) {
  event = event|| window.event;
  if (event.key === 'Enter') {
    store.dispatch(getApplyAction(event.target.value));
  } else if (event.key === 'Escape') {
      store.dispatch(getCancelAction());
    }
}
function updateClothers() {
    clothers.innerHTML = getClothersList();
}

function initClothers() {

  clothers = document.getElementById('clothers');


    store.subscribe(() => {
        updateClothers();
    });

    updateClothers();
}
