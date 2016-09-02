// Create a cup that is an object. It starts out empty.
// When you pour coffee into it, the cup becomes full When you
// drink the coffee the cup becomes empty What other properties
// can the cup have? Add some. How can those properties be changed?
// Try it out. Make the Cup object reusable.


class Cup {
  constructor(){
    this.liquidLevel = 0;// 0 to 100?
    this.creamLevel = 0;// 0 to 100?

    this.minLevel = 0;
    this.maxLevel = 100;
    this.sipLevel = 10;
    this.creamSip = 1;

    this.creamAddition = 5;

    console.log('**Initialized**')
  };


  addCream(){
    if(this.liquidLevel < this.maxLevel){
      this.creamLevel += this.creamAddition;
      this.liquidLevel += this.creamAddition;
    } else {
      console.log('NO ROOM FOR CREAM - TAKE A SIP!');
    }
  };

  reportLevel(){
    return 'Your liquid level is at ' + this.liquidLevel + ' with ' +
      this.creamLevel + ' units of cream';
  };

  // assume that we will need to sip before adding cream
  pour(){
    this.liquidLevel = this.maxLevel;
    this.creamLevel = this.minLevel;// reset
    console.log('**Poured**')
  };

  sip(){

    if(this.creamLevel > 0){
      this.creamLevel -= this.creamSip;
      this.liquidLevel -= (this.sipLevel-this.creamSip);
    } else {
      this.liquidLevel -= this.sipLevel;
    }

    if(this.liquidLevel <= 0) {
      this.__emptyCup();
    }
    console.log('**Sipped**')
  };

  drink(){
    this.__emptyCup();
    console.log('**Drink**')
  };

  __emptyCup(){
    this.creamLevel = this.minLevel;
    this.liquidLevel = this.minLevel;
  };

}


var cup = new Cup();



console.log(cup.reportLevel());
cup.pour();
console.log(cup.reportLevel());
cup.addCream();
console.log(cup.reportLevel());
cup.drink();
console.log(cup.reportLevel());
cup.pour();
console.log(cup.reportLevel());
cup.sip();
cup.sip();
cup.sip();
console.log(cup.reportLevel());
cup.drink();
console.log(cup.reportLevel());




console.log('Pour a Fesh cup');
cup.pour();
console.log(cup.reportLevel());
cup.addCream();
console.log(cup.reportLevel());
cup.sip();
console.log(cup.reportLevel());
cup.addCream();
console.log(cup.reportLevel());
