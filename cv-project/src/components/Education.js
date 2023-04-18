const Education = (props) => {
    return (
        <section>
            <div className='title'>
                <h3>Education</h3>
            </div>
            <form>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='school'>School Name</label>
                        <input
                            type='text'
                            id='school'
                            onChange={props.handler}
                        ></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='location'>Location</label>
                        <input
                            type='text'
                            id='location'
                            onChange={props.handler}
                        ></input>
                    </div>
                </div>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='degree'>Degree</label>
                        <input
                            type='text'
                            id='degree'
                            onChange={props.handler}
                        ></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='field'>Field Of Study</label>
                        <input
                            type='text'
                            id='field'
                            onChange={props.handler}
                        ></input>
                    </div>
                </div>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='start'>Start Date</label>
                        <input
                            type='date'
                            id='start'
                            onChange={props.handler}
                        ></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='end'>Graduation Date</label>
                        <input
                            type='date'
                            id='end'
                            onChange={props.handler}
                        ></input>
                    </div>
                </div>
                <div className='form-input checkbox'>
                    <input type='checkbox' id='check'></input>
                    <label htmlFor='check'>I currently attend here</label>
                </div>
                <p>+ Add another degree</p>
                <div className='buttons'>
                    <button type='submit' className='back'>
                        Back
                    </button>
                    <button type='submit' className='next'>
                        Next: summary
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Education;
