$(document).ready(function(){
    //var url2 = "http://dev5.srv.kkcorp/~haopingyu/jQuerySample/php/autoList.php"
    var target="php/autoList.php";
    
    $("#auto").autocomplete({source:target});
});
