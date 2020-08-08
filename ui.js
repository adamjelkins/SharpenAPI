class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.pressure = document.getElementById('w-pressure');
    this.wind = document.getElementById('w-wind');
  }

  // Show Error
  showError(error) {
    // Show results
    document.getElementById('results').style.display = 'none';

    // Hide loader
    document.getElementById('loading').style.display = 'none';

    // Create a div
    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
  }

  // Clear error
  clearError() {
    document.querySelector('.alert').remove();
  }

  // paint(weather) {
  //   this.location.textContent = weather.name;
  //   this.desc.textContent = weather.weather[0].main;
  //   this.string.textContent =
  //     Math.ceil((weather.main.temp - 273.15) * 1.8 + 32) + ' °F';
  //   //    this.icon.textContent = weather.icon;
  //   this.icon.setAttribute(
  //     'src',
  //     `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
  //   );
  //   this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
  //   this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
  //   this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
  //   this.wind.textContent = `Wind Speed: ${weather.wind.speed}`;
  // }
}
