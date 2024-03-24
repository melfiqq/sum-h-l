function sumArray(array) {
    if (!array || array.length <= 1) {
      return 0;
    }
      const max=Math.max(...array);
      const min=Math.min(...array);
      
      const sum = array.reduce((acc, curr) => acc+curr, 0)-max-min;
      
      return sum;
    }