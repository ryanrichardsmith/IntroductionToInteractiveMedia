function preload() {
  //loading the good food images
   chicken = loadImage("https://cdn2.iconfinder.com/data/icons/spain-cartoon/512/a1970-512.png");
   bacon = loadImage("https://cdn-icons-png.flaticon.com/512/985/985538.png");
   fish = loadImage("https://cdn1.iconfinder.com/data/icons/restaurants-and-food/113/fish-512.png");
   bread = loadImage("https://cdn2.iconfinder.com/data/icons/bakery-factory/500/vab164_15_loaf_bread_isometric_cartoon_hand_food_vintage-512.png")
   peanutbutter = loadImage("https://openclipart.org/image/800px/308866");
  
  //loading the bad food images
   grapes = loadImage("https://cdn2.iconfinder.com/data/icons/spain-cartoon/512/a1970-512.png");
   avocado = loadImage("https://cdn-icons-png.flaticon.com/512/3142/3142734.png");
   icecream = loadImage("https://cdn1.iconfinder.com/data/icons/restaurants-and-food/104/icecream-512.png");
  chocolate = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e2d36a7f-7ca4-4858-b311-2c23ee271452/d8i3n7j-8fc60e4a-69bf-42f8-9ef8-6b347e5ff376.png/v1/fill/w_1024,h_1642,strp/chocolate_bar_cartoon_by_thegoldenbox_d8i3n7j-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY0MiIsInBhdGgiOiJcL2ZcL2UyZDM2YTdmLTdjYTQtNDg1OC1iMzExLTJjMjNlZTI3MTQ1MlwvZDhpM243ai04ZmM2MGU0YS02OWJmLTQyZjgtOWVmOC02YjM0N2U1ZmYzNzYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.DLGIlyt6R5p7b-5npp6b5AZdHwBts3uht19qyE13Xu4");
  garlic = loadImage("https://cdn4.iconfinder.com/data/icons/spices-1/500/d441_6_garlic_flavoring_cartoon_food_fresh_vegetable_object-512.png");

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  photo.resize(200,0);
  image(photo, 0, 0);
  
}
