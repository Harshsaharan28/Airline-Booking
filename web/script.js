const flights = [
    { flightNumber: 'FH101', origin: 'New York', destination: 'Los Angeles', price: '$299' },
    { flightNumber: 'FH102', origin: 'Chicago', destination: 'Miami', price: '$199' },
    { flightNumber: 'FH103', origin: 'San Francisco', destination: 'Dallas', price: '$249' },
    { flightNumber: 'FH104', origin: 'Seattle', destination: 'Houston', price: '$219' }
];

function searchFlight() {
    const searchInput = document.getElementById('search-flight').value.toLowerCase();
    const resultsDiv = document.getElementById('flight-results');
    resultsDiv.innerHTML = '';

    const filteredFlights = flights.filter(flight => flight.destination.toLowerCase().includes(searchInput));

    if (filteredFlights.length > 0) {
        filteredFlights.forEach(flight => {
            const flightDiv = document.createElement('div');
            flightDiv.innerHTML = `<strong>Flight:</strong> ${flight.flightNumber} | 
                                   <strong>From:</strong> ${flight.origin} | 
                                   <strong>To:</strong> ${flight.destination} | 
                                   <strong>Price:</strong> ${flight.price}`;
            resultsDiv.appendChild(flightDiv);
        });
    } else {
        resultsDiv.innerHTML = 'No flights found.';
    }
}
