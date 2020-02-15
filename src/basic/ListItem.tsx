import React, { Component } from 'react';
import { TouchableHighlight, Platform, TouchableNativeFeedback, View, StyleProp, ViewStyle } from 'react-native';
import { connectStyle } from 'native-base-shoutem-theme';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import variable from '../theme/variables/platform';
type ListItemProps = {
  style?: StyleProp<ViewStyle>;
  touchableHighlightStyle?: object | any[];
  itemDivider?: boolean;
  button?: boolean;
};

class ListItem extends Component<ListItemProps, {}> {
  render() {
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;

    if (
      Platform.OS === 'ios' ||
      Platform.OS === 'web' ||
      variables.androidRipple === false ||
      (!this.props.onPress && !this.props.onLongPress) ||
      Platform.Version <= 21
    ) {
      return (
        <TouchableHighlight
          onPress={this.props.onPress}
          onLongPress={this.props.onLongPress}
          ref={c => (this._root = c)}
          underlayColor={variables.listBtnUnderlayColor}
          {...this.props}
          style={this.props.touchableHighlightStyle}
        >
          <View {...this.props} testID={undefined}>
            {this.props.children}
          </View>
        </TouchableHighlight>
      );
    }

    return (
      <TouchableNativeFeedback ref={c => (this._root = c)} {...this.props}>
        <View style={{ marginLeft: -17, paddingLeft: 17 }}>
          <View {...this.props} testID={undefined}>
            {this.props.children}
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
const StyledListItem = connectStyle('NativeBase.ListItem', {}, mapPropsToStyleNames)(ListItem);

export { StyledListItem as ListItem };
