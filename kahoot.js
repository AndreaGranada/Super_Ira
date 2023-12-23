function CreateKahoot(x, y, parent) {
  var self = this;
  this.x = x;
  this.y = y;
  this.width = 25;
  this.height = 25;
  this.sprite
  this.controlInsert = true
  this.controlColission = true

  this.insertKahoot = function () {
    var newKahoot = document.createElement('div');
    newKahoot.classList.add('kahoot');
    parent.appendChild(newKahoot);
    self.sprite = newKahoot;
    self.x = 200
    self.y = 225
    self.sprite.style.left = '200px'
    self.sprite.style.bottom = '225px'
  }

  this.removeKahoot = function () {
    if (document.querySelector(".kahoot")) {
      document.querySelector(".kahoot").remove();
      self.x = 650
      self.y = 0
    }
  }
}

export { CreateKahoot }