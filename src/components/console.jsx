import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clearLines } from '../store';
import './console.css';

export class Console extends Component<Props> {
  inputRef = React.createRef();

  componentDidUpdate() {
    this.inputRef.current.scrollTop = this.inputRef.current.scrollHeight;
  }

  render() {
    return (
      <div className="console">
        <div className="console-header">
          <span>rendition ouput logs:</span>
          <input type="button" value="clear" onClick={() => clearLines()} />
        </div>
        <div className="console-body" ref={this.inputRef}>
          {this.props.lines.map(({ content, type }, index) =>
            <div key={index} className={type}>{content}</div> 
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    lines: state.lines
});

const ConnectedConsole = connect(
    mapStateToProps
)(Console);

export default ConnectedConsole;
