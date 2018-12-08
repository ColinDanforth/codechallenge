import React from 'react';
import DescriptionObject from '../../../../src/components/imageCommon/DescriptionObject';
import renderer from 'react-test-renderer';

test('Description should display test string', () => {
  const component = renderer.create(
    <DescriptionObject description="Test String"/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test(`Description should display test string with <a> element`, () => {
  const component = renderer.create(
    <DescriptionObject description="Test String <a src='http://google.com'/> "/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('Description should display as a div with a style of display none', () => {
  const component = renderer.create(
    <DescriptionObject description=""/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
