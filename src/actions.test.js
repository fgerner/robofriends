import * as actions from './actions';
import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants';

import configureMockStore from 'redux-mock-store';
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware])

describe('setSearchField', function () {
    it('should create action to search robots', function () {
        const text = 'aa';
        const expectedAction = {
            type: CHANGE_SEARCH_FIELD,
            payload: text
        };
        expect(actions.setSearchField(text)).toEqual(expectedAction);
    });
});
describe('request robots', () => {
    const store = mockStore();
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
        type: REQUEST_ROBOTS_PENDING
    };
    expect(action[0]).toEqual(expectedAction)
})