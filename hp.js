function CreateLife(x, parent) {
  var self = this;
  this.x = x;

  this.sprite

  this.insertLife = function () {
    var newLife = document.createElement('div');
    newLife.classList.add('heart');
    newLife.style.left = this.x + 'px';
    parent.appendChild(newLife);
    this.sprite = newLife;

    this.removeHp = function() {
        parent.removeChild(this.sprite)
      }
  }
}

export { CreateLife }