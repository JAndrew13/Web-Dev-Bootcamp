// fibonacci Number Generator


function fibonacciGenerator(n) { //input count in funtion call

  sequence = []; // establish empty array

  for (i = 0; i < n; i++) { //for loop that cycles though desired count
    sequence[i] = i;

    if (i > 1) { //ater count passes 2, begin calculating new numbers
      sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
  }
  return sequence; // returns fibonacci array
}
