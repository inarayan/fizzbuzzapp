$('document').ready(function()
{
  $('#button').click(function()
{
  var disp="";
  var num=$('#input').val();
  console.log(parseInt(num));
  if (isNaN(parseInt(num))){
    alert("You have entered an invalid number");
  }
  else
    {
      fizzbuzzfunc(num);
    }
});
});

var fizzbuzzfunc=function (num)
{

  for (var i=1;i<=num;i++){
    if (i%3==0 && i%5==0)
    {
      //console.log("fizzbuzz");
      $('#display').before("<p>fizzbuzz</p>");
    }
    else if(i%3==0)
    {
      $('#display').before("<p>fizz</p>");
    }
    else if(i%5==0)
    {
      $('#display').before("<p>buzz</p>");
    }
    else {
        $('#display').before("<p>"+i+"</p>");
    }
  }
}
