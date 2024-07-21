import { useRef } from "react";
import { useForm } from "react-hook-form";


const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const modalRef = useRef(null);

    const closeModal = () => {
        modalRef.current.close();
    };

    return (
        <>
            <div >
                <dialog id="my_modal_3" className="modal" ref={modalRef}>
                    <div className="modal-box">
                        <div method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-md">
                                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                                {/* Email Section */}
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input id="email" type="text" placeholder="akash@gmail.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...register("email", { required: true })} />
                                    <br />
                                    {errors.email && <span className="text-red">This field is required</span>}
                                </div>

                                {/* Password Section */}
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                    <input id="password" type="password" placeholder="Enter password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        {...register("password", { required: true })} />
                                    <br />
                                    {errors.password && <span className="text-red-500">This field is required</span>}
                                </div>

                                <div className="flex items-center justify-between">
                                    <button type="submit" className="w-full bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Login</button>
                                    <span className="ml-2">Not registered?

                                        <a href="/signup" className="text-pink-500 hover:underline">Signup</a>

                                    </span>
                                </div>
                            </form>

                        </div>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Login
