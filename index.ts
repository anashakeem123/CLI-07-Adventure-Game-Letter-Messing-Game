#! /usr/bin/env node
                         /////////////////////////// "The Starting Coding" ///////////////////////////
// Import required libraries
import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";
import chalkAnimation from "chalk-animation";
import * as readlineSync from "readline-sync";

// Welcome message
console.log(chalk.bgRed.white(`\n\t\t\t\t*Welcome To Adventure Game*\n`));

// Function to display animation
async function Animation() {
  const box = chalkAnimation.neon(
    boxen(`Adventure Game\nProject 07\nBy\nAnas Hakeem`, {
      title: "My Project",
      titleAlignment: "center",
      textAlignment: "center",
      borderStyle: "arrow",
      borderColor: "magenta",
      backgroundColor: "blue",
      // Set width to 40 characters
      width: 105,
    })
  );
  await new Promise((resolve) => setTimeout(resolve, 7000));
  box.stop();
}

// Function to start the adventure game
async function Adventure_Game() {

  // Prompt for username, password, and action selection
  const Start_Adventure = await inquirer.prompt([
    {
      type: "input",
      name: "UserName",
      message: (chalk.bgRed.white(`Enter Your Player UserName : `)),
    },
    {
      type: "input",
      name: "Password",
      message: (chalk.bgMagenta.white(`Please Enter The Player Password : `)),
    },
    {
      type: "list",
      name: "Game",
      message: (chalk.bgYellow.white(`Please Select an Action :`)),
      choices: ["Start Game","Exit"],
    },
  ]);
 
  // Extract username, password, and selected action
  const Player_Name = Start_Adventure.UserName;
  const Player_Password = Start_Adventure.Password;
  const selectedAction = Start_Adventure.Game;

  // Check if username and password are provided
  if (Player_Name && Player_Password) {

     // Check selected action
    if (selectedAction === "Exit") {
      
      // Exit message
      console.log(chalk.bgMagenta.white(`\nExiting The Game. Goodbye!\n`));
    } else if (selectedAction === "Start Game") {

      // Start the game
      console.log(
        chalk.green(chalk.bgGreen.white(`\n\t\t\t\t\tWelcome ${Player_Name}! Let's Start The Adventure Game!\n`))
      );
      console.log(chalk.red(`\n\t\t\t-----------------------------------------------------------------------\n`))
      console.log(chalk.bgYellow.white("\nWelcome to the Letter Missing Adventure Game!\n"));

      // Words for the game
      const words = [
        "PAKISTAN",
        "ELEPHANT",
        "GIRAFFE",
        "TIGER",
        "PUMPKIN",
        "BANANA",
        "INDIA",
        "CHINA",
        "THAILAND",
        "OMAN",
        "KUWAIT",
        "APPLE",
        "MANGO",
        "ORANGE",
        "POTATO",
        "TOMATO",
        "BRINJAL",
        "CABBAGE",
        "CHICKEN",
        "COW",
        "MACHO"
      ];
      let score = 0;

      // Loop through each word
      for (const word of words) {

        // Randomly select a character to remove
        const indexToRemove = Math.floor(Math.random() * word.length);
        const wordWithoutChar =
          word.slice(0, indexToRemove) + "_" + word.slice(indexToRemove + 1);
          
        const missingChar = word[indexToRemove];
          
        // Display the word with missing character
        console.log(chalk.bgMagenta.white.underline.bold(`\n\t\t\t\t\tAdventure game word missing :${wordWithoutChar}\n`));
        
        // Ask the user to guess the missing letter
        const guess = readlineSync
          .question(chalk.bgRed.black("Adventure Game the missing letter: "))
          .toUpperCase();
  
          // Check if the guess is correct
        if (guess === missingChar) {
          console.log(chalk.green("Well Done Correct Answer!\n"));
          score++;
        } else {
          console.log(chalk.red("Sorry Try Again Incorrect Answer.\n"));
        }
      }

      // Display final score
      console.log(chalk.bgYellow.black(
        `\n\t\t\t\t\t*Letter Adventure Game Over! Your score: ${score}/${words.length}*`
      ));
    }
  } else {

    // Invalid username or password
    console.log(chalk.red("Please enter Invalid username and password.\n"));
  }
}

// Function to run the adventure game
async function runAdventureGame() {

  // Display animation
  await Animation();

  // Start the adventure game
  await Adventure_Game();
}

// Run the adventure game
runAdventureGame();


             //////////////////////////////////// "The Ending Coding" /////////////////////////////////////////