$.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
        var that = this,
        currentCategory = "";
        $.each( items, function( index, item ) {
            if ( item.category != currentCategory ) {
                ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
                currentCategory = item.category;
            }
            that._renderItemData( ul, item );
        });
    }
});

$(function(){
    var target="php/autoList.php";
    var data = [
       { label: "anders", category: "" },
       { label: "andreas", category: "" },
       { label: "antal", category: "" },
       { label: "annhhx10", category: "Products" },
       { label: "annk K12", category: "Products" },
       { label: "annttop C13", category: "Products" },
       { label: "anders andersson", category: "People" },
       { label: "andreas andersson", category: "People" },
       { label: "andreas johnson", category: "People" }
       ];


    $("#search").catcomplete({source:data});
});
