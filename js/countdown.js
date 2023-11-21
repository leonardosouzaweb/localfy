var countDownDate = new Date("Mar 31, 2023 23:59:59").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML = (days > 10 ? days : "0"+days) + "<span>"+(days > 1 ? ' : ' : ' : ')+"</span>" +  (hours > 10 ? hours : "0"+hours) + "<span>"+(hours > 1 ? ' : ' : ' : ')+"</span>" + (minutes > 10 ? minutes : "0"+minutes);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);