import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

describe('<Game />', () => {
    it('Renders without crashing', () => {
        shallow(<Game />);
    });

    it('Should be able to start a new game', () => {
        const seedData = {
            guesses: [8, 23, 24, 32],
            feedback: 'Kobeeeeeee',
            correctAnswer: 200 // To ensure it goes to a new game
        };
        const wrapper = shallow(<Game />);
        // Simulate an existing game
        wrapper.setState(seedData);
        wrapper.instance().restartGame();
        wrapper.update();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
        expect(wrapper.state('correctAnswer')).toBeLessThan(101);
        expect(wrapper.state('correctAnswer')).toBeGreaterThan(0);
    });

    it('Should be able to make guesses', () => {
        const seedAnswer = {correctAnswer: 24};
        const wrapper = shallow(<Game />);
        wrapper.setState(seedAnswer);
        
        wrapper.instance().makeGuess(100);
        wrapper.update();
        expect(wrapper.state('guesses')).toEqual([100]);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
        
        wrapper.instance().makeGuess(30);
        wrapper.update();
        expect(wrapper.state('guesses')).toEqual([100, 30]);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().makeGuess(24);
        wrapper.update();
        expect(wrapper.state('guesses')).toEqual([100, 30, 24]);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });
});