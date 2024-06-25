export class StringCalculator {
  add(numbers: string): number {
    if (numbers === '') {
      return 0;
    }

    let delimiter = /[,\n]/;

    if (numbers.startsWith('//')) {
      const delimiterEnd = numbers.indexOf('\n');
      delimiter = new RegExp(numbers.substring(2, delimiterEnd));
      numbers = numbers.substring(delimiterEnd + 1);
    }

    const nums = numbers.split(delimiter);
    let sum = 0;
    const negatives: number[] = [];

    nums.forEach(num => {
      const parsedNum = parseInt(num);
      if (parsedNum < 0) {
        negatives.push(parsedNum);
      }
      if (parsedNum <= 1000) {
        sum += parsedNum;
      }
    });

    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
    }

    return sum;
  }
}
