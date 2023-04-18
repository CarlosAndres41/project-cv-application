const Summary = (props) => {
    return (
        <section>
            <div className='title'>
                <h3>Summary</h3>
            </div>
            <form>
                <div className='form-input description'>
                    <label htmlFor='summary'>
                        Briefly tell us about your background
                    </label>
                    <textarea
                        id='summary'
                        name='summary'
                        rows='4'
                        cols='50'
                        onChange={props.handler}
                    ></textarea>
                </div>
                <div className='buttons'>
                    <button type='submit' className='back'>
                        Back
                    </button>
                    <button type='submit' className='next'>
                        Show Preview
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Summary;
