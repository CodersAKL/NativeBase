import React, { Component } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
type ContainerProps = {
  style?: StyleProp<ViewStyle>;
};

class ContainerComponent extends Component<ContainerProps, {}> {
  _root = React.createRef<View>();
  render() {
    return (
      <View ref={this._root} {...this.props}>
        {this.props.children}
      </View>
    );
  }
}

export const Container = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(ContainerComponent);
