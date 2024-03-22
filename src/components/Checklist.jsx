import checklist from '../assets/icon-list.svg';

const Checklist = ({text}) => {
    return (
        <div className="flex items-center justify-start mb-3">
            <div>
                <img src={checklist} alt="checklist icon" className="w-5 mr-6" />
            </div>
            <div className="font-sm">
                {text}
            </div>
        </div>
    );
}

export default Checklist;