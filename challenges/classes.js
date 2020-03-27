// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2 {
    constructor(l, w, h){
    this.l = l,
    this.w = w,
    this.h = h
  }

  surfaceArea() {
    return 2 * (this.l * this.w + this.l * this.h + this.w * this.h);
  }
  
  volume() {
    return this.l * this.w * this.h;
  }
}

let cuboid2 = new CuboidMaker2(4,5,5);

class CubeMaker extends CuboidMaker2 {
    constructor(l, w, h) {
        super(l, w, h);
        this.l = l;
        this.w = w;
        this.h = h;
    }

    surfaceArea() {
        return 6 * (this.l *this.l);
    }
}

let cubey = new CubeMaker(5,5,5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

console.log(cubey.volume()); // 125
console.log(cubey.surfaceArea()); // 150