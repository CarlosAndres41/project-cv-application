const WorkHistory = () => {
    return (
        <section>
            <div>
                <div className='title'>
                    <h3>Work History</h3>
                </div>
                <form>
                    <div className='form-pair'>
                        <div className='form-input'>
                            <label htmlFor='title'>Job Title</label>
                            <input type='text' id='title'></input>
                        </div>
                        <div className='form-input'>
                            <label htmlFor='employer'>Employer</label>
                            <input type='text' id='employer'></input>
                        </div>
                    </div>
                    <div className='form-pair'>
                        <div className='form-input'>
                            <label htmlFor='city'>City/State</label>
                            <input type='text' id='city'></input>
                        </div>
                        <div className='form-input'>
                            <label htmlFor='country'>Country</label>
                            <input type='text' id='country'></input>
                        </div>
                    </div>
                    <div className='form-pair'>
                        <div className='form-input'>
                            <label htmlFor='start'>Start Date</label>
                            <input type='text' id='start'></input>
                        </div>
                        <div className='form-input'>
                            <label htmlFor='end'>End Date</label>
                            <input type='tel' id='end'></input>
                        </div>
                    </div>
                    <div className='form-input checkbox'>
                        <input type='checkbox' id='check'></input>
                        <label htmlFor='check'>I currently work here</label>
                    </div>
                    <div className='form-input description'>
                        <label htmlFor='desc'>Job Description</label>
                        <textarea
                            id='desc'
                            name='desc'
                            rows='4'
                            cols='50'
                        ></textarea>
                    </div>
                    <div className='form-input'></div>
                    <p>+ Add another job</p>
                    <button type='submit'>Back</button>
                    <button type='submit'>Save and continue</button>
                </form>
            </div>
        </section>
    );
};
export default WorkHistory;
