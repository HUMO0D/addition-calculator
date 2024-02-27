function calculate() {
  var input1 = parseFloat(document.getElementById("input1").value) || 0;
  var input2 = parseFloat(document.getElementById("input2").value) || 0;
  var result = input1 + input2;
  document.getElementById("output").value = result;
}