glob=0;
var time = new Date();


function opencloseFn() {
    if (document.getElementById('chatwindow').style.display=="block")
    {
      document.getElementById('chatwindow').style.display="none";
      document.getElementById('Min-Window-small').style.display="block";
	//alert("Heelooo");
    }
    else {
      document.getElementById('chatwindow').style.display="block";
      document.getElementById('Min-Window-small').style.display="none";
      document.getElementById('bigLogoImg').style.display="none";
    }
  }

function minimizeWindowFn() {
    document.getElementById('chatwindow').style.display="none";
    document.getElementById('Min-Window-small').style.display="block";
    document.getElementById('bigLogoImg').style.display="block";
}


function closeWindowFn() {

    document.getElementById('chatwindow').style.display="none";
    document.getElementById('Min-Window-small').style.display="none"; 
     document.getElementById('bigLogoImg').style.display="block";
}

function maximizeWindowFn() {
    document.getElementById('chatwindow').style.display="block";
    document.getElementById('Min-Window-small').style.display="none";
	document.getElementById('bigLogoImg').style.display="none";
}


$(document).ready(function(){
$("body").on('DOMSubtreeModified', "[role=log]", function() {
  //alert('changed');
  var terminalResultsDiv = $("[role=log]");
  
  terminalResultsDiv.scrollTop = terminalResultsDiv.scrollHeight;
  var objDiv = document.getElementById("chatlogs");
  objDiv.scrollTop = objDiv.scrollHeight;
}); 
});


function setUserResponse(val) {
        var UserResponse = '<p class="userEnteredText">' + val + '</p><div class="clearfix"></div>';
        $(UserResponse).appendTo('#result_div');
        $("#chat-input").val('');
        scrollToBottomOfResults();
        showSpinner();
         $('.spinner').fadeIn(5000,function(){
            $('.spinner').fadeOut(6000);
            
        }); 
       /*  var Response = '<p class="botResult">' + "Network Error" + '</p><div class="clearfix"></div>';
                $(Response).appendTo('#result_div');*/

        $('.suggestion').remove();
    }



function dateFunction() {
    document.getElementById("date").value= "Today, "+time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    document.getElementById("date").innerHTML=document.getElementById("date").value;
 }