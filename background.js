chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var offendingReferrers = ["https://auth0.lightning.force.com/", "https://auth0.my.salesforce.com/"]
    if (
      details.requestHeaders &&
      details.requestHeaders.some(
        // only if the request came from Salesforce
        header =>
          header.name === "Referer" &&
          offendingReferrers.some( (referrer) => header.value.indexOf(referrer) > -1) 
      )
    ) {
      return { cancel: true };
    }
  },
  // only monitor this specific URL
  { urls: ["https://auth0corp.auth0.com/logout*"] },
  ["blocking", "requestHeaders"]
);
