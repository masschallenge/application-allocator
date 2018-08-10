import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import JudgingRoundDisplay from './judging_round_display';


describe('judging round display with no judging round', () => {
    it('says No Judging Round Selected', () => {
	const display = shallow(<JudgingRoundDisplay judging_round={null}/>);
	expect(display.text()).toContain('No Judging Round Selected');
    });
});


describe('judging round display with judging round', () => {
    beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(
	    () => new Promise(
		resolve =>
		    resolve({ status: 200, json: () => {
			({ id: 1, full_name: 'Mock Round 1'})
		    }})
	    )
	)
    })

    it('calls fetchJudgingRoundData', () => {
	const node = document.createElement('div');
	const instance = ReactDOM.render(
		<JudgingRoundDisplay judging_round={null}/>,
	    node);
	spyOn(instance, 'fetchJudgingRoundData')
	ReactDOM.render(<JudgingRoundDisplay judging_round={1} />, node);
	expect(instance.fetchJudgingRoundData).toHaveBeenCalled();
    });
});
