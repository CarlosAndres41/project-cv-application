const PersonalInfo = () => {
    return (
        <>
            <div className='title'>
                <h3>Personal Info</h3>
            </div>
            <form>
                <div className='form-pair'>
                    <div className='formInput'>
                        <label htmlFor='fName'>First Name</label>
                        <input type='text' id='fName'></input>
                    </div>
                    <div className='formInput'>
                        <label htmlFor='lName'>Last Name</label>
                        <input type='text' id='lName'></input>
                    </div>
                </div>
                <div className='formInput'>
                    <label htmlFor='profession'>Profession</label>
                    <input type='text' id='profession'></input>
                </div>
                <div className='form-pair'>
                    <div className='formInput'>
                        <label htmlFor='city'>City/State</label>
                        <input type='text' id='city'></input>
                    </div>
                    <div className='formInput'>
                        <label htmlFor='postal'>Postal Code</label>
                        <input type='text' id='postal'></input>
                    </div>
                </div>
                <div className='form-pair'>
                    <div className='formInput'>
                        <label htmlFor='Country'>Country</label>
                        <input type='text' id='country'></input>
                    </div>
                    <div className='formInput'>
                        <label htmlFor='pnone'>Phone</label>
                        <input type='tel' id='phone'></input>
                    </div>
                </div>
                <div className='formInput'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email'></input>
                </div>
            </form>
        </>
    );
};

export default PersonalInfo;
