function Characters(image, left, top, width, height) {
    this.image = image;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;

    this.createCharElement = function () {
        return  '<img src="' + this.image + '"' + 'width="' + this.width + '"' +
            'height="' + this.height + '"' +
            'style="top:' + this.top + 'px; left:' + this.left + 'px; position:absolute;">'
    };
    this.moveRight = function () {
        this.left += 20;
    };
    this.moveBottom = function () {
        this.top += 20;
    };
    this.moveLeft = function () {
        this.left -= 20;
    };
    this.moveTop = function () {
        this.top -= 20;
    };
}
let nobita = new Characters("nobita.jpg", 0, 0, 200, 140);
function displayNobita() {
    document.getElementById("game").innerHTML = nobita.createCharElement();
}
displayNobita();
function moveNobita() {
    if ((nobita.left + nobita.width) < window.innerWidth && nobita.top === 0) {
        nobita.moveRight();
    }
    else {{
        if ((nobita.top + nobita.height) < window.innerHeight && nobita.left !== 0) {
            nobita.moveBottom();
        }
        else {
            if (nobita.left > 0) {
                nobita.moveLeft();
            }
            else {
                nobita.moveTop();
            }
            }
        }
    }
    displayNobita();
}
setInterval(moveNobita, 100);