import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    it('Renders without crashing', () => {
        shallow(<Header />);
    });

    it('Should render the header of the game', () => {
        const wrapper=shallow(<Header />);
        expect(wrapper.contains('HOT or COLD')).toEqual(true);
    });
});