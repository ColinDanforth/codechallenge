import React from 'react';
import UserDataCard from '../../../../src/components/imageCommon/UserDataCard';
import renderer from 'react-test-renderer';

test('UserDataCard should display the appropriate strings for imageItem display', () => {
  const testDataObject={
    user: {
      avatars: {
        default: {
          https: 'http://google.ca'
        }
      },
      fullname: 'Test User',
      city: 'Toronto',
      country: 'Canada',

    },
    rating: '99.99999995'
  }

  const component = renderer.create(
    <UserDataCard dataObject={testDataObject}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('UserDataCard should display the appropriate strings for FullScreenImage display', () => {
  const testDataObject={
    user: {
      avatars: {
        default: {
          https: 'http://google.ca'
        }
      },
      fullname: 'Test User',
      city: 'Toronto',
      country: 'Canada',

    },
    rating: '99.99999995'
  }

  const component = renderer.create(
    <UserDataCard dataObject={testDataObject} thisUserData={testDataObject} showMoreInfo={true}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
