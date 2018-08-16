export class Keg {
  public pintsRemaining: number = 124;
  constructor(public beerName: string, public brewery: string, public style: string, public price: number, public abv: number) { }

  decrementPintByOne() {
    if (this.pintsRemaining > 0) {
      this.pintsRemaining --;
    }
  }

  decrementPintByTwo() {
    if (this.pintsRemaining > 1) {
      this.pintsRemaining -= 2;
    }
  }

  decrementPintByFour() {
    if (this.pintsRemaining > 3) {
      this.pintsRemaining -= 4;
    }
  }
}