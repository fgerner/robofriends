import {shallow} from 'enzyme';
import CardList from "./CardList";

describe('Cardlist component', () => {
    it('should render without crashing', function () {
        const mockRobots = [
            {
                id: 1,
                name: 'test',
                username: 'test',
                email: 'test@test.com'
            }
        ]
        expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
    });
})