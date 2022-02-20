function preload() {
  songs = loadStrings("songs.csv");
}

let category;
let songs = [];

function setup() {
  createCanvas(800, 600);
  category = round(random(0, 6));
}

function draw() {
  background(0);

  let singleRow = [];
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
  let colorPicker = 1;

  textFont("Helvetica", 25);
  textStyle(BOLD);
  let size = 30;
  textSize(size);
  let yCoordinate = 90;

  if (category == 0) {
    fill(176, 38, 255);
    text("CHILL VIBES", 0, 60);

    for (let i = 0; i < 10; i++) {
      if (colorPicker % 2 == 0) {
        fill(176, 38, 255);
      } else {
        fill(255);
      }

      singleRow = split(songs[i], ",");

      song = singleRow[category];
      text(song + " - " + singers[i], 0, yCoordinate);
      colorPicker++;
      yCoordinate = yCoordinate + size;
    }

    fill(255);
    text("CHILL VIBES", 0, yCoordinate);
  } else {
    if (category == 1) {
      fill(12, 191, 233);
      text("SAD VIBES", 0, 60);
      for (let i = 0; i < 10; i++) {
        if (colorPicker % 2 == 0) {
          fill(12, 191, 233);
        } else {
          fill(255);
        }

        singleRow = split(songs[i], ",");
        song = singleRow[category];
        text(song + " - " + singers[i], 0, yCoordinate);
        colorPicker++;
        yCoordinate = yCoordinate + size;
      }
      fill(255);
      text("SAD VIBES", 0, yCoordinate);
    } else {
      if (category == 2) {
        fill(57, 255, 20);
        text("CONFIDENCE BOOST VIBES", 0, 60);
        for (let i = 0; i < 10; i++) {
          if (colorPicker % 2 == 0) {
            fill(57, 255, 20);
          } else {
            fill(255);
          }

          singleRow = split(songs[i], ",");
          song = singleRow[category];
          text(song + " - " + singers[i], 0, yCoordinate);
          colorPicker++;
          yCoordinate = yCoordinate + size;
        }
        fill(255);
        text("CONFIDENCE BOOST VIBES", 0, yCoordinate);
      } else {
        if (category == 3) {
          fill(255, 16, 240);
          text("DANCE PARTY VIBES", 0, 60);
          for (let i = 0; i < 10; i++) {
            if (colorPicker % 2 == 0) {
              fill(255, 16, 240);
            } else {
              fill(255);
            }

            singleRow = split(songs[i], ",");
            song = singleRow[category];
            text(song + " - " + singers[i], 0, yCoordinate);
            colorPicker++;
            yCoordinate = yCoordinate + size;
          }
          fill(255);
          text("DANCE PARTY VIBES", 0, yCoordinate);
        } else {
          if (category == 4) {
            fill(255, 240, 31);
            text("HAPPY VIBES", 0, 60);
            for (let i = 0; i < 10; i++) {
              if (colorPicker % 2 == 0) {
                fill(255, 240, 31);
              } else {
                fill(255);
              }

              singleRow = split(songs[i], ",");
              song = singleRow[category];
              text(song + " - " + singers[i], 0, yCoordinate);
              colorPicker++;
              yCoordinate = yCoordinate + size;
            }
            fill(255);
            text("HAPPY VIBES", 0, yCoordinate);
          } else {
            if (category == 5) {
              fill(255, 95, 31);
              text("THROWBACK VIBES", 0, 60);
              for (let i = 0; i < 10; i++) {
                if (colorPicker % 2 == 0) {
                  fill(255, 95, 31);
                } else {
                  fill(255);
                }

                singleRow = split(songs[i], ",");
                song = singleRow[category];
                text(song + " - " + singers[i], 0, yCoordinate);
                colorPicker++;
                yCoordinate = yCoordinate + size;
              }
              fill(255);
              text("THROWBACK VIBES", 0, yCoordinate);
            } else {
              if (category == 6) {
                fill(255, 49, 49);
                text("KARAOKE VIBES", 0, 60);
                for (let i = 0; i < 10; i++) {
                  if (colorPicker % 2 == 0) {
                    fill(255, 49, 49);
                  } else {
                    fill(255);
                  }

                  singleRow = split(songs[i], ",");
                  song = singleRow[category];
                  text(song + " - " + singers[i], 0, yCoordinate);
                  colorPicker++;
                  yCoordinate = yCoordinate + size;
                }
                fill(255);
                text("KARAOKE VIBES", 0, yCoordinate);
              }
            }
          }
        }
      }
    }
  }
}
