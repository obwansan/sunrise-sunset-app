// The load event is fired when the whole page has loaded
window.onload = () => {

  const sunriseDisplayTime = document.querySelector('.sunrise-time');
  const sunsetDisplayTime = document.querySelector('.sunset-time');
  const locationTown = document.querySelector('.location-town');
  const locationCounty = document.querySelector('.location-county');

  // The Dark Sky API returns timestamps that need to be converted into sunrise/sunset times
  const timeFromTimestamp = timestamp => {
    const dateTime = new Date(timestamp * 1000); // e.g. 1561780612 to Sat Jun 29 2019 04:56:52
    return dateTime.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'}); // e.g. Sat Jun 29 2019 04:56:52 to 4:56 AM
  }

  // Check if the user's browser supports HTML5 gelocation API 
  if(!navigator.geolocation) {
    alert("Geolocation is not supported by your browser");
  } else {
    // Let the user know what's happening
    locationTown.textContent = 'Loading...';

    // Get geolocation data
    navigator.geolocation.getCurrentPosition(position => {

      // Get the latitude and longitude
      const geoLong = position.coords.longitude.toFixed(5);
      const geoLat = position.coords.latitude.toFixed(5);

      // Needed to prevent CORS issue that prevents accessing the API from localhost
      const proxy = `https://cors-anywhere.herokuapp.com/`;

      const darkSkyApiUrl = `${proxy}https://api.darksky.net/forecast/500b36c13f6c38a4bc4945940ca149cb/${geoLat},${geoLong}`;
      const OSMNominatumUrl = `${proxy}https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${geoLat}&lon=${geoLong}`;

    // Get climate data using latitude and longitude
    fetch(darkSkyApiUrl)
      .then(response => {
        return response.json();
      })
      .then(body => {
        const {sunriseTime, sunsetTime } = body.daily.data[0]
        sunriseDisplayTime.textContent = timeFromTimestamp(sunriseTime);
        sunsetDisplayTime.textContent = timeFromTimestamp(sunsetTime);
      })
      .catch(error => {  
        locationTown.textContent = 'Sorry, could not get sunrise/sunset data.';  
      });

    // Get user's location using latitude and longitude
    fetch(OSMNominatumUrl)
      .then(response => {
        return response.json();
      })
      .then(body => {
        const { town, county } = body.address;
        locationTown.textContent = town;
        locationCounty.textContent = county;
      })
      .catch(error => {  
        locationTown.textContent = 'Sorry, could not get sunrise/sunset data.'; 
      });
    });
  }
};
