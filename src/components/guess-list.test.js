import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    const seedGuesses = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedGuesses.push(`Guess ${i}`);
        }
    });
    
    it('Should render without crashing', () => {    
        shallow(<GuessList guesses={seedGuesses}/>);    
    });

    it('Should render a list of guesses', () => {
        const wrapper = shallow(<GuessList guesses={seedGuesses} />);
        const list = wrapper.find('li');
        expect(seedGuesses.length).toEqual(list.length);
        seedGuesses.forEach((guess, index) => {
            expect(list.at(index).text()).toEqual(guess);
        })
    });
});