async function fetchGreeting() {
  const response = await fetch('http://localhost:9000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: 'query {greeting}',
    }),
  });

  const {
    data: { greeting },
  } = await response.json();

  return greeting;
}

fetchGreeting().then((greeting) => {
  document.getElementById('greeting').textContent = greeting;
});
