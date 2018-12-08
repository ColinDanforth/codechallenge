import React from 'react';
import LensDetailsObject from '../../../../src/components/imageCommon/LensDetailsObject';
import renderer from 'react-test-renderer';

test('LensDetailsObject should display an element with the appropriate strings present', () => {
  const testObject={
    friendly_name: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
    features: "Micro Four Thirds System<br/>24-80mm (35mm Equivalent)<br/>Aperture Range: f/2.8 to f/22",
  }

  const component = renderer.create(
    <LensDetailsObject lensInfo={testObject}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
