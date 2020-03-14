interface IWalkingDead {
  saveFromZombies: (name: string) => void;
  possibility: number;
};

const walkingDead: IWalkingDead = {
  saveFromZombies: function (name) { 
    const msg = Math.random() < this.possibility ? 
      `${name} was succesfully saved by the chance of ${this.possibility}` : 
      `R.I.P ${name} - by the chance of ${this.possibility}`;
        console.log(msg); 
    },
  possibility: 0.5,
}