function showDateTime() {
  const now = new Date();
  
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  document.getElementById("dateTime").innerHTML = `${date} <br> ${time}`;
}

showDateTime();

setInterval(showDateTime, 1000);


