const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt").slice(0, -5)
  //const today = "10/01"
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já foi adicionado")
    return
  }
  alert("O dia foi adcionado com sucesso ✔")
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("diadomes", JSON.stringify(nlwSetup.data))
}
const data = JSON.parse(localStorage.getItem("diadomes")) || {}
nlwSetup.setData(data)
nlwSetup.load()
