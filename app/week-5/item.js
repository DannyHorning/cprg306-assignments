export default function Item({name, quantity, category}){
    return(
        <div>
        <div className="bg-slate-900 p-1 m-1 rounded-lg">
            <ul className="m-2">
            <li className="text-xl">{name}</li>
            <li className="text-sm">Quantity: {quantity}</li>
            <li className="text-sm">Category: {category}</li>
            </ul>
        </div>
        
        </div>

    )
}