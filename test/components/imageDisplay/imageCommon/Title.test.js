import React from 'react';
import Title from '../../../../src/components/imageDisplay/imageCommon/Title';
import renderer from 'react-test-renderer';

test('Title should display input test string', () => {
  const component = renderer.create(
    <Title name="Test String"/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
