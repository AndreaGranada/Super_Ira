import { createEnemy } from "./index.js";

function CreatePlayer(x, y, parent, enemies, star, lifes) {
  var self = this;
  this.x = x;
  this.y = y;
  this.width = 50;
  this.height = 78;
  this.direction = 0;
  this.updown = 0;
  this.speed = 5;
  this.jumpspeed = 6;
  this.hp = 3;
  this.isDead = false;
  this.sprite
  this.floor = 15;
  this.points = 0;
  this.noGaming = true;
  this.insertPlayer = function () {
    var newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.style.bottom = this.y + 'px';
    newPlayer.style.left = this.x + 'px';
    parent.appendChild(newPlayer);
    this.sprite = newPlayer;
    score.innerText = self.points.toString().padStart(4, '0');
  }

  this.move = function () {
    var nextX = self.x + self.speed * self.direction;
    var nextY = self.y + self.jumpspeed * self.updown;

    if (nextX >= 0 && nextX <= 485) {
      self.x += self.speed * self.direction;
      self.sprite.style.left = self.x + 'px';
    }

    if (nextY >= self.floor && nextY < 550 + self.height) {
      self.y += self.jumpspeed * self.updown
      self.sprite.style.bottom = self.y + 'px'
    }

  }

  var collisionCat = new Audio("./sounds/cat.mp3")

  this.checkCollision = function () {
    if (enemies && enemies.length > 0) {
      enemies.forEach(function (enemy) {
        if (self.x < (enemy.x + enemy.width) &&
          self.y < enemy.y + enemy.height &&
          self.x + self.width > enemy.x &&
          self.y + self.height > enemy.y &&
          enemy.collision === false) {

          enemy.collision = true;
          self.hp--

          if (self.noGaming === false) {
            collisionCat.currentTime = 0
            collisionCat.volume = 0.1
            collisionCat.play()
          }


          var animation = setInterval(function () {
            if (enemy.sprite.style.display === "block") {
              enemy.sprite.style.display = "none"
            } else { enemy.sprite.style.display = "block" }
          }, 200)

          setTimeout(function () {
            enemy.collision = false
            clearInterval(animation);
            enemy.sprite.style.display = "block"
          }, 10000)

          if (lifes.length != 0) {
            lifes[lifes.length - 1].removeHp()
          }
          lifes.pop()

          if (self.hp === 0) {
            self.isDead = true
          }

        }
      })
    }

    if (self.x < (star.x + star.width) &&
      self.y < star.y + star.height &&
      self.x + self.width > star.x &&
      self.y + self.height > star.y) {
      star.respawn();
      createEnemy();
      var score = document.getElementById("score")
      self.points += 10
      score.innerText = self.points.toString().padStart(4, '0');
    }
  }
}




export { CreatePlayer }