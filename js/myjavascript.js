// var timer2 = "2:00";
// var interval = setInterval(function() {


//     var timer = timer2.split(':');
//     //by parsing integer, I avoid all extra string processing
//     var minutes = parseInt(timer[0], 10);
//     var seconds = parseInt(timer[1], 10);
//     --seconds;
//     minutes = (seconds < 0) ? --minutes : minutes;
//     if (minutes < 0) clearInterval(interval);
//     seconds = (seconds < 0) ? 59 : seconds;
//     seconds = (seconds < 10) ? '0' + seconds : seconds;
//     //minutes = (minutes < 10) ?  minutes : minutes;
//     $('.countdown').html(minutes + ':' + seconds);
//     timer2 = minutes + ':' + seconds;
// }, 1000);


var time = new Date();
//alert(time);
time.setMinutes(time.getMinutes() + 2 );
var timestr = time.getFullYear()+'/'+(time.getMonth()+1)+"/"+time.getDate()+" "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
//alert(timestr)
$('#clock').countdown(timestr, function(event) {
    $(this).html(event.strftime('%M:%S'));
  }).on('finish.countdown', function(e){
      alert("finish")
  });