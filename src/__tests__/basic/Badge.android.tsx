import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from '../../basic/Badge';
// Note: test renderer must be required after react-native.
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = require.requireActual('react-native/Libraries/Utilities/Platform');

  Platform.OS = 'android';

  return Platform;
});
it('renders regular badge', () => {
  const tree = renderer.create(<Badge>2</Badge>).toJSON();

  expect(tree).toMatchSnapshot();
});
