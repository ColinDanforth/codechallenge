import key from '../consumer'

const fetchFeed = async(stream, currentPage) => {
  return await fetch(`https://api.500px.com/v1/photos?feature=${stream}&image_size=5&page=${currentPage}&consumer_key=${key.key}`,
    {
      headers: new Headers({
        'Content-Type': 'application/json, UTF-8',
      })
    }).then(response => {
      const reader = response.body.getReader()
    return new ReadableStream({
      start(controller) {
        return pump()
        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              controller.close()
              return;
            }
            controller.enqueue(value)
            return pump()
          });
        }
      }
    })
  })
    .then(stream => new Response(stream))
    .then(response => response.json())
    .catch(e => console.log(JSON.stringify(e)))
}

const fetchImage = async(imageId) => {
  return await fetch(`https://api.500px.com/v1/photos?image_size=2048&expanded_user_info=true&include_tags=true&liked=1&include_equipment_info=true&ids=${imageId}&consumer_key=${key.key}`,
    {
      headers: new Headers({
        'Content-Type': 'application/json, UTF-8',
      })
    }).then(response => {
    const reader = response.body.getReader()
    return new ReadableStream({
      start(controller) {
        return pump()
        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              controller.close()
              return;
            }
            controller.enqueue(value)
            return pump()
          });
        }
      }
    })
  })
    .then(stream => new Response(stream))
    .then(response => response.json())
    .then(thisImageData => thisImageData.photos[imageId])
    .catch(e => console.log(JSON.stringify(e)))
}

const fetchImageComments = async(imageId) => {
  return await fetch(`https://api.500px.com/v1/photos/${imageId}/comments?sort=created_at&include_subscription=1&include_flagged=1&nested=1&page=1&rpp=30&consumer_key=${key.key}`,
    {
      headers: new Headers({
        'Content-Type': 'application/json, text/javascript, */*; q=0.01',
      })
    }).then(response => {
    const reader = response.body.getReader()
    return new ReadableStream({
      start(controller) {
        return pump()
        function pump() {
          return reader.read().then(({ done, value }) => {
            if (done) {
              controller.close()
              return;
            }
            controller.enqueue(value)
            return pump()
          });
        }
      }
    })
  })
    .then(stream => new Response(stream))
    .then(response => response.json())
    .catch(e => console.log(JSON.stringify(e)))
}

export default {fetchFeed, fetchImage, fetchImageComments}
