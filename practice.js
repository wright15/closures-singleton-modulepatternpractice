
var erick = { birdCounting:
    function() {
  var count = 0;
  return () => {
  count += 1;
  return count + ' birds';
  }  
 }}



function dogCounting() {
  var count = 0;
  return () => {
  count += 1;
  return count + ' dogs';
  }
  
}
