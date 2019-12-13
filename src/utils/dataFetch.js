import fetch from 'isomorphic-fetch';

const API_URL = 'https://api.amfoss.in/';

export default ({ query, variables }) => {
  const body = {
    query,
    variables,
  };

  const apiConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch(API_URL, apiConfig).then(function(response) {
    const contentType = response.headers.get('content-type');
    if (response.ok) {
      if (contentType && contentType.indexOf('application/json') !== -1) {
        return response.json().then(json => json);
      }
      if (contentType && contentType.indexOf('text') !== -1) {
        return response.text().then(text => text);
      }
      return response;
    }
    console.error(`Response status ${response.status} during dataFetch for url ${response.url}.`);
    throw response;
  });
};