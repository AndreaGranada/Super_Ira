import { CreatePlayer } from "./player.js";
import { CreatePlataform, CreatePipelines } from "./plataforms_pipelines.js";
import { CreateEnemy } from "./enemy.js";
import { CreateStar } from "./star.js";
import { CreateLife } from "./hp.js"
import { CreateKahoot } from "./kahoot.js";
import { CreateBox } from "./box.js";

var noGaming = true;

var transform = false;

var backgroundMusic = new Audio("./sounds/background-music.mp3")
backgroundMusic.volume = 0.008

var gameovermusic = new Audio("./sounds/GameOver.ogg")

var jumpsound = new Audio("./sounds/jump.mp3")

var board = document.getElementById('board');
var enemies = []
var lifes = []
var score = document.getElementById("score")

var minutos = 0;
var segundos = 0;

function actualizarCronometro() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;
  }

  var tiempoFormateado =
    (minutos < 10 ? "0" : "") + minutos + ":" +
    (segundos < 10 ? "0" : "") + segundos;

  document.getElementById("cronometro").innerText = tiempoFormateado;
}

function timer() {
  var timer = setInterval(function () {
    if (noGaming === false) {
      actualizarCronometro()
    }
  }
    , 1000);
}

// crear Box

var box = new CreateBox(6, 20, board)

box.insertBox();

// crear Kahoot
var kahoot = new CreateKahoot(0, 0, board)

//crear estrella

var star = new CreateStar(400, 225, board)

star.insertStar();

//crear player

var iratze = new CreatePlayer(243, 12, board, enemies, star, lifes, kahoot);

iratze.insertPlayer();

var jugador = document.getElementById("jugador");

// Aparición de enemigos

function createEnemy() {
  var enemy = new CreateEnemy(0, 640, board, platforms, pipeline2)
  enemy.insertEnemy()
  enemies.push(enemy)
}

function enemyGenTimer() {
  var enemyGenTimer = setInterval(createEnemy, 60000)
}

function createLife() {
  var x
  if (lifes.length === 1) {
    var x = 50
  }
  if (lifes.length === 2) {
    var x = 100
  }
  var life = new CreateLife(x, board)
  life.insertLife();
  lifes.push(life)
}

function lifeGen() {
  if (lifes.length < iratze.hp) {
    createLife();
    lifeGen()
  }
}

lifeGen()

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
}, 50)

//colisiones de enemigos con plataformas

var collisionPlataformEnemies = setInterval(function () {
  enemies.forEach(function (enemy) {
    enemy.checkCollision();
  })
}, 50)

//comprobador kahoot

var checkKahoot = setInterval(function () {
  if (star.contador === 5 && kahoot.controlInsert) {
    star.contador = 0;
    kahoot.insertKahoot();
    kahoot.controlInsert = false;
  }
}, 100)

//comprobador modeSuperIra

var checkIratze = setInterval(function () {
  if (iratze.superMode === true && iratze.isDead === false) {
    transform = true
    if (!jugador.classList.contains("super")) {
      jugador.classList.add("super")
    }
    setTimeout(function () { transform = false }, 1500)
  }
  else if (jugador.classList.contains("super")){
      jugador.classList.remove("super")
    }
}, 100)



// Controles

var teclasPresionadas = {
  'a': false,
  'd': false,
  'w': false,
  ' ': false,
};

