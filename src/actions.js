'use strict';

const SELECT = 'clothers_select';
const EDIT = 'clothers_edit';
const APPLY_EDIT = 'clothers_apply_edit';
const CANCEL_EDIT = 'clothers_cancel_edit';

function getSelectAction(index) {
    return {
        type: SELECT,
        index: index
    };
}

function getEditAction() {
    return {
        type: EDIT
    };
}

function getApplyAction(inputValue) {
    return {
        type: APPLY_EDIT,
        inputValue: inputValue
    };
}

function getCancelAction() {
    return {
        type: CANCEL_EDIT,
    };
}
