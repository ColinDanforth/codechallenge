import React from 'react';
import FullScreenDataCard from '../../../../src/components/imageDisplay/fullScreenImage/FullScreenDataCard';
import renderer from 'react-test-renderer';

test('FullScreenUserCard should display the below data object in FullScreenUserCard, FulScreenComments and Title elements',
  () => {
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
      description: 'test description',
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
      <FullScreenDataCard thisDataObject={testDataObject} thisImagesComments={testDataObject} thisItem={testDataObject}/>
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

  })
