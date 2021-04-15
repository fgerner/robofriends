import {shallow} from 'enzyme';
import Card from "./Card";

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Card/>);
})

describe('Card component', () => {
    it('should render without crashing', function () {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render name', function () {
        console.log(wrapper.find('h1'))
        expect()
    });
})