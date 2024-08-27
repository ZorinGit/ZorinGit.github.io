// get the cat image element
const random_cat_img = document.getElementById("random_cat_img");
// get button element
const new_cat_picture_button = document.getElementById("new_cat_picture_button");

// define maximum number of the random pictures
const max_number_pics = 41;

// declare an array for all the .jpg numbers
let numbers = [];

// loop to populate the array with strings for the .jpg numbers
for (let i = 1; i < max_number_pics; i++) {
    number = i.toString().padStart(3, '0');
    numbers.push(number);
}
console.log(numbers)

// function that will change the picture by creating a new address and modifying it for the source
function change_picture() {
    // pick a random for array indexing
    let random_number_for_array = Math.floor(Math.random() * (max_number_pics - 1));
    console.log(random_number_for_array)
    // get the .jpg number associated with it
    let number_for_address = numbers[random_number_for_array];
    // generate address string using that random .jpg number
    let address = `Pics/html2/${number_for_address}.jpg`;
    // changes src attribute
    random_cat_img.setAttribute("src", address);
};


// get a picture up for the first time load
change_picture();

// change picture on click for the button
new_cat_picture_button.addEventListener("click", change_picture);