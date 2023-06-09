const WorkHistory = (props) => {
    return (
        <section className='work-history'>
            <div>
                <div className='title'>
                    <h3>Work History</h3>
                </div>
                {props.count.map((item, i) => (
                    <form key={i}>
                        <div className='form-pair'>
                            <div className='form-input'>
                                <label htmlFor='title'>Job Title</label>
                                <input
                                    type='text'
                                    id='title'
                                    onChange={props.handler}
                                ></input>
                            </div>
                            <div className='form-input'>
                                <label htmlFor='employer'>Employer</label>
                                <input
                                    type='text'
                                    id='employer'
                                    onChange={props.handler}
                                ></input>
                            </div>
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
                                <label htmlFor='country'>Country</label>
                                <input
                                    type='text'
                                    id='country'
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
                                <label htmlFor='end'>End Date</label>
                                <input
                                    type='date'
                                    id='end'
                                    onChange={props.handler}
                                ></input>
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
                                onChange={props.handler}
                            ></textarea>
                        </div>
                        <div className='form-input'></div>
                    </form>
                ))}
                <p className='add' data-current='work' onClick={props.add}>
                    + Add another job
                </p>
                <div className='buttons'>
                    <button
                        type='submit'
                        className='back'
                        onClick={props.back}
                        data-current='work'
                    >
                        Back
                    </button>
                    <button
                        type='submit'
                        className='next'
                        onClick={props.next}
                        data-current='work'
                    >
                        Next: Education
                    </button>
                </div>
            </div>
        </section>
    );
};
export default WorkHistory;
