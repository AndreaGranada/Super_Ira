function CreatePlayer(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 15;
    this.height = 30;
    this.direction = 0;
    this.speed = 5;
    this.isDead = false;
    this.sprite
    this.insertPlayer = function () {
        var newPlayer = document.createElement('div');
        newPlayer.classList.add('player');
        newPlayer.style.bottom = this.y + 'px';
        newPlayer.style.left = this.x + 'px';
        parent.appendChild(newPlayer);
        this.sprite = newPlayer;
    }
}




export{CreatePlayer}