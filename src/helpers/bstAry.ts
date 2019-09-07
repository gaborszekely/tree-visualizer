export const addNode = (value: number, bstArray: number[] = []): number[] => {
  if (bstArray.length === 0) {
    return [value];
  }

  let index = 0;

  const newBstArray = bstArray.slice();

  while (newBstArray[index]) {
    const current = bstArray[index];

    if (value === current) {
      return newBstArray;
    }

    if (value < current) {
      index = 2 * (index + 1) - 1;
    } else {
      index = 2 * (index + 1);
    }
  }

  newBstArray[index] = value;

  return newBstArray;
};

let bstArray: number[] = [];

bstArray = addNode(8, bstArray);

console.log(bstArray);

bstArray = addNode(10, bstArray);

console.log(bstArray);

bstArray = addNode(12, bstArray);

console.log(bstArray);

bstArray = addNode(9, bstArray);

console.log(bstArray);
