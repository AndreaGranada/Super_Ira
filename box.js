function CreateBox(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 35;
    this.sprite
    this.insertBox = function () {
      var newBox = document.createElement('div');
      newBox.classList.add('box');
      newBox.style.bottom = this.y + 'px';
      newBox.style.left = this.x + 'px';
      parent.appendChild(newBox);
    this.sprite = newBox;
    }
}

export { CreateBox }