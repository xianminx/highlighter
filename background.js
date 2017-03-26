$.getJSON(chrome.runtime.getURL('assets/gre3000.json'), function(words) {
    console.log("" + words.length +" words were loaded.");

    $("body").highlight(words, { caseSensitive: false, wordsOnly: true });
    $(".highlight").css({ backgroundColor: "#FFFF88" });

    //element: 'a', className: 'highlight'
    //$("body a.highlight").attr({ href: 'https://www.google.com' });

    //$("body").unhighlight({element: 'span', className: 'highlight'  });

});
