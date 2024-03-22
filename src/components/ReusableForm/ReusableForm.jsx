import PropTypes from 'prop-types';

const ReusableForm = ({ handleSubmit, buttonText = 'Submit', children }) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }

    return (
        <div className="my-8">
            {/* <h2 className="text-3xl font-semibold my-4">{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalSubmit} className="w-1/2 flex flex-col items-center justify-center gap-4 mx-auto">

                <input
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="text" name="name" />

                <input
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="email" name="email" />

                <input
                    className="border border-gray-300 focus:border-gray-800 bg-gray-200 rounded-3xl focus:outline-0 px-4 py-2"
                    type="password" name="password" />

                <input
                    className="rounded-[48px] border border-teal-600 bg-teal-600 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-600"
                    type="submit" value={buttonText} />
                {/* 
                <button
                    className="rounded-[48px] border border-teal-800 bg-teal-800 text-white font-semibold text-2xl px-6 py-1 hover:bg-white hover:text-teal-800">Submit</button> */}
            </form>
        </div>
    );
};

ReusableForm.propTypes = {
    formTitle: PropTypes.string,
    buttonText: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    children: PropTypes.element
}

export default ReusableForm;