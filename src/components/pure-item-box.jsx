// @flow
import React, { Component } from 'react';
import PureItem from './pure-item';

type Props = {
    size: number,
    itemsLabel?: string,
};

export default class PureItemBox extends Component<Props> {
    getItems = () => {
        const items = [];
        for(let i = 0; i < this.props.size; i++) {
            items.push(<PureItem id={i} key={i} label={this.props.itemsLabel} />);
        }
        return items;
    }

    render() {
        return <div>
            {this.getItems()}
        </div>
    }
}
