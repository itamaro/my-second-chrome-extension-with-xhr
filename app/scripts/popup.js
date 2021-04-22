const xhrTestUrl = "https://us-west3-onion-on-fire.cloudfunctions.net/gql-test-1";
const stubDiv = document.getElementById("xhrStub");

fetch(xhrTestUrl)
  .then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }
    response.text()
      .then((text) => {
        stubDiv.innerText = text;
      });
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
