import { connectStyle } from 'native-base-shoutem-theme';
import React, { Component } from 'react';
import { View, StatusBar, SafeAreaView, StyleProp, ViewStyle } from 'react-native';

import mapPropsToStyleNames from '../utils/mapPropsToStyleNames';
import getStyle from '../utils/getStyle';
import variable from '../theme/variables/platform';
type HeaderProps = {
  style?: StyleProp<ViewStyle>;
  searchBar?: boolean;
  rounded?: boolean;
};

class Header extends Component<HeaderProps, {}> {
  render() {
    const { androidStatusBarColor, iosBarStyle, style, transparent, translucent } = this.props;
    const variables = this.context.theme ? this.context.theme['@@shoutem.theme/themeStyle'].variables : variable;
    const platformStyle = variables.platformStyle;

    return (
      <View>
        <StatusBar
          backgroundColor={androidStatusBarColor ? androidStatusBarColor : variables.statusBarColor}
          barStyle={iosBarStyle ? iosBarStyle : platformStyle === 'material' ? 'light-content' : variables.iosStatusbar}
          translucent={transparent ? true : translucent}
        />
        <SafeAreaView
          style={{
            backgroundColor: getStyle(style).backgroundColor,
          }}
        >
          <View ref={c => (this._root = c)} {...this.props} />
        </SafeAreaView>
      </View>
    );
  }
}
const StyledHeader = connectStyle('NativeBase.Header', {}, mapPropsToStyleNames)(Header);

export { StyledHeader as Header };
