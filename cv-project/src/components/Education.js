const Education = () => {
    return (
        <section>
            <div className='title'>
                <h3>Education</h3>
            </div>
            <form>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='school'>School Name</label>
                        <input type='text' id='school'></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='location'>Location</label>
                        <input type='text' id='location'></input>
                    </div>
                </div>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='degree'>Degree</label>
                        <input type='text' id='degree'></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='field'>Field Of Study</label>
                        <input type='text' id='field'></input>
                    </div>
                </div>
                <div className='form-pair'>
                    <div className='form-input'>
                        <label htmlFor='start'>Start Date</label>
                        <input type='date' id='start'></input>
                    </div>
                    <div className='form-input'>
                        <label htmlFor='end'>Graduation Date</label>
                        <input type='date' id='end'></input>
                    </div>
                </div>
                <div className='form-input checkbox'>
                    <input type='checkbox' id='check'></input>
                    <label htmlFor='check'>I currently attend here</label>
                </div>
                <p>+ Add another degree</p>
                <button type='submit'>Back</button>
                <button type='submit'>Save and continue</button>
            </form>
        </section>
    );
};

export default Education;
