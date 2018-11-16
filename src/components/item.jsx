// @flow
import React, { Component } from 'react';
import { addLine } from '../store';
type Props = {
  id: number,
  label?: string,
};

export default class Item extends Component<Props> {
  static defaultProps = {
    label: 'ITEM'
  };
  render() {
    addLine(`render Item Component with id ${this.props.id}`, 'components');
    return <div>{this.props.label} { this.props.id }</div>
  }
}
