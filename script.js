document.addEventListener("DOMContentLoaded", function (e) {
    
  // Update UI Function

  function updateUI() {

    // Get all the necessary time
    const getDate = new Date();
    const getSeconds = getDate.getSeconds();
    const getMinutes = getDate.getMinutes();
    const getHour =
      getDate.getHours() > 12 ? getDate.getHours() - 12 : getDate.getHours();
    const secondsCoveredDegree = 6;
    const minutesCoveredDegree = 6;
    const hoursCoveredDegree = 30;

    // Get all the necessary elements
    const secondsNeedle = document.querySelector(".seconds-needle");
    const minutesNeedle = document.querySelector(".minutes-needle");
    const hoursNeedle = document.querySelector(".hour-needle");

    secondsNeedle.style.transform = `translateX(-50%) rotate(${
      getSeconds * secondsCoveredDegree
    }deg)`;
    minutesNeedle.style.transform = `translateX(-50%) rotate(${
      getMinutes * minutesCoveredDegree
    }deg)`;
    hoursNeedle.style.transform = `translateX(-50%) rotate(${
      getHour * hoursCoveredDegree
    }deg)`;
  }

  // SetTime Interval to call updateUI function every second
  setInterval(updateUI, 1000);
});
