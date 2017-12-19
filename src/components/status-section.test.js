import React from 'react';
import {shallow} from 'enzyme';
import StatusSection from './status-section';

describe('<StatusSection />', () => {
    const seedGuesses = [];
    beforeAll(() => {
        for (let i = 0; i < 10; i++) {
            seedGuesses.push(`Guess ${i}`);
        }
    });
    const seedLength = seedGuesses.length;
    it('Renders without crashing', () => {
        shallow(<StatusSection guessCount={seedLength} guesses={seedGuesses} />);
    });

});