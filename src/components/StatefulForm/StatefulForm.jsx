import { useState } from "react";

const StatefulForm = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be 6 characters or longer!')
        }
        else {
            setError('');
        }
        console.log(name, password, email);
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    return (
        <div onSubmit={handleSubmit} className="my-8">
            <form className="w-1/2 flex flex-col items-center justify-center gap-4 mx-auto">

                <input
                    onChange={handleNameChange}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="text" name="name" />

                <input onChange={handleEmailChange}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="email" name="email" />

                <input
                    onChange={handlePasswordChange}
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="password" name="password" />

                {
                    error && <p>{error}</p>
                }

                <input
                    className="rounded-[48px] border border-teal-600 bg-teal-600 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-600"
                    type="submit" value="Submit" />

                <button
                    className="rounded-[48px] border border-teal-800 bg-teal-800 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-800">Submit</button>
            </form>
        </div>
    );
};

export default StatefulForm;