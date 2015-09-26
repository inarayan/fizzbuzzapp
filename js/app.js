$('document').ready(function()
{
  $('#button').click(function()
{
  var disp="";
  var num=$('#input').val();
  var i=0;
  for (i=1;i<=num;i++){
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
      {
        $('#display').before("<p>"+i+"</p>");
      }
    }
  }
});
});
