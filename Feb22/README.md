# My Experience
- The idea behind my assignment was a program that randomly generates a playlist based on a given emotion, or as I refer to it, "vibe." Thus, I found songs from 10 of my favorite artists that matched each of the seven vibes I wanted to include: chill, sad, dance party, confidence boost, karaoke, throwback and happy. These songs were entered in a csv file (located in this folder) where each row corresponded to an artist, and the index of each row corresponded to a specific vibe
- Thus, the program would randomly generate an integer that would correspond to a particular index of each row which, in turn, would correspond to a specific music vibe, producing a curated playlist for a given feeling.
- In addition, I wanted an appearance similar to my very own Spotify account, hence the neon colors and black background. 
  - This website was especially helpful when finding the RGB code for various neon colors: https://htmlcolorcodes.com  
- Update: After completing the assignment, I have realized how convenient it would have been if I had used a function to draw each playlist rather than copy and pasting the code for each one.
- Some difficulties I faced while doing this assignment:
  - Since I forgot that p5.js begins indexing elements at 0, I had trouble getting the `for()` loop to properly iterate over my csv file, so by the time the loop would get to the last iteration, there would be no elements left. Resetting the counter to start from 0 was an easy enough fix.
  - Along that same vein, I initially had the csv file opened and read in the `setup()` function. As a result, when I tried to use the `split()` function on the resultant array, sometimes p5 would throw an error saying that the `split()` function receieved an empty list. Moreover, I noticed that this mostly happened with artists to the bottom of the csv file, which it would have taken a longer time to get to, naturally. It took me a while before realizing that the `preload` function was more appropriate, since I wanted the csv file read before anything else could be carried out. 
  - I originally wanted to incorporate translations to do a sliding movement, whereby as one part of the song title goes off the right edge of the canvas, it would reappear from the left side, with each row moving at a different speed. Unfortunately, I was unsure of how to do this, so I instead opted to randomly assign an x coordinate to each song title every time the background is drawn, slowing down the frame rate in order to make the titles easy to read. Despite looking a bit choppy, I think the movement is better than plain text. Once we start working with sound, I think it would also be cool to synchronize the movement of the text with music.

# Video of My Assignment

https://user-images.githubusercontent.com/98512630/154932233-aba8b217-41a9-4d06-b12f-2dd0d1baa596.mov

