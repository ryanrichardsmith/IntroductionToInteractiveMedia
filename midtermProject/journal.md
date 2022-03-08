## Midterm Project Version 1
### Initial Concept (V.1)
The game in my midterm project is inspired by the ancient Greek epic, the Odyssey. Circe, an evil witch, has turned the warrior Odysseus into a dog, but now she must make a potion to change him back, else risk the wrath of the goddess Athena (Odysseus's mother). The user must help Circe by collecting ingredients safe for Odysseus to consume in canine form, while disregarding those which are unsafe for him to eat. Falling from the top of the screen will be randomly generated dog-friendly foods (bacon, chicken, fish, bread & peanut butter) and dog-unfriendly foods (chocolate, ice cream, garlic avocado & grapes). With each item falling at a randomly generated speed, the aim is to have the good food land in the cauldron at the bottom of the screen and avoid letting the bad food land in the cauldron. The longer a player lasts in the game, the faster the items should descend and in greater volumes. The player will be able to control the position of the witch's cauldron with their mouse, and each time a bad food item enters the cauldron, the player gets a strike. After three strikes the player loses the game, and their final score is determined by how long they lasted.


### The Most Complicated Part of this Project (V.1)
I anticipate that the most difficult part of this assignment will concern the dynamic creation and movement of the food items. In particular, getting them to randomly appear without being too close together or on top of each other; getting them to fall in a random manner; getting them to disappear once past a certain point on the y-axis; determining how close to the cauldron is considered "inside" when determining a strike; ensuring another set of items are generated in a timely fashion.

Unfortunately, I was not able to figure these things out before class time. At the moment, I am having issues thinking through the creation of tthe good/bad food items as objects, which is naturally delating me adding dynamic movement to them. However, I plan to address these problems in a few ways. First, I am fairly sure I will have to decide on a fixed number of foods per frame so they can be drawn with a for loop; this is to make sure each item has its own random x Coordinate. Next, I will likely have to create a variable for each item's y coordinate and another variable for the falling speed which changes the y coordinate; ideally, the falling speed variable should be randomly initialized. I have also discovered that there is a ```hide()``` function, which I'm sure can be paired with an if statement to make items disappear once they pass the lower part of the scren. I will likely base the decision of whether something lands inside the cauldron using the ```dist()``` function, comparing the center of the fallen item with the center of the cauldron. Lastly, I imagine that in order to create a continuous flow of items, I will have to either increase the framerate or use a loop that generates another item as soon as one is hidden. 

## Midterm Project Version 1
### Initial Concept (V.1)
Unfortunately, after a week of working on the aforementioned idea, I decided that it would be best to try another project as it did not seem that I was likely to complete it. I was eventually inspired by the instagram filter game where a user has to select the odd one out of a group of very similar items:

https://user-images.githubusercontent.com/98512630/157259180-6bb2c218-4e57-4dd2-872e-f97570a7b5c6.mp4

Because I liked the idea of an underwater background, I decided to make the user have the role of a fisher, selecting the odd one out of the fish (in this case, the slightly darker fish is real while the others are fake). Below is an early sketch of what I aimed to do:
<img width="521" alt="IMG_0172-2" src="https://user-images.githubusercontent.com/98512630/157304180-bba0a11a-59a8-4769-8b29-71c992dc3893.png">


## Update #1
- I successfully created a class to create and display the regular fishes as well as the unique fishes in random positions:

````
//creating a class to draw each fish using randomly generated
//x and y coordinates as well as colors
class drawFish {
  constructor(xCoordinate, yCoordinate, color) {
    this.x = xCoordinate;
    this.y = yCoordinate;
    this.fill = color;
  }

  //using shapes to draw the fish at random positions
  draw() {
    fill(this.fill);
    triangle(
      this.x - 20,
      this.y,
      this.x - 75,
      this.y + 20,
      this.x - 75,
      this.y - 20
    );
    ellipse(this.x, this.y, 100, 50);
    fill(255);
    circle(this.x + 30, this.y, 20);
    fill(0);
    circle(this.x + 30, this.y, 10);
  }
}
````
- I also used an image for the background. See the current status of the project below:
<img width="400" alt="Screenshot 2022-03-08 at 9 30 05 PM" src="https://user-images.githubusercontent.com/98512630/157293100-6c88ed70-96e3-4293-b4a2-85f4fbd76cff.png">

## Update #2
- Using the ````mouseClicked()```` function, I managed to create a state for each phase of the game: one for the instruction screen, one for during the gameplay, and one for when the game is lost.
- A lost game is when the player clicks the mouse at a point that is a greater distance away from the fish's center than the fish's width. A limitation this poses is that the player may get the point by clicking a little above or below the actual fish, and this is because the fish's body is an ellipse which means that the height is not equal to the width. On that note, maybe (circular) puffer fish may have been easier to work with.
- Since I did not want fish to be repeatedly drawn multiple times a second (independent of the user's actions), the `mouseClicked()` function handles the majority of operations in my program, and it is provided below: 
````  
//game play state
  if (state === 0) {
    createCanvas(600, 400);
    image(scenery, 0, 0, 600, 400);

    //randomly generating the color of the regular fish
    fishColor = random(50, 255);

    //using a for loop to randomly assign an x and y coordinate
    //to the 'center' of each of the 6 regular fish
    for (n = 0; n < 7; n++) {
      fishX = random(offset, width - offset);
      fishY = random(offset, height - offset);

      //using the class's method to draw the fish
      fish = new drawFish(fishX, fishY, fishColor);
      fish.draw();
    }

    //assigning random x and y coordinates and a slightly
    //different color to the unique fish and using the same
    //class methods to draw it
    uniqueFishX = random(offset, width - offset);
    uniqueFishY = random(offset, height - offset);
    fish = new drawFish(uniqueFishX, uniqueFishY, fishColor - 20);
    fish.draw();

    //changing the state to the one where the player picks a
    //fish (1) and their decision is determined as right or
    //wrong.
    state++;

    //Determining whether the player clicked close enough to
    //the fish's center to win a point
  } else if (
    state === 1 &&
    dist(uniqueFishX, uniqueFishY, mouseX, mouseY) < 100
  ) {
    //updating the player's score if they clicked the right
    //fish
    score++;

    //playing the sound effect for a correct guess
    correct.play();

    //reverting the state back to the initial game play stage
    //where the fish are drawn
    state = 0;

    //Determining whether the player clicked too far away from
    //the fish's center to win a point
  } else if (
    state === 1 &&
    dist(uniqueFishX, uniqueFishY, mouseX, mouseY) > 100
  ) {
    //if the player clicked the wrong fish, it switches to the
    //game over state
    state = 2;

    //playing sound effect for wrong guesses
    wrong.play();

    //changing background to red, signalling the game is over,
    //displaying the final score and prompting the user to           //restart
    background(255, 0, 0);
    textFont("Rockwell", 50);
    text("YOU HAVE PERISHED", 25, 50);
    text("GAME OVER", 130, 100);
    text("Score: " + score, 190, 200);
    text("Click the mouse", 25, 300);
    text("anywhere to restart", 25, 340);

    //if the user chooses to restart, the state reverts back
    //to the initial gameplay one and the score is reset.
    state = 0;
    score = 0;
  }
}
````

## Update #3
- Having completed the most challenging aspects, I was ready to add the finishing touches, namely the required texts and sounds.
- Without the ability to wrap text, I had to ensure that the number of of words in each line of the instructions did not result in the line trailing off the screen, which was a bit frustrating.
- For the sounds, I decided to have a somewhat positive tone when the user clicks the correct fish, and a somehwat negative tone when they click an inorrect fish.
- I Faced difficulties with loading the sounds because I had not remembered 1) the importance of the sound library in the index.html file and 2) how to load a sound file when it is in a folder 
- For future reference, the sound library can be loaded by placing `<script src="path/to/p5.sound.js"></script>` in the head of the index.html file, and if the sound files are in a folder the format should be `loadSound('folderName/soundFile.mp3'`
- The free stock sound effects on the Mixkit website were very helpful in providing the user with signifiers that had positive/negative moods: https://mixkit.co

## Update 4
- There are multiple modifications I would like to make to my game: first, I would like to add a timer that causes the player to lose the game if they do not make a selection within a small timeframe, second, the game currently requires 2 clicks to change states instead of one, and I would like to fix that/
- However, after having my friends (who are majoring in computer science) take a look at my code, they could not see a way through these issues when taking into account the way I had designed my code. From experimenting with the `deltaTime()` function to moving segments of code from `mouseClicked()` to changing the number of states, among other techniques, it felt like we tried everything. 
- Although I wish my code could be exactly as I had envisioned it, I am proud of myself for trying my best to fix these bugs and coming up with an adequately entertaining game. Below is the final version of my game, prior to user testing:

https://user-images.githubusercontent.com/98512630/157302243-1c9af384-4d10-4a7c-abed-ba4d43ae52b9.mp4
