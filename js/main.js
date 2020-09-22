$(document).ready(() => {
    var specialElemetHandler = {
        "#editor":(element, renderer) => {
            return true
        }
    }
    
    $("#generate").click(() => {
        var doc = new jsPDF()

        doc.fromHTML($("#target").html(), 15, 15, {
            "width":100,
            "elementHandlers":specialElemetHandler
        })
        doc.save("sample-file.pdf")
    })

    // $("#generate-table").on("click", function () {
    //     $("#example").tableHTMLExport({ type: "pdf", filename: "sample.pdf" });
    //   });

    $("#generate-table").on("click", () => {
        var doc = new jsPDF()
        doc.autoTable({
            html:'#example'
        })

        doc.save("sample-table-temp1.pdf")
    })
})