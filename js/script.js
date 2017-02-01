var openBtn    = document.querySelector(".open-btn");
var inputField = document.querySelector(".input-field");
var closeBtn   = document.querySelector(".close-btn");
var content    = document.querySelector(".content-wrapper");
var bool       = 0;

openBtn.onclick = function () {
    openBtn.style.visibility = "hidden";
    inputField.classList.add("visible-btn");
    closeBtn.style.visibility = "visible";
    setTimeout(function(){
        inputField.focus()
        },40);
    bool = 1;
};

closeBtn.onclick = function () {
    openBtn.style.visibility = "visible";
    inputField.classList.remove("visible-btn");
    inputField.innerHTML = "";
    closeBtn.style.visibility = "hidden";
    bool = 0;
};

document.getElementById('input-form').addEventListener('keypress', function(event) {
    if (event.keyCode == 13) {

        event.preventDefault();
        content.innerHTML = "";
        var searchRequest = inputField.value;
          
        $.ajax({
            url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search='+ searchRequest +'&format=json&callback=?',
            type: 'GET',
            dataType: 'json',
            success: function (data) {

                for (var i = 0; i < data[1].length; i++) {
                    content.innerHTML += 
                        '<div class="content">' +
                            '<h2>' +
                                '<a target="_blank" href=' + data[3][i] + '>' + data[1][i] + '</a>' +
                            '</h2>' +
                            '<p>' + data[2][i] + '</p>' +
                        '</div>';
                };
            }
        });
    };
});


