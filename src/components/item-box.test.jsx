// @flow
/* global expect, jest */
import React from 'react';
import { shallow } from 'enzyme';
import ItemBox from './item-box';

describe('tests for <ItemBox> component', () => {
    it('should renders n <Item> component', () => {
        const props = {
            size: 4
        }
        const component = shallow(<ItemBox {...props} />);
        expect(component.find('Item').length).toEqual(props.size);
    });
});
