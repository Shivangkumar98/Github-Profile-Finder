$(document).ready(function() {
    $("#search").focus(function() {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
    });
  
    $("#search").blur(function() {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
    });
  
    $("#search").keyup(function() {
        if ($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
        } else {
            $(".go-icon").removeClass("go-in");
  
        }
    });
  
    $(".go-icon").click(function() {
        $(".search-form").submit();
    });
  });


  function fetchUserDetailsAndRepos() {
    const username = document.getElementById('search').value;
  
    // Open a new window and pass the search query as a URL parameter
    const newWindow = window.open('', '_blank');
    const url = `result.html?username=${username}`;
    newWindow.location.href = url;
  }
  const newWindow = window.open('', '_blank');
  const url = 'result.html?username=${username}';
  