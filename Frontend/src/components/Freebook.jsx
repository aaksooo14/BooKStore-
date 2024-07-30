
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import Cards from './Cards';
import { useEffect, useState } from 'react';

const Freebook = () => {

    const [book, setBook] = useState([]);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:3000/book");
                console.log(res.data);

                const data = res.data.filter((data) => {
                    if (activeCategory === 'All') {
                        return true;
                    }
                    else {
                        return data.category === activeCategory;
                    }
                }
                );

                setBook(data)
            } catch (error) {
                console.log("error", error)
            }
        }
        getBook();
    }, []);

    const [activeCategory, setActiveCategory] = useState('All');

    // const filterData = list.filter((data) => {
    //     if (activeCategory === 'All') {
    //         return true;
    //     }
    //     else {
    //         return data.category === activeCategory;
    //     }
    // }
    // );

    const handleCategoryClick = (category) => {
        setActiveCategory(category); // Update active category state
    };



    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='w-full'>
                <h1 className='font-semibold text-xl pb-2'>Free courses</h1>
                <p>Discover a world of books at your fingertips. Browse, shop, and indulge in your next great read with our bookstore app!</p>
            </div>
            <div className='mt-5'>
                <button className='btn bg-slate-500' onClick={() => handleCategoryClick('Male')}>Male</button>
                <button className='btn bg-slate-500' onClick={() => handleCategoryClick('Female')}>Female</button>
                <button className='btn bg-slate-500' onClick={() => handleCategoryClick('All')}>All</button>
                <div className='mt-5'>
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full ">
                        {
                            book.map((item) => (
                                <Cards className='carousel-item' item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Freebook;
