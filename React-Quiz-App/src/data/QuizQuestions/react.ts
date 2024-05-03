// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg';
import Apple from '../../assets/images/apple.jpg';
import Dish from '../../assets/images/dish.jpg';
import Block from '../../assets/images/block.webp';
import Finger from '../../assets/images/finger.jpg';
import Feather from '../../assets/images/feather.png';
import Cat from '../../assets/images/cat.jpeg';
import Rat from '../../assets/images/rat.jpg';
import Toy from '../../assets/images/toy.jpg';
import Friend from '../../assets/images/friend.jpg';
import Color from '../../assets/images/color.webp';
import Floor from '../../assets/images/floor.webp';


export const react: Topic = {
  topic: 'react',
  level: 'Beginner',
  totalQuestions: 20,
  totalScore: 200,
  totalTime: 20 * 60,
  questions: [
 
    {
      question: 'If I give you two candies and take away one, how many do you have left?',
      choices: ['0', '1', '2', '3'],
      type: 'MCQs',
      image: BrandLogo,
      correctAnswers: ['2'],
      score: 10,
    },
    {
      question: 'Which number comes between 3 and 5?',
      choices: ['1', '2', '4', '6'],
      type: 'MCQs',
      image: Dish,
      correctAnswers: ['4'],
      score: 10,
    },
    {
      question: 'If you have three blue blocks and two red blocks, how many blocks do you have altogether?',
      choices: ['3', '4', '5', '6'],
      type: 'MCQs',
      image: Block,
      correctAnswers: ['5'],
      score: 10,
    },
    {
      question: 'How many fingers am I holding up?',
      choices: ['0', '1', '2', '3'],
      type: 'MCQs',
      image: Finger,
      correctAnswers: ['2'],
      score: 10,
    },
    {
      question: 'Which object is heavier/lighter?',
      choices: ['1kg feather', '1kg stone', 'same'],
      type: 'MCQs',
      image: Feather,
      correctAnswers: ['same'],
      score: 10,
    },
    {
      question: 'Which picture shows a cat?',
      choices: ['🐶', '🐱', '🦆', '🐭'],
      type: 'MCQs',
      image: Cat,
      correctAnswers: ['🐱'],
      score: 10,
    },
    {
      question: 'Which word rhymes with "cat"?',
      choices: ['Dog', 'Rat', 'Ball', 'Fish'],
      type: 'MCQs',
      image: Rat,
      correctAnswers: ['Rat'],
      score: 10,
    },
    {
      question: 'What should you do if you spill water on the floor?',
      choices: ['Leave it there.', 'Clean it up with a towel.', 'Ask someone else to clean it.', 'Walk away and ignore it.'],
      type: 'MCQs',
      image: Floor,
      correctAnswers: ['Clean it up with a towel.'],
      score: 10,
    },
    {
      question: 'What should you say when you want to ask for a toy someone else is playing with?',
      choices: ['"Give it to me now!"', '"Can I please have a turn with that?"', '"I\'m taking this!"', '"You can\'t play with that anymore!"'],
      type: 'MCQs',
      image: Toy,
      correctAnswers: ['"Can I please have a turn with that?"'],
      score: 10,
    },
    {
      question: 'How can you help a friend who is feeling sad?',
      choices: ['Ignore them.', 'Laugh at them.', 'Ask them what\'s wrong and try to cheer them up.', 'Tell them to stop being sad.'],
      type: 'MCQs',
      image : Friend,
      correctAnswers: ['Ask them what\'s wrong and try to cheer them up.'],
      score: 10,
    },
    {
      question: 'What color is the sky during the daytime?',
      choices: ['Red', 'Blue', 'Yellow', 'Green'],
      type: 'MCQs',
      image:Color ,
      correctAnswers: ['Blue'],
      score: 10,
    },
    {
      question: 'What is one more than 5?',
      choices: ['4', '6', '7', '8'],
      type: 'MCQs',
      image: Dish,
      correctAnswers: ['6'],
      score: 10,
    },
    {
      question: 'Which animal lives in water?',
      choices: ['Elephant', 'Giraffe', 'Fish', 'Lion'],
      type: 'MCQs',
      correctAnswers: ['Fish'],
      score: 10,
    },
    {
      question: 'What is the opposite of "hot"?',
      choices: ['Cold', 'Warm', 'Spicy', 'Cool'],
      type: 'MCQs',
      correctAnswers: ['Cold'],
      score: 10,
    },
    {
      question: 'Which word means the same as "big"?',
      choices: ['Small', 'Tiny', 'Large', 'Short'],
      type: 'MCQs',
      correctAnswers: ['Large'],
      score: 10,
    },
    {
      question: 'How can you cross a puddle of water without getting wet?',
      choices: ['Jump over it.', 'Walk around it.', 'Use an umbrella.', 'Step on the stones or bricks.'],
      type: 'MCQs',
      correctAnswers: ['Step on the stones or bricks.'],
      score: 10,
    },
    {
      question: 'What do you say when you want to thank someone?',
      choices: ['"Sorry"', '"Thank you"', '"Please"', '"Excuse me"'],
      type: 'MCQs',
      correctAnswers: ['"Thank you"'],
      score: 10,
    },
    {
      question: 'How do you greet someone you meet for the first time?',
      choices: ['"Goodbye"', '"Thank you"', '"Hello" or "Hi"', '"Please"'],
      type: 'MCQs',
      correctAnswers: ['"Hello" or "Hi"'],
      score: 10,
    },
    {
      question: 'What is the color of grass?',
      choices: ['Blue', 'Green', 'Yellow', 'Red'],
      type: 'MCQs',
      image: Color,
      correctAnswers: ['Green'],
      score: 10,
    },
    {
      question: 'What letter does "apple" start with?',
      choices: ['A', 'B', 'C', 'D'],
      image:  Apple,
      type: 'MCQs',
      correctAnswers: ['A'],
      score: 10,
    },
  ],
}
