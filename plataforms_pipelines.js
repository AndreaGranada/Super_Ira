function CreatePlataform(x, y, width, parent) {
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
        newPlataform.style.width= this.width + 'px'
        newPlataform.style.height= this.height + 'px'
        parent.appendChild(newPlataform);
        this.sprite = newPlataform;
    }
}

function CreatePipelines(x, y, parent) {
    var self = this;
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 40;
    this.sprite
    this.insertPipeline = function () {
        var newPipeline = document.createElement('div');
        newPipeline.classList.add('pipelines');
        newPipeline.style.bottom = this.y + 'px';
        newPipeline.style.left = this.x + 'px';
        newPipeline.style.width= this.width + 'px'
        newPipeline.style.height= this.height + 'px'
        parent.appendChild(newPipeline);
        this.sprite = newPipeline;
    }
}

export {CreatePlataform, CreatePipelines}