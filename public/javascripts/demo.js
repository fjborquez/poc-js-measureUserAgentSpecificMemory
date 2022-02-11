const button = document.getElementById('myButton');
button.addEventListener('click', function(e) {
  return performance.measureUserAgentSpecificMemory().then(obj => {
    console.log(obj);
  });
});
