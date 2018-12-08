import React from 'react';
import ImageItem from '../../../../src/components/imageDisplay/feedImageCards/ImageItem';
import renderer from 'react-test-renderer';

test('ImageItem should display the base ImageItem component with all loaded test data', () => {
  const testData={
    user: {
      avatars: {
        default: {
          https: 'http://google.ca'
        }
      },
      fullname: 'Test User',

    },
    rating: '99.99999995',
    image_url: 'http://google.com',
    name: 'Test name',
    description: 'test description',
  }

  const makeFullScreen = () => {
    return null
  }

  const component = renderer.create(
    <ImageItem key='1' thisItem={testData} makeFullScreen={makeFullScreen}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
