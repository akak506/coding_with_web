function selectImage() {
    let element = document.getElementById("dropdown").value;
    document.getElementById("imagebox").src = element;
}


function showTopHeaders() {
    let text1 = document.getElementById("topHeader").value;
    document.getElementById("text-1").innerHTML = text1;


}

function showBottomHeaders() {
    let text2 = document.getElementById("bottomHeader").value;
    document.getElementById("text-2").innerHTML = text2;
}

function changeFont1(selectedFont) {
    let changeFont1 = document.getElementById("font1").value;
    document.getElementById("text-1").style.fontFamily = changeFont1;
    document.getElementById("text-2").style.fontFamily = changeFont1;
}


function changeFont2(selectedFont) {
    let changeFont2 = document.getElementById("font2").value;
    document.getElementById("text-1").style.fontFamily = changeFont2;
    document.getElementById("text-2").style.fontFamily = changeFont2;
}

function changeFont3(selectedFont) {
    let changeFont3 = document.getElementById("font3").value;
    document.getElementById("text-1").style.fontFamily = changeFont3;
    document.getElementById("text-2").style.fontFamily = changeFont3;
}

function updateFontColor() {
    const fontColor = document.getElementById("font-color").value;

    const text1Element = document.getElementById("text-1");
    text1Element.style.color = fontColor;

    const text2Element = document.getElementById("text-2");
    text2Element.style.color = fontColor;
}

document
    .getElementById("font-color")
    .addEventListener("change", updateFontColor);

updateFontColor();

function updateFontSize() {
    const fontSize = document.getElementById("font-size").value + "px";

    const text1Element = document.getElementById("text-1");
    text1Element.style.fontSize = fontSize;

    const text2Element = document.getElementById("text-2");
    text2Element.style.fontSize = fontSize;
}

document
    .getElementById("font-size")
    .addEventListener("change", updateFontSize);

updateFontSize();

function updateTextStroke() {
    const textStroke = document.getElementById("text-stroke").value;

    const text1Element = document.getElementById("text-1");
    text1Element.style.fontWeight = textStroke;

    const text2Element = document.getElementById("text-2");
    text2Element.style.fontWeight = textStroke;
}

document
    .getElementById("text-stroke")
    .addEventListener("change", updateTextStroke);

updateTextStroke();





