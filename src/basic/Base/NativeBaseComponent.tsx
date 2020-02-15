import { Component } from 'react';
type NativeBaseComponentProps = {
  theme?: object;
};

export default class NativeBaseComponent extends Component<NativeBaseComponentProps, {}> {
  getChildContext() {
    return {
      theme: this.props.theme ? this.props.theme : this.context.theme
    };
  }
  getContextForegroundColor() {
    return this.context.foregroundColor;
  }
}
