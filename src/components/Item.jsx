
function Item({item, date, checked, changeTo, remove}) {
  function onRemove() {
    let e = {target: {name: item, id: date}}
    remove(e, checked ? 'dones' : 'todos')
  }
  return (
        <div className="todo__item">
            <input 
            name={item}
            id={date}
            type="checkbox" 
            checked={checked}
            onChange={e => changeTo(e)}
            />
            <div>
              <h3>{item}</h3>
              <p>{date}</p>
            </div>
            <button onClick={onRemove}></button>
        </div>
  )
}

export default Item;