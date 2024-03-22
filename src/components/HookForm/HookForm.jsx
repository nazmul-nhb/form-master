import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState('Rojoni Hooked');
    const emailState = useInputState('rojoni@sojoni.go');
    console.log({...emailState});

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div className="my-8">
            <form onSubmit={handleSubmit} className="w-1/2 flex flex-col items-center justify-center gap-4 mx-auto">

                <input
                    // value={name} onChange={handleNameChange}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="text" name="name" />

                <input
                    {...emailState}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="email" name="email" />

                <input
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

export default HookForm;