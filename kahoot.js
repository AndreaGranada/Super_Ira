function CreateKahoot(x, y, parent) {
  var self = this;
  this.x = x;
  this.y = y;
  this.width = 25;
  this.height = 25;
  this.sprite
  this.controlInsert = true
  this.controlColission = true

  /*this.insertKahoot = function () {
    var newKahoot = document.createElement('div');
    newKahoot.classList.add('kahoot');
    parent.appendChild(newKahoot);
  this.sprite = newKahoot;
  var randomPlace = Math.floor(Math.random() * 6)
  self.x = self.places[randomPlace][0];
  self.y = self.places[randomPlace][1];
  self.sprite.style.left = self.x + 'px'
  self.sprite.style.bottom = self.y + 'px'
  }*/

  //this.places = [[140, 105],[144, 113],[64, 419],[370, 235],[220, 318],[173, 519]];

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