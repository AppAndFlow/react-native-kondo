import React from 'react';
import { TextInput } from 'react-native';
import { withTheme } from 'react-native-kondo';

class Input extends React.Component {
  _textInput = React.createRef();

  focus() {
    if (this._textInput.current) {
      this._textInput.current.focus();
    }
  }

  render() {
    return (
      <TextInput
        ref={this._textInput}
        // eslint-disable-next-line
        selectionColor={this.props.theme.colors.lightGreen}
        style={{
          // eslint-disable-next-line
          fontFamily: this.props.theme.fonts.base,
          // eslint-disable-next-line
          fontSize: this.props.theme.fontSizes[2],
        }}
        {...this.props}
      />
    );
  }
}

export default withTheme(Input);
