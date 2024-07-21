

function Cards({ item }) {
    console.log(item)
    return (
        <>
            <div className="m-2">
                <div className="card bg-base-100 shadow-xl h-[470px] hover:scale-105 duration-320 dark:bg-slate-900 dark:text-white dark:border">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body w-[300]">
                        <h2 className="card-title text-sm md:text-xl">
                            {item.name}
                            <div className="badge badge-secondary text-xs ">{item.category}</div>
                        </h2>
                        <p className="text-[xs]">{item.title}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline bg-pink-600 text-gray-400 px-3 py-3 hover:text-white duration-200 hover:cursor-pointer">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
