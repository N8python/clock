window.onload = function() {
  var canvas = document.getElementById("clockCanvas");
  var ctx = canvas.getContext("2d");
  var clock = document.getElementById("clockImg");

  function loop() {
    var date = new Date();
    var seconds = 0
    ctx.clearRect(0, 0, 230, 230);
    ctx.drawImage(clock, 0, 0);
    ctx.strokeStyle = "Red";
    ctx.translate(110, 110)
    ctx.rotate((6 * date.getSeconds()) * Math.PI / 180)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -90);
    ctx.stroke();
    ctx.rotate(((6 * date.getSeconds()) * Math.PI / 180) * -1)
    ctx.translate(-110, -110)
    ctx.strokeStyle = "Black";
    ctx.translate(110, 110)
    ctx.rotate(((6 * date.getMinutes()) + (0.1 * date.getSeconds())) * Math.PI / 180)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -80);
    ctx.stroke();
    ctx.rotate((((6 * date.getMinutes()) + (0.1 * date.getSeconds())) * Math.PI / 180) * -1)
    ctx.translate(-110, -110)
    ctx.strokeStyle = "Black";
    ctx.translate(110, 110)
    ctx.rotate(((((date.getHours() % 12) * 30) + (0.5 * date.getMinutes()) + (0.008 * date.getSeconds()))) * Math.PI / 180)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, -60);
    ctx.stroke();
    ctx.rotate(((((date.getHours() % 12) * 30) + (0.5 * date.getMinutes()) + (0.008 * date.getSeconds()))) * Math.PI * -1 / 180)
    ctx.translate(-110, -110)
  }
  loop();
  var intervalId = setInterval(loop, 1000);
}
