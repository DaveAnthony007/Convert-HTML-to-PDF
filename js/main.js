$(document).ready(function() {
    var specialElemetHandler = {
        "#editor":function(elemtn, renderer) {
            return true
        }
    }
    
    $("#generate").click(function() {
        var doc = new jsPDF()

        doc.fromHTML($("#target").html(), 15, 15, {
            "width":170,
            "elementHandlers":specialElemetHandler
        })
        doc.save("sample-file.pdf")
    })

})