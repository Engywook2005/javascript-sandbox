let capturedRequests = [];

// Helper function to log and store requests
function logCapturedRequest(method, url, payload, headers = {}) {
    console.log(`Captured URL: ${url}, Method: ${method}, Payload:`, payload);
    if (method === 'POST') {
        console.log(`POST request to URL: ${url}`);
    }

    // Normalize the URL (remove query parameters for better matching)
    const normalizedUrl = url.split('?')[0];

    // Check if the URL ends with 'auction'
    if (normalizedUrl.endsWith('auction')) {
        capturedRequests.push({ method, url: normalizedUrl, payload, headers });
        console.log('Captured matching request:', { method, url: normalizedUrl, payload, headers });
    }
}

// Override `fetch` to intercept requests and log the payload
const originalFetch = window.fetch;
window.fetch = async (...args) => {
    const [resource, config] = args;

    // Extract method, body, and headers from the fetch configuration
    const method = (config && config.method) || 'GET';
    const payload = config && config.body ? config.body : null;
    const headers = config && config.headers ? config.headers : {};

    logCapturedRequest(method, resource, payload, headers);

    // Call the original fetch function
    return originalFetch(...args);
};

// Override `XMLHttpRequest` to intercept requests and log the payload
const nativeXhrOpen = window.XMLHttpRequest.prototype.open;
const originalXhrSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    this._method = method;
    this._url = url;
    return nativeXhrOpen.apply(this, [method, url, ...rest]);
};

XMLHttpRequest.prototype.send = function (body) {
    this.addEventListener('loadstart', () => {
        logCapturedRequest(this._method, this._url, body, this._headers || {});
    });
    return originalXhrSend.apply(this, [body]);
};

// Now you can inspect `capturedRequests` in the console
// Example: console.table(capturedRequests);
