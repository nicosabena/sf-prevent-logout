chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    if (
      details.requestHeaders &&
      details.requestHeaders.some(
        // only if the request came from Salesforce
        header =>
          header.name === "Referer" &&
          header.value === "https://auth0.my.salesforce.com/"
      )
    ) {
      return { cancel: true };
    }
  },
  // only monitor this specific URL
  { urls: ["https://auth0corp.auth0.com/logout*"] },
  ["blocking", "requestHeaders"]
);
