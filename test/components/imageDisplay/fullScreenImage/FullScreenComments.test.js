import React from 'react';
import FullScreenComments from '../../../../src/components/imageDisplay/fullScreenImage/FullScreenComments';
import renderer from 'react-test-renderer';

test('FullScreenComments should display a group of comment elements showing the appropriate text from the testData object', () => {
  const testData={
    comments: [{
      user: {
        username: 'TestUser'
      },
      created_at: '2018-01-01',
      body: 'Some Comment String',
    },{
      user: {
        username: 'TestUser2'
      },
      created_at: '2018-01-02',
      body: 'Some Comment String 2',
    }],
  }

  const component = renderer.create(
    <FullScreenComments thisImagesComments={testData}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('FullScreenComments should show comment object with a string "No comments yet, be the first to comment on this Great Image!", empty comments array', () => {
  const testData={
    comments: [],
  }

  const component = renderer.create(
    <FullScreenComments thisImagesComments={testData}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('FullScreenComments should show comment object with a string "No comments yet, be the first to comment on this Great Image!", no comments key.', () => {
  const testData={
  }

  const component = renderer.create(
    <FullScreenComments thisImagesComments={testData}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
