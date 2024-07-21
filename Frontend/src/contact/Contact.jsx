
const Contact = () => {
    return (
        <>
            <div >
                <div method="dialog" >
                    {/* if there is a button in form, it will close the modal */}

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>

                    <form className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
                        <h1 className="text-2xl font-bold mb-4 text-center">Contact US</h1>

                        {/* Name Section */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Name</label>
                            <input id="email" type="text" placeholder="Akash" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <br />

                        </div>


                        {/* Email Section */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input id="email" type="text" placeholder="akash@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <br />

                        </div>

                        {/* Password section */}
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Message</label>
                            <input id="password" type="password" placeholder="Enter password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <br />
                        </div>

                        <div className="flex items-center justify-between">
                            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>

                        </div>
                    </form>

                </div >
            </div >

        </>
    )
}

export default Contact
