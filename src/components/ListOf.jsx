import { useState,useContext } from 'react'
import { DosContext } from '../DosContext'

import SortBy from './SortBy'
import Item from './Item'

function ListOf({values, checked, toAnother, title}) {

  const {setDos} = useContext(DosContext)
  const [sort, setSort] = useState('A-Z')
  sortItems(sort)
  
  let items =  values.map(value => {
    return (
    <Item 
      item={value[0]} 
      date={value[1]} 
      checked={checked}
      changeTo={changeTo}
      remove={remove}
      />
    )})

    function changeTo(e) {
      let targets = ['todos', 'dones']
      if (checked) targets.reverse()
      remove(e, targets[0])

      setDos(prev => {
        let newItem = [e.target.name, e.target.id]
        return {...prev, [targets[1]]: [...prev[targets[1]], newItem]}})
    }

  function remove(e, which) {
    setDos(prev => {
      let filter = prev[which].filter(i => i[0] !== e.target.name && i[1] !== e.target.id)
      return {...prev, [which]: filter}})
  }
  
  function handleSorting(e) {
    setSort(e.target.value)
  }

  function sortItems(sortMethod) {
    switch (sortMethod) {
      case 'A-Z':
        values = values.sort()
        break
      case 'Z-A':
        values = values.sort()
        values = values.reverse()
        break
      case 'dateDown':
        values = sortData()
        values = values.reverse()
        break
      case 'dateUp':
        values = sortData()
        break
    }
  }  

  function sortData() {
    let output = values.sort((a, b) => {
      let dateA = convertToNum(a[1])
      let dateB = convertToNum(b[1])
      return dateA - dateB
    })
    return output
  }

  function convertToNum(date) {
    return date.replace(/\//g,'').replace(/ /g, '').replace(/:/g,'').replace('-', '')
  }

  return (
    <div className="listOf">
      <h1>{title}</h1>
        <SortBy handleSorting={handleSorting} sort={sort} />
        {items} 
    </div>
  );
}

export default ListOf;