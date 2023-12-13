function CreatePlayer(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 78;
    this.direction = 0;
    this.updown = 0;
    this.speed = 5;
    this.jumpspeed = 6;
    this.isDead = false;
    this.sprite
    this.floor = 15;
    this.insertPlayer = function () {
        var newPlayer = document.createElement('div');
        newPlayer.classList.add('player');
        newPlayer.style.bottom = this.y + 'px';
        newPlayer.style.left = this.x + 'px';
        parent.appendChild(newPlayer);
        this.sprite = newPlayer;
    }

    this.move = function() {
        var nextX = self.x + self.speed * self.direction;
        var nextY = self.y + self.jumpspeed * self.updown;
        
        if(nextX >= 0 && nextX <= 485) {
          self.x += self.speed * self.direction;
          self.sprite.style.left = self.x + 'px';
        }

        if(nextY >= self.floor && nextY < 550 + self.height){
          self.y += self.jumpspeed * self.updown
          self.sprite.style.bottom = self.y + 'px'
        }
        
      }

    
    
}




export{CreatePlayer}