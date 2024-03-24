import successIcon from '../assets/icon-success.svg';

const Confirmation = ({
    mail,
    toggleSubscribed,
}) => {
    return (
        <div className="
            p-6 bg-white rounded-xl flex flex-col m-4
            sm:w-[70%] md:w-[50%] lg:w-[30%]
        ">
            <div className="mb-6">
                <img src={successIcon} alt="success icon" />
            </div>
            <div className="font-bold text-4xl mb-6">
                Thanks for subscribing!
            </div>
            <div className="mb-6">
                A confirmation email has been sent to <span className="font-extrabold">{mail}</span>
                . Please open in and click the button inside to confirm your subscription
            </div>
            <div>
                <input 
                    type="button" 
                    value="Dismiss message"
                    className="w-full p-6 font-bold bg-background text-white hover:bg-tomato transition-all duration-200 hover:cursor-pointer"
                />
            </div>
        </div>
    );
}

export default Confirmation;