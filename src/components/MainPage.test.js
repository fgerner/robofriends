import {shallow} from 'enzyme';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage {...mockProps}/>);
});

describe('Mainpage component', () => {
    it('should renders without crashing', function () {
        expect(wrapper).toMatchSnapshot();
    });

    it('should filter robots correctly', function () {
        const newMockProps = {
            onRequestRobots: jest.fn(),
            robots: [{
                id: 3,
                name: 'bob',
                email: 'test@test.com'
            }],
            searchField: 'a'
        }
        wrapper = shallow(<MainPage {...newMockProps}/>);
        expect(wrapper.instance().filterRobots()).toEqual([])
    });

    xit('should display pending wile loading', function () {
        const mockProps = {
            isPending: true
        }

    });

})

