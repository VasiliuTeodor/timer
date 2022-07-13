const timerFill = document.querySelector("[data-timer-limit]");

class Timer {
  #minutes = Math.round(
    document.querySelector("[data-minutes]").value * 60 * 1000
  );
  #seconds = Math.round(document.querySelector("[data-seconds]").value * 1000);
  #duration = Math.round(this.#minutes + this.#seconds);

  fillTimer() {
    timerFill.style.transform = "scale(1)";
    timerFill.style.transitionDuration = `${this.#duration}ms`;
  }

  restartTimer() {
    timerFill.style.transform = "scale(0)";
  }
}

function startTimer() {
  const newTimer = new Timer();
  newTimer.fillTimer();
  const checkTimerTransition = document
    .querySelector(".timer-fill")
    .addEventListener(
      "transitionend",
      () => {
        document.querySelector("[data-timer-end]").innerHTML =
          "Timer has ended";
      },
      false
    );
}

document
  .querySelector("[data-start-timer-btn]")
  .addEventListener("click", startTimer);
