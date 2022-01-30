var str = document.getElementById("opris1");
str.onclick = function() {
  let name = prompt('Укажите имя');
  let age = prompt('Укажите ваш возраст?');
  let qestion = confirm("Ты представитель мужского пола?")
  if (qestion==true){
    alert(age+' летний '+name +', школьник, который представляет цивилизацию мужского пола всегда аккуратный');
  }
  else{
    alert(age+' летняя '+name +', девочка, ты очень красивая, продолжай радовать этот мир своей внещностью.');
  }
}
var str2 = document.getElementById("opris2");
str2.onclick = function() {
  alert("Не пытайся выделиться, нажимай куда скажут, в следующий раз в угл поставлю");
  let name = prompt('Укажите имя');
  let age = prompt('Укажите ваш возраст?');
  let qestion = confirm("Ты представитель мужского пола?")
  if (qestion==true){
    alert(age+' летний '+name +', школьник, который представляет цивилизацию мужского пола всегда аккуратный');
  }
  else{
    alert(age+' летняя '+name +', девочка, ты очень красивая, продолжай радовать этот мир своей внещностью.');
  }
}
