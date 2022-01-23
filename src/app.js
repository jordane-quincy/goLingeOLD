import dayjs from "dayjs";

function setCurrentTime() {
  document.querySelector("#end").value = dayjs(new Date()).format("HH:mm");
}
window.onload = setCurrentTime;

function formSubmit() {
  const endDayValue = document.querySelector("#day").value;
  const endTimeValue = document.querySelector("#end").value;
  const durationInMinValue = document.querySelector("#duration").value;

  console.log({ endDayValue }, { endTimeValue }, { durationInMinValue });

  const nowDate = dayjs(new Date());

  console.log({ nowDate });

  // Add 0 (nowDate) or 1 (tomorrow) day
  const endDayDate = nowDate.add(Number.parseInt(endDayValue), "day");
  console.log({ endDayValue, endDayDate });

  // Split endTimeValue to set endDate hour and minute
  const [endHour, endMinute] = endTimeValue.split(":");
  const endDate = endDayDate.set("hour", endHour).set("minute", endMinute);

  const startDateComputed = endDate.subtract(durationInMinValue, "minute");
  console.log({ startDateComputed });

  const hourDiffComputed = startDateComputed.diff(nowDate, "hour", true);
  const hourDiff = Math.floor(hourDiffComputed);
  const minutesDiff = Math.floor((hourDiffComputed - hourDiff) * 60);

  const output = document.querySelector("#output");
  output.innerHTML =
    "For the washing machine to ends the " +
    endDate.format("DD/MM/YYYY") +
    " at " +
    endDate.format("HH:mm") +
    ", wash cycle have to be launched in " +
    hourDiff +
    " hour(s) and " +
    minutesDiff +
    " minute(s)";

  return false;
}

window.formSubmit = formSubmit; // ! FIXME: horrible trick, expose the function in another way
