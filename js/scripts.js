$(document).ready(function() {
  $("#addContact").submit(function(event) {
    var name = $("input#name").val();
    var address = $("input#address").val();
    var phoneNumber = $("input#phoneNumber").val();
    var email = $("input#email").val();
    event.preventDefault();
    $("#first").after("<div id=\"con\"> <p class=\"blue\">" + name + "</p>" + "<ul class=\"hidden\"> <li> " + address + " </li>  <li> " + phoneNumber + " <li> " + email + " </li>  </ul> </div>"); // + "<ul>" + "<li>" + address + "</li>" + "<li>" + phoneNumber + "</li>" + "<li>" + Email + "</li>" + "</ul>" );
    //$(".blue").after("<ul> <li> " + address + " </li>  <li> " + phoneNumber + " <li> " + email + " </li>  </ul>");
    //$(".contacts").append()

    event.preventDefault();

    $("#con").click(function() {
      $(this).children("ul").toggleClass("hidden");
    });

  });

});