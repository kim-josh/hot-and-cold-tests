import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount guessCount='1' />);
    });

    it('Should provide the guess count', () => {
        const guessCount = 5
        const wrapper = shallow(<GuessCount guessCount={guessCount} />);
        expect(wrapper.text()).toEqual(`You've made ${guessCount} guesses!`);
    });
});