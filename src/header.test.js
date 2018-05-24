import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Header from './header';


describe('header', () => {
    it('says hello', () => {
	const header = shallow(<Header/>);
	expect(header.text()).toContain("Hello");
    });
});
