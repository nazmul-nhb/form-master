
import './App.css'
import ReusableForm from './components/ReusableForm/ReusableForm'
import HookForm from './components/HookForm/HookForm'
// import RefForm from './components/RefForm/RefForm'
// import SimpleForm from './components/SimpleForm/SimpleForm'
// import StatefulForm from './components/StatefulForm/StatefulForm'

function App() {

  const handleUpdateProfile = data => {
    console.log('profile update data:', data);
  }

  const handleSignUp = data => {
    console.log('sign up data:', data);
  }

  return (
    <>
      <h2 className='text-3xl font-bold text-teal-900'>Exploring Forms</h2>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      <HookForm></HookForm>
      <ReusableForm
        formTitle={'Sign Up'}
        buttonText={'Sign Up'}
        handleSubmit={handleSignUp}>
          <div>
            <h2>Sign Up</h2>
            <p>Please, sign up to get all the benefits!</p>
          </div>
        </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        buttonText={'Update'}
        handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always Keep Your Profile Updated</p>
          </div>
        </ReusableForm>
    </>
  )
}

export default App
