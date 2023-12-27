function CreateStar(x, y, parent) {
    var self = this;
    this.contador= 0;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 78;
    this.sprite
    this.controlColission=true
    this.beforePossitionX = 400;
    this.beforePossitionY = 225;   

    this.insertStar = function () {
      var newStar = document.createElement('div');
      newStar.classList.add('star');
      newStar.style.bottom = this.y + 'px';
      newStar.style.left = this.x + 'px';
      parent.appendChild(newStar);
    this.sprite = newStar;
    }

    this.places = [[170, 125],[150, 125],[400, 225],[280, 325],[50, 425],[160, 525],[420,230],[325,445]]

    this.respawn = function () {
        var randomPlace = Math.floor(Math.random() * 8)

        while(self.places[randomPlace][0]===self.beforePossitionX && self.places[randomPlace][1]===self.beforePossitionY){
          randomPlace = Math.floor(Math.random() * 8)
        }

        self.x = self.places[randomPlace][0];
        self.y = self.places[randomPlace][1];
        self.sprite.style.left = self.x + 'px'
        self.sprite.style.bottom = self.y + 'px'
        self.contador++
        self.beforePossitionX = self.places[randomPlace][0]
        self.beforePossitionY = self.places[randomPlace][1]
    }
  }
  
  
  
  
  export { CreateStar }