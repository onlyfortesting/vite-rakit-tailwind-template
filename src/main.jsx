function App() {
  onMount(() => {
    console.log("Good luck!")
  })

  return (
    <div>
      <h1>Good luck!</h1>
    </div>
  )
}

$("#app").append(App())
