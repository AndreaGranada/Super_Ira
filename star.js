function CreateStar(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 78;
    this.sprite
    this.insertStar = function () {
      var newStar = document.createElement('div');
      newStar.classList.add('star');
      newStar.style.bottom = this.y + 'px';
      newStar.style.left = this.x + 'px';
      parent.appendChild(newStar);
    this.sprite = newStar;
    }

    this.places = [[170, 125],[150, 125],[400, 225],[280, 325],[50, 425],[160, 525]]
  
    this.respawn = function () {
        var randomPlace = Math.floor(Math.random() * 7)
        self.x = self.places[randomPlace][0];
        self.y = self.places[randomPlace][1];
        self.sprite.style.left = self.x + 'px'
        self.sprite.style.bottom = self.y + 'px'
    }
  }
  
  
  
  
  export { CreateStar }