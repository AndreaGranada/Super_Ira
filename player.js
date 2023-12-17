import { createEnemy } from "./index.js";

function CreatePlayer(x, y, parent, enemies, star, kahoot) {
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
  this.floor = 15
  this.superMode = false

  this.superIra = function(){
    self.superMode= true
    setTimeout(function(){
      self.superMode= false
      kahoot.controlColission = true
    }, 5000)
  }
  
  this.insertPlayer = function () {
    var newPlayer = document.createElement('div');
    newPlayer.classList.add('player');
    newPlayer.style.bottom = this.y + 'px';
    newPlayer.style.left = this.x + 'px';
    parent.appendChild(newPlayer);
    this.sprite = newPlayer;
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

  this.checkCollision = function () {
    if (enemies && enemies.length > 0) {
      enemies.forEach(function (enemy) {
        if (self.x < (enemy.x + enemy.width) &&
          self.y < enemy.y + enemy.height &&
          self.x + self.width > enemy.x &&
          self.y + self.height > enemy.y) {
            if (self.superMode){
              enemy.x = 10
              enemy.y = 40
              enemy.speed= 0
              enemy.carcel= true
              
            }
            else if(enemy.carcel===false){ 
              self.isDead = true
            }
         

          //enemy.removeEnemy()
          //enemies.splice(i, 1)
        }
      })
    }
    if (self.x < (star.x + star.width) &&
      self.y < star.y + star.height &&
      self.x + self.width > star.x &&
      self.y + self.height > star.y && star.controlColission) {
      star.controlColission = false;
      star.respawn();
      createEnemy();
      kahoot.controlInsert= true
      setTimeout(function(){
        star.controlColission = true;
      },1000)
    }

    if (self.x < (kahoot.x + kahoot.width) &&
  self.y < kahoot.y + kahoot.height &&
  self.x + self.width > kahoot.x &&
  self.y + self.height > kahoot.y && kahoot.controlColission) {
  kahoot.controlColission = false;
  kahoot.removeKahoot()
  console.log("superire")
  self.superIra()
}
  }
}




export { CreatePlayer }