function CreateEnemy(x, y, parent) {
  var self = this;
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 23;
  this.direction = +1;
  this.updown = -1;
  this.speed = 2;
  this.jumpspeed = 6;
  this.isDead = false;
  this.sprite;
  this.floor = 15;

  this.insertEnemy = function () {
    var newEnemy = document.createElement('div');
    newEnemy.classList.add('enemy');
    newEnemy.style.bottom = this.y + 'px';
    newEnemy.style.left = this.x + 'px';
    parent.appendChild(newEnemy);
    this.sprite = newEnemy;
    console.log(newEnemy);
  };

  this.move = function () {
    var nextX = self.x + self.speed * self.direction;
    var nextY = self.y + self.jumpspeed * self.updown;

    if (nextX >= 0 && nextX <= 470) {
      self.x += self.speed * self.direction;
      self.sprite.style.left = self.x + 'px';
    } else {
      self.direction *= -1;
    }

    if (nextY >= self.floor) {
      self.y += self.jumpspeed * self.updown;
      self.sprite.style.bottom = self.y + 'px';
    } //Para aplicar la caida
  };

  this.randomDirection = function () {
    var random = Math.floor(Math.random() * 10);
    if (random > 8) {
      self.direction *= -1;
      console.log('Ejecutando');
      console.log(self.direction);
    }
  };

  this.timerId = setInterval(this.move, 50);
  this.timerIdEnemy = setInterval(this.randomDirection, 500);
}

export { CreateEnemy };

//  this.checkCollision = function () {

  //    if (this.x < (player.x + player.width) &&
  //      this.y < player.y + player.height &&
  //      this.x + this.width > player.x &&
  //      this.y + this.height > player.y) {
  //      console.log('colision ando con el jugador')
  //      player.isDead = true;
  //    }

  // }