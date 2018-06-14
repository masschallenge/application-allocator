import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import JudgingRoundDisplay from './judging_round_display';


describe('judging round display', () => {
    it('says when no judging round is selected', () => {
	const display = shallow(<JudgingRoundDisplay judging_round={null}/>);
	expect(display.text()).toContain('No Judging Round Selected');
    });
});
