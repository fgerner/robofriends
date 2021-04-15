import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAIL
} from './constants';
import * as reducers from './reducers';

describe('searchRobots', () => {
    const initialStateSearch = {
        searchField: ''
    };

    it('should return the initial state', function () {
        expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''});
    });

    it('should handle CHANGE_SEARCH_FIELD', function () {
        expect(reducers.searchRobots(initialStateSearch, {
            type: CHANGE_SEARCH_FIELD,
            payload: 'abc'
        })).toEqual({
            searchField: 'abc'
        })
    });
})
describe('requestRobots', () => {
    const initialStateRobots = {
        isPending: false,
        robots: []
    }
    it('should return the initial state', function () {
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
    });

    it('should handle REQUEST_ROBOTS_PENDING', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_PENDING
        })).toEqual({
            robots: [],
            isPending: true
        })
    })
    it('should handle REQUEST_ROBOTS_SUCCESS', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_SUCCESS,
            payload: [{
                id: 818,
                name: 'test',
                email: 'test@test.com'
            }]
        })).toEqual({
            robots: [{
                id: 818,
                name: 'test',
                email: 'test@test.com'
            }],
            isPending: false
        })
    })
    it('should handle REQUEST_ROBOTS_FAIL', () => {
        expect(reducers.requestRobots(initialStateRobots, {
            type: REQUEST_ROBOTS_FAIL,
            error: 'wrong'
        })).toEqual({
            robots: [],
            isPending: false,
            error: 'wrong'
        })
    })
})