setInterval(time, 1000);

function time() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let ap = time.getHours() >= 12 ? "PM" : "AM";

  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  if (hour >= 1 && hour <= 4 && ap === "PM") {
    let a = document.getElementById("wakeup");

    a.innerText = "LET'S HAVE SOME LUNCH !!";

    let b = document.getElementById("image");

    b.style.backgroundImage = "url('Images/afternoon.png')";

    let c = document.getElementById("getup");

    c.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
  } else if (hour > 4 && hour <= 8 && ap === "PM") {
    let a = document.getElementById("wakeup");

    a.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";

    let b = document.getElementById("image");

    b.style.backgroundImage = "url('Images/evening.png')";

    let c = document.getElementById("getup");

    c.innerText = "GOOD Evening!!";
  } else if (hour > 8 && hour <= 12 && ap === "PM") {
    let a = document.getElementById("wakeup");

    a.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";

    let b = document.getElementById("image");

    b.style.backgroundImage = "url('Images/night.png')";

    let c = document.getElementById("getup");

    c.innerText = "GOOD NIGHT!!";
  } else if (hour > 8 && hour <= 12 && ap === "AM") {
    let a = document.getElementById("wakeup");

    a.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";

    let b = document.getElementById("image");

    // b.style.backgroundImage = "url('Images/morning.png')";

    let c = document.getElementById("getup");

    c.innerText = "GOOD MORNING!! WAKE UP !!";
  }

  document.getElementById("hh").innerText = hour;
  document.getElementById("mm").innerText = min;
  document.getElementById("ss").innerText = sec;
  document.getElementById("ampm").innerHTML = ap;
}

function setAlarm() {
  let uthja = document.getElementById("uthja");
  let lunch = document.getElementById("lunch");
  let nap = document.getElementById("nap");
  let night = document.getElementById("night");
  let wakeup1 = document.getElementById("wakeupTime");
  let lunch1 = document.getElementById("lunchTime");
  let nap1 = document.getElementById("napTime");
  let night1 = document.getElementById("nightTime");

  wakeup1.innerHTML = uthja.value;
  lunch1.innerHTML = lunch.value;
  nap1.innerHTML = nap.value;
  night1.innerHTML = night.value;
}

let btn_alrm = document.getElementById("alarmSet");
btn_alrm.addEventListener("click", setAlarm);
