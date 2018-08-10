import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {mount, shallow} from 'enzyme';
import JudgingRoundSelector from './judging_round_selector';


describe('judging round selector', () => {
    beforeEach(() => {
	global.fetch = jest.fn().mockImplementation(
	    () => new Promise(
		resolve =>
		    resolve({ status: 200, json: () => ({
			results: [{ id: 10,
				   full_name: 'Mock Judging Round' }]
		    })})
	    )
	)
    })

    it('is Loading...', () => {
	const selector = shallow(<JudgingRoundSelector on_select={jest.fn()}/>);
	expect(selector.text()).toContain('Loading...');
    });

    // Would like a test that sees "Mock Judging Round".
    // it('calls fetchJudgingRoundList', async () => {
    //     const selector = shallow(<JudgingRoundSelector on_select={jest.fn()}/>);
    //     await selector.update()
    //     expect(selector.text()).toContain('Mock Judging Round');
    // });
});
