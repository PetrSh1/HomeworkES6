'use strict';

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    makeDiv(){
        let anyText = prompt ('Введите текст', ''),
            elem = document.createElement('div');
            elem.textContent = `${anyText}`;
            document.body.appendChild(elem);    
            elem.style.cssText = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        }
}

let newElement = new Options('100', '100', 'red', '16', 'center');
newElement.makeDiv();