import {CreatePlayer} from "./player.js"; 
import { CreatePlataform, CreatePipelines }  from "./plataforms_pipelines.js";
var board = document.getElementById('board');

var iratze = new CreatePlayer(243, 30, board);

iratze.insertPlayer();


var plataform1 = new CreatePlataform(0, 150, 180, board);
var plataform2 = new CreatePlataform(130, 200, 300, board);
var plataform3 = new CreatePlataform(270, 450, 180, board);
plataform1.insertPlataform();
plataform2.insertPlataform();
plataform3.insertPlataform();

var pipeline1 = new CreatePipelines(0, 660, board);
var pipeline2 = new CreatePipelines(460, 0, board);
pipeline1.insertPipeline();
pipeline2.insertPipeline();

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
          console.log(saltoHabilitado)
        }

        if(iratze.y === 30){
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
          console.log(saltoHabilitado)
        }

        if(iratze.y === 30){
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

  


