import 'react-native';
import React from 'react';
import { create } from 'react-test-renderer';

import { Badge } from '../../basic/Badge';
// Note: test renderer must be required after react-native.
jest.mock('Platform', () => {
  const Platform = require.requireActual('Platform');

  Platform.OS = 'ios';

  return Platform;
});
it('renders regular badge', () => {
  const tree = create(<Badge>2</Badge>).toJSON();

  expect(tree).toMatchSnapshot();
});