window.addEventListener('keydown', function (e) {
  teclasPresionadas[e.key] = true;
  if (!transform) {
    switch (e.key) {
      case 'a':

        iratze.direction = -1
        if (jugador.classList.contains("player") || jugador.classList.contains("playerDerecha")) {
          jugador.classList.remove("player", "playerDerecha")
          jugador.classList.add("playerIzquierda")
        }



        break

      case 'd':
        iratze.direction = +1
        if (jugador.classList.contains("player") || jugador.classList.contains("playerIzquierda")) {
          jugador.classList.remove("player", "playerIzquierda")
          jugador.classList.add("playerDerecha")
        }

        break

      case ' ':
      case 'w':
        if (saltoHabilitado === true && iratze.updown === 0 && noGaming === false) {
          if (jugador.classList.contains("player") && !jugador.classList.contains("super")) {
            jugador.classList.remove("player")
            jugador.classList.add("jump")
          }
          jumpsound.currentTime = 0
          jumpsound.volume = 0.1
          jumpsound.play()
          saltoHabilitado = false;
          iratze.updown = +1
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

      if (teclasPresionadas['a'] && teclasPresionadas['w']) {
        jugador.classList.remove("playerIzquierda")
        jugador.classList.add("stopAnimationLeft")
      }

      if (teclasPresionadas['d'] && teclasPresionadas['w']) {
        jugador.classList.remove("playerDerecha")
        jugador.classList.add("stopAnimationRight")
      }

      if (iratze.updown === 0) {
        saltoHabilitado = true;
      }
    }
  }
})

// Movimiento
var saltoHabilitado = true;

var timerId = setInterval(playerMovement, 50)

var caida

function playerMovement() {
  iratze.move();

  if (iratze.updown === 0) {
    saltoHabilitado = true;
    if (jugador.classList.contains("jump")) {
      jugador.classList.remove("jump")
      jugador.classList.add("player")
    }

    if (jugador.classList.contains("stopAnimationLeft") || jugador.classList.contains("stopAnimationRight") || jugador.classList.contains("stopAnimation")) {
      jugador.classList.remove("stopAnimationLeft", "stopAnimationRight", "stopAnimation")

      if (iratze.direction === -1) {
        jugador.classList.add("playerIzquierda")
      }

      if (iratze.direction === 1) {
        jugador.classList.add("playerDerecha")
      }

      if (iratze.direction === 0) {
        jugador.classList.add("player")
      }
    }
  }

  if (iratze.updown === 1 || iratze.updown === -1 && (jugador.classList.contains("jump") || jugador.classList.contains("stopAnimationRight") || jugador.classList.contains("stopAnimationLeft") || jugador.classList.contains("stopAnimation") || jugador.classList.contains("playerDerecha") || jugador.classList.contains("playerIzquierda"))) {
    if (iratze.direction === 1) {
      jugador.classList.remove("jump", "stopAnimationLeft", "stopAnimation", "playerDerecha")
      jugador.classList.add("stopAnimationRight")
    }

    if (iratze.direction === -1) {
      jugador.classList.remove("jump", "stopAnimationRight", "stopAnimation", "playerIzquierda")
      jugador.classList.add("stopAnimationLeft")
    }

    if (iratze.direction === 0 && iratze.updown === -1) {
      jugador.classList.remove("jump", "stopAnimationRight", "stopAnimationLeft")
      jugador.classList.add("stopAnimation")
    }
  }

  if (iratze.isDead === true) {
    var gameover = document.getElementById("gameover");

    caida = setInterval(function(){
      iratze.fall()
    }, 50)

    jugador.classList.remove(...jugador.classList);
    jugador.classList.add("die")

    setTimeout(function () {
      gameover.style.display = "block"
      document.getElementById("points").innerText = "YOUR SCORE: " + iratze.points.toString().padStart(4, '0');
      document.getElementById("time").innerText = "YOUR TIME: " + minutos.toString().padStart(2, '0') + ":" + segundos.toString().padStart(2, '0')
      jugador.classList.remove("die")
      jugador.classList.add("player")
      clearInterval(caida)
    }, 2000)


    noGaming = true;
    iratze.noGaming = true;
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    gameovermusic.volume = 0.008
    gameovermusic.play()
    iratze.noGaming = true;
    kahoot.removeKahoot()
    clearInterval(enemyGenTimer);
    iratze.isDead = false;
    clearInterval(timerId);
  }
}


window.addEventListener('keyup', function (e) {
  teclasPresionadas[e.key] = false;
  if (e.key === 'a' && iratze.direction === -1 || e.key === 'd' && iratze.direction === 1) {
    iratze.direction = 0;
    if (jugador.classList.contains("playerDerecha") || jugador.classList.contains("playerIzquierda")) {
      jugador.classList.remove("playerDerecha", "playerIzquierda")
      jugador.classList.add("player")
    }

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
  iratze.noGaming = false;
  timer();
})

var restart = document.getElementById("restart")

restart.addEventListener("click", function () {
  clearInterval(caida)
  noGaming = false;
  iratze.noGaming = false;
  gameovermusic.pause();
  gameovermusic.currentTime = 0;
  backgroundMusic.play()
  star.contador = 0
  document.getElementById("gameover").style.display = "none"
  iratze.x = 243
  iratze.y = 12
  iratze.sprite.style.left = iratze.x + 'px'
  iratze.sprite.style.bottom = iratze.y + 'px'
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].removeEnemy()
  }

  enemies.splice(0, enemies.length)
  iratze.hp = 3
  lifeGen()
  enemyGenTimer();
  segundos = -1
  minutos = 0
  actualizarCronometro()

  iratze.points = 0
  score.innerText = iratze.points.toString().padStart(4, '0');

  timerId = setInterval(playerMovement, 50)
})

export { createEnemy }