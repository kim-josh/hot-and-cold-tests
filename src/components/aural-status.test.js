import React from 'react';
import {shallow} from 'enzyme';
import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('Should render without crashing', () => {
        shallow(<AuralStatus auralStatus="Hello!" />);
    });

    it('Should render an aural status update', () => {
        const text = 'Howdy!';
        const wrapper = shallow(<AuralStatus auralStatus={text}/>);
        expect(wrapper.contains(text)).toEqual(true);
    });
});