function GetLinks(pattern) {
    var elements = document.querySelectorAll("a");

    var links = []

    for (var i = 0; i < elements.length; i++) {
        links.push(elements[i].href);
    };

    var table = '<html><body><table><tbody>';

    for (var i = 0; i < links.length; i++) {
        var link = links[i];

        if (new RegExp(pattern).test(link)) {
            table += '<tr><td>' + link + '</tr></td>';
        }
    };

    table += '</table></tbody></body></html>';

    var w = window.open("");
    w.document.write(table);
    w.document.close();
}

// Update this line with the desired pattern to return
GetLinks("/download/.*\.chd");

// Copy the contents of the resulting page into download manager