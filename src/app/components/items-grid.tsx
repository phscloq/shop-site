import ItemCart from "./item-cart"

export default function ItemsGrid(){
    return (
        <div className="mt-4 flex-1 grid  grid-cols-4 gap-8 text-black">
            <ItemCart />
        </div>
    )
}