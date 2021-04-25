const graphqlTestUrl = "https://fastapi-graphql-demo-mrbe4zqmdq-uw.a.run.app/";

fetch(graphqlTestUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query: `
  query GetCoursesQuery {
    getCourses {
      id
      title
      instructor
      publishDate
    }
  }` }),
})
  .then(res => {
    if (res.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + res.status);
      return;
    }
    return res.json();
  })
  .then(res => {
    const stubDiv = document.getElementById("graphqlStub");
    const data = res.data;
    stubDiv.innerText = data.getCourses[0].title;
  })
  .catch((err) => {
    console.log('Fetch Error :-S', err);
  });
