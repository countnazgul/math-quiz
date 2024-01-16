// place files you want to import through the `$lib` alias in this folder.
export async function generateQuestions(
  age: number,
  area: string,
  numberOfQuestions?: number
) {
  const response =
    "Sure! Here are some math equations for 16-year-olds:\n\n1. Solve for x: 2x + 5 = 17\nAnswer: x = 6\n\n2. Simplify the expression: 3(2x + 4) - 2(x + 1)\nAnswer: 4x + 10\n\n3. Find the slope of the line passing through the points (-2, 5) and (3, -4).\nAnswer: Slope = -1.8\n\n4. Solve for x: 2^(x+3) = 64\nAnswer: x = 1\n\n5. Find the value of y when x = 3 in the equation y = 2x^2 - 5\nAnswer: y = 13\n\n6. Factorize the expression: x^2 - 9\nAnswer: (x-3)(x+3)\n\n7. Solve for x: log₂(x) + log₂(x - 4) = 3\nAnswer: x = 8\n\n8. Calculate the area of a triangle with base 6 cm and height 8 cm.\nAnswer: Area = 24 cm²\n\n9. Find the value of x that satisfies the equation 3x + 7 = 2(x - 4) + 5.\nAnswer: x = -6\n\n10. Solve the quadratic equation: 2x^2 - 5x + 3 = 0\nAnswer: x = 1 or x = 1.5\n\nPlease note that these are just examples, and there are many more mathematical concepts and equations that a 16-year-old can encounter.".split(
      "\n\n"
    );
  response.splice(0, 1);
  response.pop();

  const questionsAndAnswers = response.map((res) => {
    const [question, answer] = res.split("\n");

    const numberPos = question.indexOf(". ");
    return {
      question: question.substring(numberPos + 2),
      answer: answer.replace("Answer: ", ""),
    };
  });

  return questionsAndAnswers;
}
