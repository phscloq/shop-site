import ItemCard from "./item-card"

export default function ItemsGrid(){
    return (
        <div className="mt-4 flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-black">
            <ItemCard />
        </div>
    )
}