import React from 'react';
import { View } from 'react-native';

import StaticContainer from './StaticContainer';

interface SceneComponentProps {
  shouldUpdated: boolean;
}
export const SceneComponent: React.SFC<SceneComponentProps & View> = Props => {
  const { shouldUpdated, ...props } = Props;

  return (
    <View {...props}>
      <StaticContainer shouldUpdate={shouldUpdated}>{props.children}</StaticContainer>
    </View>
  );
};
