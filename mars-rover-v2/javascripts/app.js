// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: [],
};
// ======================

// ======================
function turnLeft(rover){

  console.log("turnLeft was called!");

  switch (rover.direction) {
    
    case "N":
    rover.direction ="W";
    break;

    case "W":
    rover.direction = "S";
    break;

    case "S":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "N";
    break;
  }

  Log(rover);
}

function turnRight(rover){
  console.log("turnRight was called!");

  switch (rover.direction) {

    case "N":
    rover.direction = "E";
    break;

    case "E":
    rover.direction = "S";
    break;

    case "S": 
    rover.direction = "W";
    break;

    case "W":
    rover.direction = "N";
    break;
  }

  Log(rover);
}

function moveForward(rover){
  console.log("moveForward was called");

    if (rover.x < 9 && rover.direction === "E"){
    rover.x ++;
    } else
    
    if (rover.x > 0 && rover.direction === "W"){
      rover.x --
    } else

    if (rover.y < 9 && rover.direction === "S"){
      rover.y++
    } else

    if (rover.y > 0 && rover.direction === "N"){
      rover.y--
    } else 
      console.log("INVALID MOVE CHECK ROVER'S DIRECTION PAL");
      
  Log(rover);
}

function moveBackward(rover){
  console.log("BackForward was called");

    if (rover.x > 0 && rover.direction === "E"){
    rover.x --;
    } else
    
    if (rover.x < 9 && rover.direction === "W"){
      rover.x ++;
    } else

    if (rover.y > 0 && rover.direction === "S"){
      rover.y --;
    } else

    if (rover.y < 9 && rover.direction === "N"){
      rover.y ++;
    } else 
      console.log("INVALID MOVE CHECK ROVER'S DIRECTION PAL");
      
  Log(rover);
}

function Commands(text){
  
  for (var i = 0; i < text.length; i++){

    if (text[i] === "f" || text[i] === "b" || text[i] === "r" || text[i] === "l"){
      switch(text[i]){
        
        case "f": 
        moveForward(rover);
        break;

        case "b":
        moveBackward(rover);
        break;

        case "r":
        turnRight(rover);
        break;

        case "l":
        turnLeft(rover);
        break;
      }
    } else 
      console.log("SORRY PAL YOU NEED TO CHECK YOUR COMMANDS, SOMETHING IS WRONG");
  }

}

function Log(rover){
  rover.travelLog.push(['X' ,rover.x, 'Y' , rover.y]);
  console.log("Rover is now in X: " + rover.x + " Y: " + rover.y + " facing:" + rover.direction);
  console.log("This where Rover's steps ");
  console.log(rover.travelLog);
}