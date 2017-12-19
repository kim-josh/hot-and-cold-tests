import React from 'react';
import {shallow} from 'enzyme';
import Feedback from './feedback';

describe('<Feedback />', () => {
    it('Should render without crashing', () => {
        shallow(<Feedback feedback="Try again!" />);
    });

    it('Should render the feedback', () => {
        const feedback = 'Try again!'
        const wrapper = shallow(<Feedback feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});