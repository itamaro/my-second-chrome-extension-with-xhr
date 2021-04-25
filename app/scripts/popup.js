const xhrTestUrl = "https://fastapi-demo-app-mrbe4zqmdq-uw.a.run.app/";
const stubDiv = document.getElementById("xhrStub");

fetch(xhrTestUrl)
  .then((response) => {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' +
        response.status);
      return;
    }
    response.json()
      .then((data) => {
        stubDiv.innerText = data['message'];
      });
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
