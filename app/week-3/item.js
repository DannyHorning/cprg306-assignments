export default function Item({name, quantity, category}){
    return(
        <div className="bg-slate-500">
            <ul className="m-2">
            <li className="text-xl">{name}</li>
            <li className="text-sm">Quantity: {quantity}</li>
            <li className="text-sm">Category: {category}</li>
            </ul>
        </div>

    )
}