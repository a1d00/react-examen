import { SET_FORM_DATA, CLEAR_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
    password: 'mod7ReactUSIP',
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA: {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        }
        case CLEAR_FORM_DATA : {
            return {
                ...state,
                formData: initialState.formData,
            }
        }
        default:
            return state;
    }
};

export default formReducer;