import { CreatePlayer } from "./player.js";
import { CreatePlataform, CreatePipelines } from "./plataforms_pipelines.js";
import { CreateEnemy } from "./enemy.js";
import { CreateStar } from "./star.js";

var noGaming = true;

var backgroundMusic = new Audio("./sounds/background-music.mp3")
backgroundMusic.volume = 0.1

backgroundMusic.play()

var gameovermusic = new Audio("./sounds/GameOver.ogg")

var jumpsound = new Audio("./sounds/jump.mp3")

var board = document.getElementById('board');
var enemies = []

//crear estrella

var star = new CreateStar(400, 225, board)

star.insertStar();

var iratze = new CreatePlayer(243, 12, board, enemies, star);

iratze.insertPlayer();

// Aparición de enemigos

// var enemy = new CreateEnemy(50, 630, board, iratze);
// enemy.insertEnemy()
// console.log(enemy)

function createEnemy() {
  var enemy = new CreateEnemy(0, 640, board, platforms, pipeline2)
  enemy.insertEnemy()
  enemies.push(enemy)
}

function enemyGenTimer() {
  var enemyGenTimer = setInterval(createEnemy, 60000)
}



// Elementos del tablero
var plataform1 = new CreatePlataform(0, 5, 500, board, iratze, enemies);
var plataform2 = new CreatePlataform(0, 100, 180, board, iratze, enemies); //2
var plataform3 = new CreatePlataform(130, 200, 300, board, iratze, enemies);
var plataform4 = new CreatePlataform(270, 300, 230, board, iratze, enemies); //4
var plataform5 = new CreatePlataform(35, 400, 260, board, iratze, enemies);
var plataform6 = new CreatePlataform(145, 500, 250, board, iratze, enemies);
var plataform7 = new CreatePlataform(0, 600, 150, board, iratze, enemies);
var platforms = [];

plataform1.insertPlataform();
plataform2.insertPlataform();
plataform3.insertPlataform();
plataform4.insertPlataform();
plataform5.insertPlataform();
plataform6.insertPlataform();
plataform7.insertPlataform();


platforms.push(plataform1);
platforms.push(plataform2);
platforms.push(plataform3);
platforms.push(plataform4);
platforms.push(plataform5);
platforms.push(plataform6);
platforms.push(plataform7);

var pipeline1 = new CreatePipelines(-10, 607, board, iratze, enemies);
var pipeline2 = new CreatePipelines(415, 13, board, iratze, enemies);
pipeline1.insertPipeline();
pipeline2.insertPipeline();

// rotar tuberia de arriba
var tuberia1 = pipeline1.sprite;
tuberia1.style.transform = 'rotate(180deg)'



//colisiones plataformas y tuberias con Ira
var collisionPlataform = setInterval(function () {
  plataform1.checkCollision();
  plataform2.checkCollision();
  plataform3.checkCollision();
  plataform4.checkCollision();
  plataform5.checkCollision();
  plataform6.checkCollision();
  plataform7.checkCollision();
  pipeline1.checkCollision();
  pipeline2.checkCollision();
  iratze.checkCollision();
  //plataform1.checkCollisionEnemies();
  //enemy.checkCollision();
}, 50)

//colisiones de enemigos con plataformas

var collisionPlataformEnemies = setInterval(function () {
  enemies.forEach(function (enemy) {
    enemy.checkCollision();
  })
}, 50)

// Controles

var teclasPresionadas = {
  'a': false,
  'd': false,
  'w': false,
  ' ': false,
};

window.addEventListener('keydown', function (e) {
  teclasPresionadas[e.key] = true;

  switch (e.key) {
    case 'a':
      iratze.direction = -1
      break
    case 'd':
      iratze.direction = +1
      break

    case ' ':
    case 'w':
      if (saltoHabilitado === true && iratze.updown === 0 && noGaming === false) {
        jumpsound.currentTime = 0
        jumpsound.volume = 0.1
        jumpsound.play()
        saltoHabilitado = false;
        iratze.updown = +1
        console.log(iratze.y)
        if (iratze.y === 612) {
          setTimeout(function () {
            iratze.updown = -1;
            saltoHabilitado = true;
          }, 50)
        } else {
          setTimeout(function () {
            iratze.updown = -1;
            saltoHabilitado = true;
          }, 900)
        }
      }

      if (iratze.updown === 0) {
        saltoHabilitado = true;
      }
      break
  }

  if ((teclasPresionadas['a'] || teclasPresionadas['d']) && teclasPresionadas['w']) {
    if (saltoHabilitado === true && iratze.updown === 0 && noGaming === false) {
      jumpsound.currentTime = 0
      jumpsound.volume = 0.1
      jumpsound.play()
      saltoHabilitado = false;
      iratze.updown = +1
      setTimeout(function () {
        iratze.updown = -1;
        saltoHabilitado = true;
      }, 900)
    }

    if (iratze.updown === 0) {
      saltoHabilitado = true;
    }
  }
})


// Movimiento
var saltoHabilitado = true;

var timerId = setInterval(playerMovement, 50)

function playerMovement() {
  iratze.move();
  if (iratze.isDead === true) {
    var gameover = document.getElementById("gameover");
    gameover.style.display = "block"
    noGaming = true;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameovermusic.volume = 0.1
    gameovermusic.play()
    //clearInterval(timerId)
    //clearInterval(collisionPlataformEnemies)
    //clearInterval(collisionPlataform)
    clearInterval(enemyGenTimer)
    //clearInterval(timerIdEnemy)
  }
}


window.addEventListener('keyup', function (e) {
  teclasPresionadas[e.key] = false;
  if (e.key === 'a' && iratze.direction === -1 || e.key === 'd' && iratze.direction === 1) {
    // La tecla 'a' se levanta y la dirección estaba establecida a la izquierda
    iratze.direction = 0;
  }
});

//PANTALLAS DE INICIO Y DE GAME OVER

var start = document.getElementById("play")

start.addEventListener("click", function () {
  start.parentNode.style.display = "none"
  backgroundMusic.play()
  createEnemy();
  enemyGenTimer();
  noGaming = false;
})

var restart = document.getElementById("restart")

restart.addEventListener("click", function () {
  noGaming = false;
  gameovermusic.pause();
  gameovermusic.currentTime = 0;
  backgroundMusic.play()
  restart.parentNode.style.display = "none"
  iratze.isDead = false;
  iratze.x = 243
  iratze.y = 12
  iratze.sprite.style.left = iratze.x + 'px'
  iratze.sprite.style.bottom = iratze.y + 'px'
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].removeEnemy()
  }

  enemies.splice(0, enemies.length)

  enemyGenTimer();
  console.log(enemies)
  //createEnemy();
  //var enemyGenTimer = setInterval(createEnemy, 60000)
})

// Movimiento Enemy

// var timerIdEnemy = setInterval(enemyMovement, 500)

// function enemyMovement() {

//   var random = Math.floor(Math.random() * 10);
//     if (random > 8) {
//       enemy.direction *= -1
//       console.log('Ejecutando')
//       console.log(enemy.direction)
//     }


/*if(player.isDead === true) {
  alert('GAME OVER')
  clearInterval(timerId)
  clearInterval(enemyGenTimer)
  enemies.forEach(function(enemy) {
    enemy.removeEnemy()
  })
}*/

export { createEnemy }