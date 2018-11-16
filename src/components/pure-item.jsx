// @flow
import React, { PureComponent } from 'react';
import { addLine } from '../store';
type Props = {
  id: number,
  label?: string,
};

export default class PureItem extends PureComponent<Props> {
  static defaultProps = {
    label: 'PURE ITEM'
  };
  render() {
    addLine(`render PureItem PureComponent with id ${this.props.id}`, 'pure-components');
    return <div>{this.props.label} { this.props.id }</div>
  }
}
