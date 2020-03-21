import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { Container } from '../../basic/Container';
import { Spinner } from '../../basic/Spinner';
// Note: test renderer must be required after react-native.
jest.mock('react-native/Libraries/Utilities/Platform', () => {
  const Platform = require.requireActual('react-native/Libraries/Utilities/Platform');

  Platform.OS = 'android';

  return Platform;
});
it('renders Spinner', () => {
  const tree = renderer
    .create(
      <Container>
        <Spinner />
        <Spinner color="red" />
        <Spinner color="green" />
        <Spinner color="blue" />
      </Container>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
