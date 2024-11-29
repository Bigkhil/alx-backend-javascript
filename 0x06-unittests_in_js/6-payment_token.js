function getPaymentTokenFromAPI(success) {
  if (success) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
  // Function does nothing when success is false
}

module.exports = getPaymentTokenFromAPI;
