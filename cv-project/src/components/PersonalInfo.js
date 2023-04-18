const PersonalInfo = (props) => {
    return (
        <section>
            <div className='title'>
                <h3>Personal Info</h3>
            </div>
            <form>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='fName'>First Name</label>
                        <input
                            type='text'
                            id='fName'
                            onChange={props.handler}
                        ></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='lName'>Last Name</label>
                        <input
                            type='text'
                            id='lName'
                            onChange={props.handler}
                        ></input>
                    </div>
                </div>
                <div className='form-input'>
                    <label htmlFor='profession'>Profession</label>
                    <input
                        type='text'
                        id='profession'
                        onChange={props.handler}
                    ></input>
                </div>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='city'>City/State</label>
                        <input
                            type='text'
                            id='city'
                            onChange={props.handler}
                        ></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='postal'>Postal Code</label>
                        <input
                            type='text'
                            id='postal'
                            onChange={props.handler}
                        ></input>
                    </div>
                </div>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='Country'>Country</label>
                        <input
                            type='text'
                            id='country'
                            onChange={props.handler}
                        ></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='phone'>Phone</label>
                        <input
                            type='tel'
                            id='phone'
                            onChange={props.handler}
                        ></input>
                    </div>
                </div>
                <div className='form-input'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        onChange={props.handler}
                    ></input>
                </div>
                <button type='submit'>Save and continue</button>
            </form>
        </section>
    );
};

export default PersonalInfo;
