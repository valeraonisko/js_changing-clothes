'use strict';
let clothers;

function getClotherContainer(store) {
  const state = store.getState();
  const container = document.createElement('div');
  container.className = 'container';
  state.clothers.forEach((clother, i) => {
    if (i === state.selectedIndex) {
      if (state.inEdit) {
        const input = document.createElement('input');
        input.id = "input";
        input.setAttribute("value", `${clother}`);
        input.addEventListener("keydown", inputHandler);
        container.appendChild(input);
      } else {
        const li = document.createElement('li');
        li.id = `${i}`;
        li.textContent = `${clother}`;
        const btn = document.createElement('button');
        btn.id = "edit";
        btn.textContent = 'Edit';
        btn.addEventListener("click", editClickHandler);
        li.appendChild(btn);
        container.appendChild(li);
      }
    } else {
      const li = document.createElement('li');
      li.id = `${i}`;
      li.textContent = `${clother}`;
      if (!state.inEdit) {
        li.addEventListener("click", listClickHandler, false);
      }
      container.appendChild(li);
    }
  })
  return container;
}

function listClickHandler (event) {
  const id = +(event.target.id);
  if (!isNaN(id)) {
    store.dispatch(getSelectAction(id));
  }
}

const editClickHandler = function (event) {
  store.dispatch(getEditAction());
}

const inputHandler = function (event) {
  if (event.key === 'Enter') {
    store.dispatch(getApplyAction(event.target.value));
  } else if (event.key === 'Escape') {
      store.dispatch(getCancelAction());
    }
}
function updateClothers(store) {
  if (clothers.firstChild) {
    clothers.removeChild(clothers.firstChild);
  }
  clothers.appendChild(getClotherContainer(store));
}

function initClothers(store) {
  clothers = document.getElementById('clothers');

  store.subscribe(() => {
    updateClothers(store);
  });

  updateClothers(store);
}
