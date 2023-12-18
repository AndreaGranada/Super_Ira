import { createEnemy } from "./index.js";

function CreatePlayer(x, y, parent, enemies, star, lifes, kahoot) {
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
  this.superMode = false

  this.superIra = function () {
    self.superMode = true
    self.speed = 10
    setTimeout(function () {
      self.superMode = false
      kahoot.controlColission = true
      self.speed = 5
    }, 5000)
  }

  this.insertPlayer = function () {
    var newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.classList.add('jugador');
    newPlayer.style.bottom = this.y + 'px';
    newPlayer.style.left = this.x + 'px';
    parent.appendChild(newPlayer);
    this.sprite = newPlayer;
    score.innerText = self.points.toString().padStart(4, '0');
  }

  this.move = function () {
    var nextX = self.x + self.speed * self.direction;
    var nextY = self.y + self.jumpspeed * self.updown;

    if (nextX >= 0 && nextX <= 460) {
      self.x += self.speed * self.direction;
      self.sprite.style.left = self.x + 'px';
    }

    if (nextY >= self.floor && nextY < 550 + self.height) {
      self.y += self.jumpspeed * self.updown
      self.sprite.style.bottom = self.y + 'px'
    }

  }

  var collisionCat = new Audio("./sounds/cat.mp3")
  var collisionChoco = new Audio("./sounds/nam.mp3")
  var collisionKahoot = new Audio("./sounds/bueno.mp3")
  var iraDead = new Audio("./sounds/fatal.mp3")

  this.checkCollision = function () {
    if (enemies && enemies.length > 0) {
      enemies.forEach(function (enemy) {
        if (self.x < (enemy.x + enemy.width) &&
          self.y < enemy.y + enemy.height &&
          self.x + self.width > enemy.x &&
          self.y + self.height > enemy.y &&
          enemy.collision === false) {

          enemy.collision = true;
          if (self.superMode === false && self.noGaming === false) {
            self.hp--
            iraDead.currentTime = 0.1
            iraDead.volume = 0.99
            iraDead.play()
            if (lifes.length != 0) {
              lifes[lifes.length - 1].removeHp()
            }
            lifes.pop()
          }


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
            if (enemy.x != 10 && enemy.y != 40) {
              enemy.collision = false
            }
            clearInterval(animation);
            enemy.sprite.style.display = "block"
          }, 10000)



          // if (self.hp === 0) {
          //   self.isDead = true
          // }
          //self.y + self.height > enemy.y) {
          if (self.superMode) {
            enemy.x = 10
            enemy.y = 40
            enemy.speed = 0
            //enemy.carcel= true
            enemy.collision = true;
            var score = document.getElementById("score")
            self.points += 50
            score.innerText = self.points.toString().padStart(4, '0');
          }

          if (self.hp === 0) {
            self.isDead = true
          }
        }
      })
    }

    if (self.x < (star.x + star.width) &&
      self.y < star.y + star.height &&
      self.x + self.width > star.x &&
      self.y + self.height > star.y && star.controlColission) {
      star.controlColission = false;
      collisionChoco.currentTime = 0.4
      collisionChoco.volume = 0.99
      collisionChoco.play()
      star.respawn();
      createEnemy();
      var score = document.getElementById("score")
      self.points += 10
      score.innerText = self.points.toString().padStart(4, '0');
      kahoot.controlInsert = true
      setTimeout(function () {
        star.controlColission = true;
      }, 1000)
    }

    if (self.x < (kahoot.x + kahoot.width) &&
      self.y < kahoot.y + kahoot.height &&
      self.x + self.width > kahoot.x &&
      self.y + self.height > kahoot.y && kahoot.controlColission) {
      kahoot.controlColission = false;
      collisionKahoot.currentTime = 0.1
      collisionKahoot.volume = 0.99
      collisionKahoot.play()
      kahoot.removeKahoot()
      console.log("superire")
      self.superIra()
    }
  }
}




export { CreatePlayer }