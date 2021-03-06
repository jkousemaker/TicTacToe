export default class Player {
  constructor(name, symbol) {
    this.name = name;
    this.symbol = symbol;
    this.points = 0;
    this.winCounter = 0;
    this.level = 1;
  }

  addPointsPlayer(reward) {
    this.points += reward;
    console.log("Points: " + this.points); 
    this.winCounter += 1;
  }

  /**
   * Assignment
   * Add a function to raise the level of the Player, the leven rises one every 10 points. 
   * Player starts at level 1
   * so if player has 10 points, then he will be level 2, if he has 20 points, he will be level 3 etc
   * Connect the method in the add point method. 
   */

  raisePlayerLevel(coins) {
    let total = coins + this.points;
    console.log("Total: " + total);
    this.level = total / 10 + 1;
    console.log("Level: " + this.level);

    this.addPointsPlayer(coins);
  }
}
