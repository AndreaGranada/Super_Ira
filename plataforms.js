function CreatePlataform(x, y, width, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 15;
    this.sprite
    this.insertPlataform = function () {
        var newPlataform = document.createElement('div');
        newPlataform.classList.add('plataform');
        newPlataform.style.bottom = this.y + 'px';
        newPlataform.style.left = this.x + 'px';
        newPlataform.style.width= this.width + 'px'
        newPlataform.style.height= this.height + 'px'
        parent.appendChild(newPlataform);
        this.sprite = newPlataform;
        console.log("patata")
    }
}

export {CreatePlataform}