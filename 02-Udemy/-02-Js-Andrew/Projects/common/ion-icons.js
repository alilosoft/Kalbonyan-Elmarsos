//<ion-icon name="trash"></ion-icon>
const createIonIcon = function (name) {
  const icon = document.createElement('ion-icon')
  icon.setAttribute('name', name)
  return icon
}
