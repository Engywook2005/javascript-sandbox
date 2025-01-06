let capturedRequests = [];

// Function to check if a request meets the criteria
function isMatchingRequest(request) {
    // Define your custom condition here
    // For example, match requests with URL containing 'api'
    return request.name.includes('auction');
}

// Monitor all network requests
let observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry) => {
        if (entry.entryType === 'resource' && isMatchingRequest(entry)) {
            capturedRequests.push(entry);
            console.log('Captured request:', entry);
        }
    });
});

// Start observing for 'resource' entries
observer.observe({ entryTypes: ['resource'] });

// Now you can inspect `capturedRequests` in the console
// Example: capturedRequests.forEach(request => console.log(request.name));