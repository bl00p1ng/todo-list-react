import { useState } from 'react'

// Lectura/escritura de datos en localStorage
function useLocalStorage (itemName, initialValue) {
  // Obtener tareas del localStorage
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = []
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  // Almacenar las tareas en el state
  const [item, setItem] = useState(parsedItem)

  // Guardar las tareas en local storage
  const saveItem = (itemToSave) => {
    const stringifiedToDos = JSON.stringify(itemToSave)
    localStorage.setItem(itemName, stringifiedToDos)

    // Actualizar tareas en el estado
    setItem(itemToSave)
  }

  return [
    item,
    saveItem
  ]
}

export default useLocalStorage
