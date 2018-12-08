import React from 'react';
import CameraDetailsDataCard from '../../../../src/components/imageCommon/CameraDetailsDataCard';
import renderer from 'react-test-renderer';

test('CameraDetailsDataCard should display LensDetailCard, and appropriate strings', () => {
  const testDataObject={
    lens_info: {
      friendly_name: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
      features: "Micro Four Thirds System<br/>24-80mm (35mm Equivalent)<br/>Aperture Range: f/2.8 to f/22",
    },
    camera: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
    shutter_speed: 'test string',
    aperture: 'test string',
  }

  const component = renderer.create(
    <CameraDetailsDataCard dataObject={testDataObject}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('CameraDetailsDataCard should display appropriate strings including lens in place of lens info, excluding camera, ' +
  'shutter speed, and aperture', () => {
  const testDataObject={
    lens: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
    camera: null,
    shutter_speed: null,
    aperture: null
  }

  const component = renderer.create(
    <CameraDetailsDataCard dataObject={testDataObject}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('CameraDetailsDataCard should display LensDetailCard, and appropriate strings excluding camera, shutter speed, and ' +
  'aperture', () => {
  const testDataObject={
    lens_info: {
      friendly_name: "Olympus M.Zuiko Digital ED 12-40mm f/2.8 PRO",
      features: "Micro Four Thirds System<br/>24-80mm (35mm Equivalent)<br/>Aperture Range: f/2.8 to f/22",
    },
    camera: null,
    shutter_speed: null,
    aperture: null
  }

  const component = renderer.create(
    <CameraDetailsDataCard dataObject={testDataObject}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})

test('CameraDetailsDataCard should display "Lens Info: no details"', () => {
  const testDataObject={
    lens: null,
    camera: null,
    shutter_speed: null,
    aperture: null
  }

  const component = renderer.create(
    <CameraDetailsDataCard dataObject={testDataObject}/>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()

})
