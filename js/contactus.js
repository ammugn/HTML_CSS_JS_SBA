 $(document).ready(function() {
    $("select,input").change(function displayOrderId() {
        var e=document.getElementById('options');
        
        var value = e.options[e.selectedIndex].value;
        var text = e.options[e.selectedIndex].text;
      //  alert("Inside the function"+text);
        if(text=='About an Existing Order')
          $("#orderid").show();
        else
           $("#orderid").hide();
    });

});

function submitForm(){
    var message = get.getElementsById("message").value;
 alert(message);
    window.open("mailto:spiceroute@gmail.com?subject=Test%20Email&body=First%20Name:%20"+message);
}
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });