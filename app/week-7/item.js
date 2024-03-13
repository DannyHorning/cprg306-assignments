export default function Item({name, quantity, category, onSelect}){
    return(
        <div>
        <button onClick={onSelect} value = {Item.name} className="bg-slate-900 p-1 m-1 rounded-lg hover:bg-slate-700"  >
            <ul className="m-2">
            <li className="text-xl">{name}</li>
            <li className="text-sm">Quantity: {quantity}</li>
            <li className="text-sm">Category: {category}</li>
            </ul>
        </button>
        
        </div>

    )
}