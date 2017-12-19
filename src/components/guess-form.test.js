import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<Feedback />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should trigger the onMakeGuess callback when the form is submitted', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 24;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    })

    it('Should reset the input when the form is submitted', () => {
        const wrapper = mount(<GuessForm />);
        const input = wrapper.find('#userGuess');
        input.instance().value = 24;
        wrapper.simulate('submit');
        expect(input.instance().value).toEqual('');
    });
});