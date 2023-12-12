function CreatePlataform(x, y, width, parent, player) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = 15;
    this.sprite
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
            this.y < player.y + player.height &&
            this.x + this.width > player.x &&
            this.y + this.height > player.y && player.updown === -1) {
                player.floor = this.y + this.height;
            }
        
    }
}

function CreatePipelines(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 85;
    this.height = 85;
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