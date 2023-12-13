import {CreatePlayer} from "./player.js"; 
import { CreatePlataform, CreatePipelines }  from "./plataforms_pipelines.js";
var board = document.getElementById('board');

var iratze = new CreatePlayer(243, 12, board);

iratze.insertPlayer();


var plataform1 = new CreatePlataform(0, 100, 180, board, iratze);
var plataform2 = new CreatePlataform(130, 200, 300, board, iratze);
var plataform3 = new CreatePlataform(270, 300, 180, board, iratze);
var plataform4 = new CreatePlataform(0, 5, 500, board, iratze);
var plataform5 = new CreatePlataform(20, 400, 260, board, iratze);
var plataform6 = new CreatePlataform(125, 500, 250, board, iratze);
var plataform7 = new CreatePlataform(0, 600, 150, board, iratze);
plataform1.insertPlataform();
plataform2.insertPlataform();
plataform3.insertPlataform();
plataform4.insertPlataform();
plataform5.insertPlataform();
plataform6.insertPlataform();
plataform7.insertPlataform();

var pipeline1 = new CreatePipelines(0, 615, board, iratze);
var pipeline2 = new CreatePipelines(415, 20, board, iratze);
pipeline1.insertPipeline();


// rotar tuberia de arriba
var tuberia1 = pipeline1.sprite;
tuberia1.style.transform = 'rotate(180deg)'


pipeline2.insertPipeline();

var collisionPlataform1= setInterval(function(){
  plataform1.checkCollision();
  plataform2.checkCollision();
  plataform3.checkCollision();
  plataform4.checkCollision();
  plataform5.checkCollision();
  plataform6.checkCollision();
  plataform7.checkCollision();
  pipeline1.checkCollision();
  pipeline2.checkCollision();
},50)

// Controles

var teclasPresionadas = {
  'a': false,
  'd': false,
  'w': false,
  ' ': false,
};

window.addEventListener( 'keydown', function(e) {
  teclasPresionadas[e.key] = true;

    switch(e.key) {
      case 'a':
        iratze.direction = -1
        break
      case 'd':
        iratze.direction = +1
        break
      
        case ' ':
        case 'w':
          if(saltoHabilitado === true && iratze.updown === 0){
            saltoHabilitado = false;
            iratze.updown = +1
            console.log(iratze.y)
            if(iratze.y === 612){
              setTimeout(function(){
                iratze.updown = -1;
                saltoHabilitado = true;
              },50)
            }else{
            setTimeout(function(){
              iratze.updown = -1;
              saltoHabilitado = true;
            },1000)
            }
          }
    
            if(iratze.updown === 0){
              saltoHabilitado = true;
            }      
            break
      } 
      
      if ((teclasPresionadas['a'] || teclasPresionadas['d']) && teclasPresionadas['w'] ) {
        if(saltoHabilitado === true && iratze.updown === 0){
          saltoHabilitado = false;
          iratze.updown = +1
          setTimeout(function(){
            iratze.updown = -1;
            saltoHabilitado = true;
          },1000)
          }
  
          if(iratze.updown === 0){
            saltoHabilitado = true;
          } 
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
  teclasPresionadas[e.key] = false;
  if (e.key === 'a' && iratze.direction === -1 || e.key === 'd' && iratze.direction === 1) {
    // La tecla 'a' se levanta y la dirección estaba establecida a la izquierda
    iratze.direction = 0;
  } 
});
  


