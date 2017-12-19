import React from 'react';
import {shallow} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should restart the game when on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onRestartGame={callback} />);
        const link = wrapper.find('.new');
        link.simulate('click',);
        expect(callback).toHaveBeenCalled();
    });

    it('Should provide an aural status update', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onGenerateAuralUpdate={callback} />);
        const link = wrapper.find('.visuallyhidden');
        link.simulate('click');
        expect(callback).toHaveBeenCalled();
    });
});