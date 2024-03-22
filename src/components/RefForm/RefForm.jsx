import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div className="my-8">
            <form onSubmit={handleSubmit} className="w-1/2 flex flex-col items-center justify-center gap-4 mx-auto">

                <input
                    ref={nameRef}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="text" name="name" />

                <input
                    ref={emailRef}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="email" name="email" />

                <input
                    ref={passwordRef}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="password" name="password" />

                <input
                    className="rounded-[48px] border border-teal-600 bg-teal-600 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-600"
                    type="submit" value="Submit" />

                <button
                    className="rounded-[48px] border border-teal-800 bg-teal-800 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-800">Submit</button>
            </form>
        </div>
    );
};

export default RefForm;