import { Rating } from '@mantine/core';

export default function BookCard({title,author,rating}){
    return(
        <>
        <div className="bg-[#1e2836] rounded-lg overflow-hidden shadow-lg">
                <div className="bg-white p-4 flex justify-center items-center h-64">
                    BOOK IMG
                </div>

                <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{title}</h3>
                    <p className="text-gray-400 text-sm mb-2">By {author}</p>

                    <div className="flex items-center mb-4">
                        <Rating value={rating} defaultValue={0}/>
                        <span className="ml-2 text-gray-400 text-sm">({rating})</span>
                    </div>

                    <button className="w-full py-2 font-extrabold bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                        Read More
                    </button>
                </div>
            </div>
        </>
    )
}