const body = document.querySelector('body')
const grid = document.querySelector('.grid')
const cells = document.querySelectorAll('.cell')

const randomColor = function () {
  let random1 = parseInt(Math.random() * 255) - 1
  let random2 = parseInt(Math.random() * 255) - 1
  let random3 = parseInt(Math.random() * 255) - 1
  return `rgb(${random1}, ${random2}, ${random3})`
}
// highlight the grid
grid.addEventListener(
  'mouseenter',
  () => {
    grid.classList.add('border-around')
  },
  false
)
grid.addEventListener(
  'mouseleave',
  () => {
    grid.classList.remove('border-around')
  },
  false
)

// on cells
cells.forEach((cell) => {
  // highlight the cells
  cell.addEventListener('mouseenter', () => {
    cell.style.outline = " 2px solid green"
  })
  cell.addEventListener('mouseleave', () => {
    cell.style.outline = "";
  })
  //   change a background color when clicking
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = randomColor()
  })

  // OTHER SOLUTION : Set/remove random background color on click
//   cell.addEventListener("click", () => {
//     if (cell.style.backgroundColor) {
//       cell.style.backgroundColor = "";
//     } else {
//       cell.style.backgroundColor = `#${randColor()}`;
//     }
//   });

})

/**
 * Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 *
 */
document.addEventListener('keydown', (event) => {
  console.log(event.key)
  event.key === 'b'
    ? (body.style.backgroundColor = randomColor())
    : (body.style.backgroundColor = 'white')
})

/**
 * Set page background using the "d" key on the keyboard
 */
// const body = document.body;
// body.addEventListener("keydown", (event) => {
//   // event.code holds the current key pressed:
//   console.log(event.code);

//   // Test for KeyD (the "d" key)
//   if (event.code === "KeyD") {
//     body.style.backgroundColor === ""
//       ? (body.style.backgroundColor = "hsl(201, 34%, 13%)")
//       : (body.style.backgroundColor = "");
//   }
// });

