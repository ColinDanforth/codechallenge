import React from 'react';
import FullScreenUserCard from '../../../../src/components/imageDisplay/fullScreenImage/FullScreenUserCard';
import renderer from 'react-test-renderer';

test('FullScreenUserCard should display a group of comment elements showing the appropriate text from the testData object', () => {
  const testDataObject={
    name: 'test name',
    user: {
      avatars: {
        default: {
          https: 'http://google.ca'
        }
      },
      fullname: 'Test User',

    },
    rating: '99.99999995',
    lens_info: {
      friendly_name: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
      features: "Micro Four Thirds System<br/>24-80mm (35mm Equivalent)<br/>Aperture Range: f/2.8 to f/22",
    },
    camera: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
    shutter_speed: 'test string',
    aperture: 'test string',
  }

  const testItem = {
    description: 'test description',
  }

  const component = renderer.create(
    <FullScreenUserCard dataObject={testDataObject} thisItem={testItem}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
