
const SimpleForm = () => {

const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name.value, e.target.email.value);
}

    return (
        <div onSubmit={handleSubmit} className="my-8">
            <form className="w-1/2 flex flex-col items-center justify-center gap-4 mx-auto">

                <input 
                className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2" 
                type="text" name="name" />

                <input 
                className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2" 
                type="email" name="email" />

                <input 
                className="rounded-[48px] border border-teal-600 bg-teal-600 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-600" 
                type="submit" value="Submit" />

                <button 
                className="rounded-[48px] border border-teal-800 bg-teal-800 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-800">Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;