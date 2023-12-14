function CreatePlataform(x, y, width, parent, player, enemies) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 15;
    this.sprite;
    this.colision = false;
    this.colisionEnemy = false;
    this.insertPlataform = function () {
        var newPlataform = document.createElement('div');
        newPlataform.classList.add('plataform');
        newPlataform.style.bottom = this.y + 'px';
        newPlataform.style.left = this.x + 'px';
        newPlataform.style.width = this.width + 'px'
        newPlataform.style.height = this.height + 'px'
        parent.appendChild(newPlataform);
        this.sprite = newPlataform;
    }

    this.checkCollision = function () {

        if (this.x < (player.x + player.width) &&
            this.y < player.y /*+ player.height*/ &&
            this.x + this.width > player.x &&
            this.y + this.height > player.y && player.updown === -1) {
            player.updown = 0;
            this.colision = true;

        }

        //caida izquierda
        if (this.x + 10 > player.x + player.width && this.colision) {
            if (player.updown !== +1) {
                player.updown = -1;
                this.colision = false;
            }

        }

        //caida derecha
        if (this.x + this.width - 10 < player.x && this.colision) {
            if (player.updown !== +1) {
                player.updown = -1;
                this.colision = false;
            }
        }

        //colision con enemigo

        console.log(enemies)
        enemies.forEach(function (enemy) {
            if (self.x < (enemy.x + enemy.width) &&
                self.y < enemy.y &&
                self.x + self.width > enemy.x &&
                self.y + self.height > enemy.y && enemy.updown === -1) {
                enemy.updown = 0;
                enemy.colisionPlatform = true;
                //self.colisionEnemy = true;
                //enemy.removeEnemy()
                //enemies.splice(i, 1)
            }else if(self.x + self.width < enemy.x){
                enemy.colisionPlatform = false;
            }

            //caida izquierda enemigo
            // if (self.x > enemy.x + enemy.width && enemy.colisionPlatform) {
            //     if (enemy.updown !== +1) {
            //         //enemy.updown = -1;
            //         enemy.colisionPlatform = false;
            //         console.log('caida izq')
            //     }

            // }

            // //caida derecha enemigo
            // if (self.x + self.width < enemy.x && enemy.colisionPlatform) {
            //     if (enemy.updown !== +1) {
            //         //enemy.updown = -1;
            //         enemy.colisionPlatform = false;
            //         console.log('caida derecha')
            //     }
            // }

        })

        // if (this.x < (enemy.x + enemy.width) &&
        //     this.y < enemy.y &&
        //     this.x + this.width > enemy.x &&
        //     this.y + this.height > enemy.y && enemy.updown === -1) {
        //     enemy.updown = 0;
        //     this.colisionEnemy = true;
        // }

        //caida izquierda enemigo
        // if (this.x > enemy.x + enemy.width && this.colisionEnemy) {
        //     if (enemy.updown !== +1) {
        //         enemy.updown = -1;
        //         this.colisionEnemy = false;
        //         console.log('caida izq')
        //     }

        // }

        // //caida derecha enemigo
        // if (this.x + this.width < enemy.x && this.colisionEnemy) {
        //     if (enemy.updown !== +1) {
        //         enemy.updown = -1;
        //         this.colisionEnemy = false;
        //         console.log('caida derecha')
        //     }
        // }
        //}
    }


}

function CreatePipelines(x, y, parent, player, enemy) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 85;
    this.height = 64;
    this.sprite
    this.insertPipeline = function () {
        var newPipeline = document.createElement('div');
        newPipeline.classList.add('pipelines');
        newPipeline.style.bottom = this.y + 'px';
        newPipeline.style.left = this.x + 'px';
        newPipeline.style.width = this.width + 'px'
        newPipeline.style.height = this.height + 'px'
        parent.appendChild(newPipeline);
        this.sprite = newPipeline;
    }

    this.checkCollision = function () {

        //var nextY = self.y + self.jumpspeed * self.updown;

        if (this.x < (player.x + player.width) &&
            this.y < player.y /*+ player.height*/ &&
            this.x + this.width > player.x &&
            this.y + this.height > player.y && player.updown === -1) {
            player.updown = 0;
            this.colision = true;

        }

        //caida izquierda
        if (this.x + 10 > player.x + player.width && this.colision) {
            if (player.updown !== +1) {
                player.updown = -1;
                this.colision = false;
            }

        }

        //caida derecha
        if (this.x + this.width - 10 < player.x && this.colision) {
            if (player.updown !== +1) {
                player.updown = -1;
                this.colision = false;
            }
        }
        if (this.x < (enemy.x + enemy.width) &&
            this.y < enemy.y &&
            this.x + this.width > enemy.x &&
            this.y + this.height > enemy.y && enemy.updown === -1) {
            enemy.updown = 0;
            this.colisionEnemy = true;

        }
        //caida izquierda enemigo
        if (this.x > enemy.x + enemy.width && this.colisionEnemy) {
            if (enemy.updown !== +1) {
                enemy.updown = -1;
                this.colisionEnemy = false;
                console.log('caida izq')
            }

        }

        //caida derecha enemigo
        if (this.x + this.width < enemy.x && this.colisionEnemy) {
            if (enemy.updown !== +1) {
                enemy.updown = -1;
                this.colisionEnemy = false;
                console.log('caida derecha')
            }
        }

    }
}

export { CreatePlataform, CreatePipelines }

/*

if ( box1.x1 < box2.x2 &&
box1.y1 < box2.y2 &&
box1.x2 > box2.x1 &&
box1.y2 > box2.y1) {
// collision detected!
}

*/