//declaring the array to store the songs from the csv as a global variable 
//so it can be accessed both in the preload() and draw() functions
let songs = [];

function preload() {
  //reading the csv file before anything else is carried out
  songs = loadStrings("songs.csv");
}

//declaring the variable 'category' (which will be used when randomly 
//determining the vibe of the playlist) so 
//it can be accessed both in the preload() and draw() functions

let category;

//declaring the xCoordinate variable which will be used 
//to place each row at a random place.
let xCoordinate;

function setup() {
  createCanvas(600, 400);
  
  //assigning a random integer which corresponds to one of 7 'vibes' 
  category = round(random(0, 6));
}

function draw() {
  background(0);
  
  //slowing down the frame rate so song names are legible
  frameRate(2)
  
  //giving the x coordinate a random initial value 
  //so it can be called by the category heading, 
  //which happens before the loop to display each song
  xCoordinate = round(random(0,100));
  
  //Each song in each playlist is by one of these singers; 
  //the array is used so the names can easily be grabbed and matched 
  //with the corresponding song.
  let singers = [
    "BEYONCE",
    "NICKI MINAJ",
    "RIHANNA",
    "BLACKPINK",
    "DOJA CAT",
    "JHENE AIKO",
    "DRAKE",
    "ARIANA GRANDE",
    "THE WEEKND",
    "TAYLOR SWIFT",
  ];

  //Declaring the array used to store the songs of a given artist;
  //This works because each row in the csv file has songs by the same artist, 
  //and the index of each song corresponds to its vibe. 
  //for example, songs at index 0 of each row have a chill vibe
  let singleRow = [];
  
  //initializing the variable that will later be used 
  //to create the alternating fill pattern
  let colorPicker = 1;
  
  //Selecting the font of all the rows & bolding them
  textFont("Helvetica", 25);
  textStyle(BOLD);
  
  //declaring the size of all the text rows
  const size = 30;
  textSize(size);
  
  //initializing the variable that will be used to place each row 
  //just below the other
  let yCoordinate = 90;

  if (category == 0) { //conditional statement for when the chill vibe (0) is selected
    fill(176, 38, 255);
    
    text("CHILL VIBES", xCoordinate, 60);

    for (let i = 0; i < 10; i++) { //for loop to go over each row in the csv file
      
      //randomly deciding where the beginning of each row will go for movement
      xCoordinate = round(random(0,100));
      
      if (colorPicker % 2 == 0) { //if statement to make sure each subsequent line is a different color 
        fill(176, 38, 255);
      } else {
        fill(255);
      }

      singleRow = split(songs[i], ","); //assigning each singer's row to the singleRow array

      //assigning the song (correspnding to the vibe denoted by the category variable) 
      //to a variable & displaying it with its respective artist
      song = singleRow[category]; 
      text(song + " - " + singers[i], xCoordinate, yCoordinate);
      
      //incrementing the colorPicker variable to ensure alternating pattern 
      //& the yCoordinate to ensure each song is on its own line
      colorPicker++;
      yCoordinate = yCoordinate + size;
    }

    fill(255);
    text("CHILL VIBES", xCoordinate, yCoordinate);
  
  } else {
    
    //conditional statement if the sad vibe (1) is selected
    //which follows the same pattern as the chill vibe
    if (category == 1) { 
      
      fill(12, 191, 233);
      
      text("SAD VIBES", xCoordinate, 60);
      
      for (let i = 0; i < 10; i++) {
        
        xCoordinate = round(random(0,100));
        
        if (colorPicker % 2 == 0) {
          fill(12, 191, 233);
        } else {
          fill(255);
        }

        singleRow = split(songs[i], ",");
        
        song = singleRow[category];
        text(song + " - " + singers[i], xCoordinate, yCoordinate);
        
        colorPicker++;
        yCoordinate = yCoordinate + size;
      }
      
      fill(255);
      text("SAD VIBES", xCoordinate, yCoordinate);
      
    } else {
      
      //conditional statement if the confidence boost vibe (2) is selected
      //which follows the same pattern as the chill vibe
      if (category == 2) {
        
        fill(57, 255, 20);
        
        text("CONFIDENCE BOOST VIBES", xCoordinate, 60);
        
        for (let i = 0; i < 10; i++) {
          
          xCoordinate = round(random(0,100));
          
          if (colorPicker % 2 == 0) {
            
            fill(57, 255, 20);
          } else {
            fill(255);
          }

          singleRow = split(songs[i], ",");
          
          song = singleRow[category];
          
          text(song + " - " + singers[i], xCoordinate, yCoordinate);
          
          colorPicker++;
          yCoordinate = yCoordinate + size;
        }
        
        fill(255);
        text("CONFIDENCE BOOST VIBES", xCoordinate, yCoordinate);
        
      } else {
        
        //conditional statement if the dance party vibe (3) is selected
        //which follows the same pattern as the above vibes
        if (category == 3) { 
          
          fill(255, 16, 240);
          
          text("DANCE PARTY VIBES", xCoordinate, 60);
          
          for (let i = 0; i < 10; i++) {
            
            xCoordinate = round(random(0,100));
            
            if (colorPicker % 2 == 0) {
              fill(255, 16, 240);
            } else {
              fill(255);
            }

            singleRow = split(songs[i], ",");
            
            song = singleRow[category];
            text(song + " - " + singers[i], xCoordinate, yCoordinate);
            
            colorPicker++;
            yCoordinate = yCoordinate + size;
          }
          
          fill(255);
          text("DANCE PARTY VIBES", xCoordinate, yCoordinate);
          
        } else {
          
          //conditional statement if the happy vibe (4) is selected
          //which follows the same pattern as the above vibes
          if (category == 4) {
            
            fill(255, 240, 31);
            
            text("HAPPY VIBES", xCoordinate, 60);
            
            for (let i = 0; i < 10; i++) {
              
              xCoordinate = round(random(0,100));
              
              if (colorPicker % 2 == 0) {
                fill(255, 240, 31);
              } else {
                fill(255);
              }

              singleRow = split(songs[i], ",");
              
              song = singleRow[category];
              text(song + " - " + singers[i], xCoordinate, yCoordinate);
              
              colorPicker++;
              yCoordinate = yCoordinate + size;
            }
            
            fill(255);
            text("HAPPY VIBES", xCoordinate, yCoordinate);
          } else {
            
            //conditional statement if the throwback vibe (5) is selected
            //which follows the same pattern as the above vibes
            if (category == 5) { 
              
              fill(255, 95, 31);
              
              text("THROWBACK VIBES", xCoordinate, 60);
              
              for (let i = 0; i < 10; i++) {
                
                xCoordinate = round(random(0,100));
                
                if (colorPicker % 2 == 0) {
                  fill(255, 95, 31);
                } else {
                  fill(255);
                }

                singleRow = split(songs[i], ",");
                
                song = singleRow[category];
                text(song + " - " + singers[i], xCoordinate, yCoordinate);
                
                colorPicker++;
                yCoordinate = yCoordinate + size;
              }
              
              fill(255);
              text("THROWBACK VIBES", xCoordinate, yCoordinate);
              
            } else {
              
              //conditional statement if the karaoke vibe (6) is selected
              //which follows the same pattern as the above vibes
              if (category == 6) { 
                
                fill(255, 49, 49);
                
                text("KARAOKE VIBES", xCoordinate, 60);
                
                for (let i = 0; i < 10; i++) {
                  
                  xCoordinate = round(random(0,100));
                  
                  if (colorPicker % 2 == 0) {
                    fill(255, 49, 49);
                  } else {
                    fill(255);
                  }

                  singleRow = split(songs[i], ",");
                  
                  song = singleRow[category];
                  
                  text(song + " - " + singers[i], xCoordinate, yCoordinate);
                  
                  colorPicker++;
                  yCoordinate = yCoordinate + size;
                }
                
                fill(255);
                text("KARAOKE VIBES", xCoordinate, yCoordinate);
              }
            }
          }
        }
      }
    }
  }
}
