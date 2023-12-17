function CreateEnemy(x, y, parent, platforms, pipeline) {
  var self = this;
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 23;
  this.direction = +1;
  this.updown = -1;
  this.speed = 2;
  this.jumpspeed = 6;
  this.gameOver = false;
  this.sprite;
  this.floor = 15;
  this.colisionPlatform = false;
  this.colisionPipeline = false;
  this.carcel = false
  this.insertEnemy = function () {
    var newEnemy = document.createElement('div');
    newEnemy.classList.add('enemy');
    newEnemy.style.bottom = this.y + 'px';
    newEnemy.style.left = this.x + 'px';
    parent.appendChild(newEnemy);
    this.sprite = newEnemy;
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

    //teletransporte


    if (self.y < 20 && self.x > 430) {
      self.y = 640
      self.x = 0
      self.updown = -1
      console.log("teleport")
    }

  };

  this.randomDirection = function () {
    var random = Math.floor(Math.random() * 10);
    if (random > 8) {
      self.direction *= -1;
    }
  };

  this.timerId = setInterval(this.move, 50);
  this.timerIdEnemy = setInterval(this.randomDirection, 500);

  //Collison with plataform7



  this.checkCollision = function () {

    if (platforms[6].x < (self.x + self.width) &&
      platforms[6].y < self.y &&
      platforms[6].x + platforms[6].width > self.x &&
      platforms[6].y + platforms[6].height > self.y && self.updown === -1) {
      self.updown = 0;
      self.colisionPlatform = true;
    }

    //caida izquierda enemigo
    if (platforms[6].x > self.x + self.width && self.colisionPlatform) {
      if (self.updown !== +1) {
        self.updown = -1;
        self.colisionPlatform = false;

      }

    }

    //caida derecha enemigo
    if (platforms[6].x + platforms[6].width < self.x && self.colisionPlatform) {
      if (self.updown !== +1) {
        self.updown = -1;
        self.colisionPlatform = false;

      }
    }

    for (let i = 0; i < platforms.length - 1; i++) {

      if (self.y < platforms[i + 1].y && self.y > platforms[i].y) {
        if (platforms[i].x < (self.x + self.width) &&
          platforms[i].y < self.y &&
          platforms[i].x + platforms[i].width > self.x &&
          platforms[i].y + platforms[i].height > self.y && self.updown === -1) {
          self.updown = 0;
          self.colisionPlatform = true;
        }

        //caida izquierda enemigo
        if (platforms[i].x > self.x + self.width && self.colisionPlatform) {
          if (self.updown !== +1) {
            self.updown = -1;
            self.colisionPlatform = false;
            console.log('caida izq')
          }

        }

        //caida derecha enemigo
        if (platforms[i].x + platforms[i].width < self.x && self.colisionPlatform) {
          if (self.updown !== +1) {
            self.updown = -1;
            self.colisionPlatform = false;
            console.log('caida derecha')
          }
        }
      }

      //colision con tuberia

      if (pipeline.x < (self.x + self.width) &&
        pipeline.y < self.y &&
        pipeline.x + pipeline.width > self.x &&
        pipeline.y + pipeline.height > self.y && self.updown === -1) {
        self.updown = 0;
        self.colisionPipeline = true;
      }

      //caida izquierda enemigo
      if (pipeline.x > self.x + self.width && self.colisionPipeline) {
        if (self.updown !== +1) {
          self.updown = -1;
          self.colisionPipeline = false;

        }

      }

      //caida derecha enemigo
      if (pipeline.x + pipeline.width < self.x && self.colisionPipeline) {
        if (self.updown !== +1) {
          self.updown = -1;
          self.colisionPipeline = false;

        }
      }

      this.removeEnemy = function() {
        parent.removeChild(this.sprite)
        //clearInterval(this.timerId )
        //enemies = enemies.filter(function(enemy) {
        //  return enemy !== self.sprite
        //})
      }
    }

    // //colision con plataform6

    // if (self.y < platforms[6].y && self.y > platforms[5].y) {
    //   if (platforms[5].x < (self.x + self.width) &&
    //     platforms[5].y < self.y &&
    //     platforms[5].x + platforms[5].width > self.x &&
    //     platforms[5].y + platforms[5].height > self.y && self.updown === -1) {
    //     self.updown = 0;
    //     self.colisionPlatform = true;
    //   }

    //   //caida izquierda enemigo
    //   if (platforms[5].x > self.x + self.width && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida izq')
    //     }

    //   }

    //   //caida derecha enemigo
    //   if (platforms[5].x + platforms[5].width < self.x && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida derecha')
    //     }
    //   }
    // }

    // //colision con plataform5

    // if (self.y < platforms[5].y && self.y > platforms[4].y) {
    //   if (platforms[4].x < (self.x + self.width) &&
    //     platforms[4].y < self.y &&
    //     platforms[4].x + platforms[4].width > self.x &&
    //     platforms[4].y + platforms[4].height > self.y && self.updown === -1) {
    //     self.updown = 0;
    //     self.colisionPlatform = true;
    //   }

    //   //caida izquierda enemigo
    //   if (platforms[4].x > self.x + self.width && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida izq')
    //     }

    //   }

    //   //caida derecha enemigo
    //   if (platforms[4].x + platforms[4].width < self.x && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida derecha')
    //     }
    //   }
    //}

    // //colision con plataform4

    // if (self.y < platforms[4].y && self.y > platforms[3].y) {
    //   if (platforms[3].x < (self.x + self.width) &&
    //     platforms[3].y < self.y &&
    //     platforms[3].x + platforms[3].width > self.x &&
    //     platforms[3].y + platforms[3].height > self.y && self.updown === -1) {
    //     self.updown = 0;
    //     self.colisionPlatform = true;
    //   }

    //   //caida izquierda enemigo
    //   if (platforms[3].x > self.x + self.width && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida izq')
    //     }

    //   }

    //   //caida derecha enemigo
    //   if (platforms[3].x + platforms[3].width < self.x && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida derecha')
    //     }
    //   }
    // }

    // //colision con plataform3

    // if (self.y < platforms[3].y && self.y > platforms[2].y) {
    //   if (platforms[2].x < (self.x + self.width) &&
    //     platforms[2].y < self.y &&
    //     platforms[2].x + platforms[2].width > self.x &&
    //     platforms[2].y + platforms[2].height > self.y && self.updown === -1) {
    //     self.updown = 0;
    //     self.colisionPlatform = true;
    //   }

    //   //caida izquierda enemigo
    //   if (platforms[2].x > self.x + self.width && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida izq')
    //     }

    //   }

    //   //caida derecha enemigo
    //   if (platforms[2].x + platforms[2].width < self.x && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida derecha')
    //     }
    //   }
    // }

    // //colision con plataform2

    // if (self.y < platforms[2].y && self.y > platforms[1].y) {
    //   if (platforms[1].x < (self.x + self.width) &&
    //     platforms[1].y < self.y &&
    //     platforms[1].x + platforms[1].width > self.x &&
    //     platforms[1].y + platforms[1].height > self.y && self.updown === -1) {
    //     self.updown = 0;
    //     self.colisionPlatform = true;
    //   }

    //   //caida izquierda enemigo
    //   if (platforms[1].x > self.x + self.width && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida izq')
    //     }

    //   }

    //   //caida derecha enemigo
    //   if (platforms[1].x + platforms[1].width < self.x && self.colisionPlatform) {
    //     if (self.updown !== +1) {
    //       self.updown = -1;
    //       self.colisionPlatform = false;
    //       console.log('caida derecha')
    //     }
    //   }
    // }
  }

  // this.checkCollision = function () {
  //   platforms.forEach(function (plataform) {
  //     if (self.x < (plataform.x + plataform.width) &&
  //       self.y < plataform.y &&
  //       self.x + self.width > plataform.x &&
  //       self.y + self.height > plataform.y) {
  //       self.updown = 0;
  //       self.colisionPlatform = true;
  //       console.log("colision")
  //       console.log(self.colisionPlatform)
  //       //self.colisionplataform = true;
  //       //plataform.removeplataform()
  //       //enemies.splice(i, 1)
  //     }

  //     //caida izquierda
  //     if (plataform.x > self.x + self.width && self.colisionPlatform) {
  //       if (self.updown !== +1) {
  //           self.updown = -1;
  //           self.colisionPlatform = false;
  //       }
  //       console.log("caida izq")

  //   }

  //   //caida derecha
  //   if (plataform.x + plataform.width < self.x && self.colisionPlatform) {
  //       if (self.updown !== +1) {
  //           self.updown = -1;
  //           self.colisionPlatform = false;
  //       }
  //       console.log("caida derecha")
  //   }

  //   })
  // }
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