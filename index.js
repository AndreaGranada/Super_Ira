import {CreatePlayer} from "./player.js"; 
import { CreatePlataform }  from "./plataforms.js";
var board = document.getElementById('board');

var iratze = new CreatePlayer(243, 30, board);

iratze.insertPlayer()


var plataform1 = new CreatePlataform(0, 150, 180, board)
var plataform2 = new CreatePlataform(130, 200, 300, board)
var plataform3 = new CreatePlataform(270, 450, 180, board)
plataform1.insertPlataform()
plataform2.insertPlataform()
plataform3.insertPlataform()

