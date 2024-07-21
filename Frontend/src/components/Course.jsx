import list from '../../public/list.json';
import Cards from '../components/Cards'
import { Link } from 'react-router-dom';
const Course = () => {
    return (
        <>
            <div className="max-w-screen-2xl  dark:bg-slate-900 dark:text-white container mx-auto md:px-20 px-4">
                <div className="pt-20  dark:bg-slate-900 dark:text-white items-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">Were delighted to have you <span className="text-pink-800">Here! :)</span></h1>
                    <p className="mt-12">A book is a medium for recording information in the form of writing or images. Books are typically composed of many pages, bound together and protected by a cover. Modern bound books were preceded by many other written mediums, such as the codex and the scroll.</p>
                    <Link to='/'>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-md  hover:bg-pink-700 duration-300 mt-10">Back</button>
                    </Link>

                </div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-4 mt-5'>
                        {
                            list.map((item) => (
                                <Cards item={item} key={item.id} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Course
