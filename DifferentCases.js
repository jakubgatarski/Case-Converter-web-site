


let upperCaseBtn = document.getElementById("upper-case");
let lowerCaseBtn = document.getElementById("lower-case");
let properCaseBtn = document.getElementById("proper-case");
let sentenceCaseBtn = document.getElementById("sentence-case");
let saveBtn = document.getElementById("save-text-file");

//change text to upper case
upperCaseBtn.addEventListener("click", function (){
    let text = document.getElementById("text-area").value;
    text = text.toUpperCase();
    document.getElementById("text-area").value = text;
});

// change text to lower case
lowerCaseBtn.addEventListener("click", function (){
    let text = document.getElementById("text-area").value;
    text = text.toLowerCase();
    document.getElementById("text-area").value = text;
});


//change text to proper case
properCaseBtn.addEventListener("click", function (){
    let text = document.getElementById("text-area").value;
    text = text.toLowerCase();
    text = text.split(' ');                               //split string to single words
    for (let i = 0; i<text.length; i++) {
        text[i] = text [i].charAt(0).toUpperCase()+text[i].slice(1);
    }
    text = text.join(' ');
    document.getElementById("text-area").value = text;
});

//change text to sentence case
sentenceCaseBtn.addEventListener("click", function (){
    let text = document.getElementById("text-area").value;
    text = text.toLowerCase();
    text =text.split(". ");                                 //split sting to single sentences

    for (let i = 0; i<text.length; i++) {
        text[i] = text [i].charAt(0).toUpperCase()+text[i].slice(1);
    }
    text = text.join('. ');
    document.getElementById("text-area").value = text;
});
/*
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}*/



//download("text.txt",text);

saveBtn.addEventListener("click",function (){
    function download(filename, text) {
        let element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }
    let text = document.getElementById("text-area").value;
    download("text.txt",text);
});
// Start file download.
