const Preview = (props) => {
    return (
        <>
            <section className='preview'>
                <div className='personal-info'>
                    <h2>
                        <span>{props.data.personal.fName} </span>
                        <span>{props.data.personal.lName}</span>
                    </h2>
                    <h4>{props.data.personal.profession}</h4>
                    <span>{props.data.personal.city}, </span>
                    <span>{props.data.personal.country}, </span>
                    <span>{props.data.personal.postal}</span>
                    <h5>{props.data.personal.phone}</h5>
                    <h5>{props.data.personal.email}</h5>
                </div>
                <div className='main-body'>
                    <div className='summary'>
                        <h1>Summary</h1>
                        <p>{props.data.summary.summary}</p>
                        <hr></hr>
                    </div>
                    <div className='work-history'>
                        <h1>Work History</h1>
                        <div className='cv-head'>
                            <div className='cv-pair'>
                                <h3>{props.data.work.title}</h3>
                                <h5>
                                    {props.data.work.employer},{' '}
                                    {props.data.work.city},{' '}
                                    {props.data.work.country}
                                </h5>
                            </div>
                            <div className='cv-pair'>
                                <span>{props.data.work.start} / </span>
                                <span>{props.data.work.end}</span>
                            </div>
                        </div>
                        <p>{props.data.work.desc}</p>
                        <hr></hr>
                    </div>
                    <div className='education'>
                        <h1>Education</h1>
                        <div className='cv-head'>
                            <div className='cv-pair'>
                                <h3>{props.data.education.degree}</h3>
                                <h4>{props.data.education.school}</h4>
                                <h5>{props.data.work.location}</h5>
                                <span>{props.data.work.field}</span>
                            </div>
                            <div className='cv-pair'>
                                <span>{props.data.education.start} / </span>
                                <span>{props.data.education.end}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='buttons preview-btns'>
                <button type='submit' className='back' data-current='preview'>
                    Edit
                </button>
                <button type='submit' className='next'>
                    Save PDF
                </button>
            </div>
        </>
    );
};

export default Preview;
