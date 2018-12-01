import key from '../consumer'

const fetchPopular = async(currentPage) => {

  return await fetch(`https://api.500px.com/v1/photos?feature=popular&image_size=1080&page=${currentPage}&consumer_key=${key.key}`,
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
            // When no more data needs to be consumed, close the stream
            if (done) {
              controller.close()
              return;
            }
            // Enqueue the next data chunk into our target stream
            controller.enqueue(value)
            return pump()
          });
        }
      }
    })
  })
    .then(stream => new Response(stream))
    .then(response => response.json())
}
export default {fetchPopular}
