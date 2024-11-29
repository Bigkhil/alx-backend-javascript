const request = require('request');
const { expect } = require('chai');
const { promisify } = require('util');

// Promisify the request.get method
const asyncRequest = promisify(request.get);
const asyncRequestPost = promisify(request.post);

describe('Index page', () => {
  const url = 'http://localhost:7865';

  it('should return correct status code', async () => {
    const response = await asyncRequest(url);
    expect(response.statusCode).to.equal(200);
  });

  it('should return correct result', async () => {
    const response = await asyncRequest(url);
    expect(response.body).to.equal('Welcome to the payment system');
  });

  it('should handle errors gracefully', async () => {
    const response = await asyncRequest(`${url}/nonexistent`);
    expect(response.statusCode).to.equal(404);
  });
});

// New test suite for the cart page
describe('Cart page', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code when :id is a number', async () => {
    const response = await asyncRequest(`${baseUrl}/cart/123`);
    expect(response.statusCode).to.equal(200);
  });

  it('should return correct status code (404) when :id is NOT a number', async () => {
    const response = await asyncRequest(`${baseUrl}/cart/abc`);
    expect(response.statusCode).to.equal(404);
  });

  it('should return correct result when :id is a number', async () => {
    const id = 123;
    const response = await asyncRequest(`${baseUrl}/cart/${id}`);
    expect(response.body).to.equal(`Payment methods for cart ${id}`);
  });

  it('should handle decimal numbers as invalid IDs', async () => {
    const response = await asyncRequest(`${baseUrl}/cart/12.34`);
    expect(response.statusCode).to.equal(404);
  });

  it('should handle negative numbers as invalid IDs', async () => {
    const response = await asyncRequest(`${baseUrl}/cart/-123`);
    expect(response.statusCode).to.equal(404);
  });
});

// New test suite for the login endpoint
describe('Login endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct status code and message for valid login', async () => {
    const response = await asyncRequestPost({
      url: `${baseUrl}/login`,
      json: true,
      body: { userName: 'Betty' }
    });
    expect(response.statusCode).to.equal(200);
    expect(response.body).to.equal('Welcome Betty');
  });

  it('should handle missing userName in request body', async () => {
    const response = await asyncRequest({
      url: `${baseUrl}/login`,
      method: 'POST',
      json: true,
      body: {}
    });
    expect(response.statusCode).to.equal(404);
  });
});

// New test suite for the available_payments endpoint
describe('Available payments endpoint', () => {
  const baseUrl = 'http://localhost:7865';

  it('should return correct payment methods', async () => {
    const response = await asyncRequest(`${baseUrl}/available_payments`);
    expect(response.statusCode).to.equal(200);
    const paymentMethods = JSON.parse(response.body);
    expect(paymentMethods).to.deep.equal({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    });
  });
});