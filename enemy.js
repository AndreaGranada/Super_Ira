function CreateEnemy(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 30;
    this.height = 23;
    this.direction = 0;
    this.updown = 0;
    this.speed = 5;
    this.jumpspeed = 6;
    this.isDead = false;
    this.sprite
    this.floor = 15;
    this.insertEnemy = function () {
        var newEnemy = document.createElement('div');
        newEnemy.classList.add('enemy');
        newEnemy.style.bottom = this.y + 'px';
        newEnemy.style.left = this.x + 'px';
        parent.appendChild(newEnemy);
        this.sprite = newEnemy;
    }

    this.moveEnemy = function() {
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
export{CreateEnemy}