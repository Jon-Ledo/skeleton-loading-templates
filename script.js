const grid = document.querySelector(".grid")
const cardTemplate = document.querySelector("#card-template")

// Since the keyframe animations will not load up right away on start, instead what we can do is make a for loop that will clone the template and append it at the start

for (let i = 0; i < 10; i++) {
  // cloning all the info inside of the template, and putting it inside of the grid
  grid.append(cardTemplate.content.cloneNode(true))
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(posts => {
    //whenever we load our information, clear out anything there
    grid.innerHTML = ''
    posts.forEach(post => {
      // cloning all the info inside of the template, and putting it inside of the grid with new information
      const div = cardTemplate.content.cloneNode(true)
      div.querySelector('[data-title]').textContent = post.title
      div.querySelector('[data-body]').textContent = post.body
      grid.append(div)
    })
  })