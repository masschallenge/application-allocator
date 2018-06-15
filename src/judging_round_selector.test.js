import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import JudgingRoundSelector from './judging_round_selector';


describe('judging round selector', () => {
    beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(
	    () => new Promise(
		resolve =>
		    resolve({ status: 200, json: () => {
			(results: { id: 10,
				    full_name: 'Mock Judging Round' })
		    }})
	    )
	)
    })

    it('is Loading...', () => {
	const selector = shallow(<JudgingRoundSelector />);
	expect(selector.text()).toContain('Loading...');
    });
});
