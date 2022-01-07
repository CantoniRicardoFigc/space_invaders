function startGame() {

    myGameArea.start();

    myGameArea.draw(proiettile);

    navicella.loadImages();

    alien1.loadImages();
    alien2.loadImages();
    alien3.loadImages();
    alien4.loadImages();
    alien5.loadImages();
    alien6.loadImages();
    alien7.loadImages();
    alien8.loadImages();
    alien9.loadImages();
    alien10.loadImages();
    alien11.loadImages();
    alien12.loadImages();
    alien13.loadImages();
    alien14.loadImages();
    alien15.loadImages();
    alien16.loadImages();
    alien17.loadImages();
    alien18.loadImages();
    alien19.loadImages();
    alien20.loadImages();

}

var myGameArea = {
    
    canvas : document.createElement("canvas"),

    start: function() {
        this.canvas.width = 1520;
        this.canvas.height = 695;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);

        this.interval = setInterval(updateGameArea, 20);
      },    

    draw: function(component) {
        this.context.fillStyle =  component.color;
        this.context.fillRect(component.x, component.y, component.width, component.height);
    },

    drawGameObject: function(gameObject) {
        this.context.drawImage(
          gameObject.image,
          gameObject.x,
          gameObject.y,
          gameObject.width,
          gameObject.height
        );
      }
}

var navicella = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 110,
    x: 650,
    y: 550,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "navi.jpg"; //Qui metti una tua immagine
    }
  };
  var alien1 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 10,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien2 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 160,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien3 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 310,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien4 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 460,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien5 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 610,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien6 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 760,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien7 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 910,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien8 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 1060,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien9 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 1210,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien10 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 1360,
    y: 10,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien11 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 10,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien12 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 160,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien13 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 310,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien14 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 460,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien15 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 610,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien16 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 760,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien17 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 910,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien18 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 1060,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien19 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 1210,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  var alien20 = {
    speedX: 0,
    speedY: 0,
    width: 100,
    height: 80,
    x: 1360,
    y: 100,
  
  loadImages: function() {
      this.image = new Image(this.width, this.height);
      this.image.src = "zalien.jpg"; //Qui metti una tua immagine
    }
  };
  
  var proiettile = {
    width: 6,
    height: 20,
    x: 697,
    y: 500,
    color: "white"
  };


  function updateGameArea() {
    myGameArea.canvas.getContext("2d").clearRect(0,0, myGameArea.canvas.width, myGameArea.canvas.height);

    Object();
    myGameArea.draw(proiettile);

    collisionNav(alien1);
    collisionNav(alien2);
    collisionNav(alien3);
    collisionNav(alien4);
    collisionNav(alien5);
    collisionNav(alien6);
    collisionNav(alien7);
    collisionNav(alien8);
    collisionNav(alien9);
    collisionNav(alien10);
    collisionNav(alien11);
    collisionNav(alien12);
    collisionNav(alien13);
    collisionNav(alien14);
    collisionNav(alien15);
    collisionNav(alien16);
    collisionNav(alien17);
    collisionNav(alien18);
    collisionNav(alien19);
    collisionNav(alien20);

    move(alien1);
    move(alien2);
    move(alien3);
    move(alien4);
    move(alien5);
    move(alien6);
    move(alien7);
    move(alien8);
    move(alien9);
    move(alien10);
    move(alien11);
    move(alien12);
    move(alien13);
    move(alien14);
    move(alien15);
    move(alien16);
    move(alien17);
    move(alien18);
    move(alien19);
    move(alien20);
  }

  function Object() {
    myGameArea.drawGameObject(navicella);

    myGameArea.drawGameObject(alien1);
    myGameArea.drawGameObject(alien2);
    myGameArea.drawGameObject(alien3);
    myGameArea.drawGameObject(alien4);
    myGameArea.drawGameObject(alien5);
    myGameArea.drawGameObject(alien6);
    myGameArea.drawGameObject(alien7);
    myGameArea.drawGameObject(alien8);
    myGameArea.drawGameObject(alien9);
    myGameArea.drawGameObject(alien10);
    myGameArea.drawGameObject(alien11);
    myGameArea.drawGameObject(alien12);
    myGameArea.drawGameObject(alien13);
    myGameArea.drawGameObject(alien14);
    myGameArea.drawGameObject(alien15);
    myGameArea.drawGameObject(alien16);
    myGameArea.drawGameObject(alien17);
    myGameArea.drawGameObject(alien18);
    myGameArea.drawGameObject(alien19);
    myGameArea.drawGameObject(alien20);
  }

  let kills=0;

function collisionNav(alien) {
    if (alien.y>=navicella.y-70) {
        alien.y=10
    }
}

function move(alien) {
    if (alien.y<1000) {
        alien.y+=0.3
    }
}

