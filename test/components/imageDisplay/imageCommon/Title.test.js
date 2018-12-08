import React from 'react';
import Title from '../../../../src/components/imageDisplay/imageCommon/Title';
import renderer from 'react-test-renderer';

test('Title should display input test string, and description block with the same text', () => {
  const component = renderer.create(
    <Title name="Test String" description="Test String"/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('Title should display input test string, and a div in place of description with style of display none', () => {
  const component = renderer.create(
    <Title name="Test String" description=""/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('Title should display untitled, and a div in place of description with style of display none', () => {
  const component = renderer.create(
    <Title name="" description=""/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
