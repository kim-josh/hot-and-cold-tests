import React from 'react';
import {shallow} from 'enzyme';
import GuessSection from './guess-section';

describe('<Feedback />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessSection />);
    });

});