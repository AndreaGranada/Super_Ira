import {CreatePlayer} from "./player.js"; 
import { CreatePlataform, CreatePipelines }  from "./plataforms_pipelines.js";
var board = document.getElementById('board');

var iratze = new CreatePlayer(243, 12, board);

iratze.insertPlayer();


var plataform1 = new CreatePlataform(0, 100, 180, board, iratze);
var plataform2 = new CreatePlataform(130, 250, 300, board, iratze);
var plataform3 = new CreatePlataform(270, 450, 180, board, iratze);
var plataform4 = new CreatePlataform(0, 0, 500, board, iratze);
plataform1.insertPlataform();
plataform2.insertPlataform();
plataform3.insertPlataform();
plataform4.insertPlataform();

var pipeline1 = new CreatePipelines(0, 615, board);
var pipeline2 = new CreatePipelines(415, 15, board);
pipeline1.insertPipeline();
pipeline2.insertPipeline();

var collisionPlataform1= setInterval(function(){
  plataform1.checkCollision();
  plataform2.checkCollision();
  plataform3.checkCollision();
  plataform4.checkCollision();
  

},50)

// Controles
window.addEventListener( 'keydown', function(e) {
    switch(e.key) {
      case 'a':
        iratze.direction = -1
        break
      case 'd':
        iratze.direction = +1
        break
      case ' ':
        if(saltoHabilitado === true){
          saltoHabilitado = false;
          iratze.updown = +1
          setTimeout(function(){
            iratze.updown = -1;
          },1000)
        }

        if(iratze.updown === 0){
          saltoHabilitado = true;
        }
        break
      case 'w':
        if(saltoHabilitado === true){
          saltoHabilitado = false;
          iratze.updown = +1
          setTimeout(function(){
            iratze.updown = -1;
          },1000)
        }

        if(iratze.updown === 0){
          saltoHabilitado = true;
        }      
        break
    }
  }) 

// Movimiento

  var saltoHabilitado = true;
  var timerId = setInterval(playerMovement, 50)

function playerMovement() {
  iratze.move()
  /*if(player.isDead === true) {
    alert('GAME OVER')
    clearInterval(timerId)
    clearInterval(enemyGenTimer)
    enemies.forEach(function(enemy) {
      enemy.removeEnemy()
    })
  }*/
}



window.addEventListener('keyup', function(e) {
    if(e.key === 'a' || e.key === 'd') {
      iratze.direction = 0
    }
  })

  


