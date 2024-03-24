import Checklist from "./Checklist";

const Card = ({ toggle, mail, setMail, errMessage }) => {
  return (
    <div
      className="
        bg-white text-black flex flex-col m-4 w-[90%] md:w-[80%] lg:w-[65%] xl:w-[55%]
        rounded-lg overflow-hidden
        sm:flex-row-reverse
      "
    >
      <div
        className="
          bg-illustration-m bg-no-repeat bg-center bg-cover flex-1 min-h-[45vh]
          lg:bg-illustration-d
        "
      >
        {/*Empty Div*/}
      </div>

      <div className="flex flex-col flex-1 items-start justify-center w-full px-4 py-8 md:p-6">
        <div className="font-bold text-3xl text-background mb-5">
          Stay updated!
        </div>
        <div className="mb-5">
          Join 60,000+ product managers receiving monthly updates on:
        </div>
        <div className="flex flex-col">
          <Checklist text="Product discovery and building what matters" />
          <Checklist text="Measuring to ensure updates are a success" />
          <Checklist text="And much more!" />
        </div>
        <div className="mt-5 w-full">
          <form action="submit" className="flex flex-col w-full">
            <label htmlFor="email" className="mb-3 text-xs">
              Email address
            </label>
            <input
              type="email"
              placeholder="email@company.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              className={`border border-solid ${errMessage ? 'border-red-500' : 'border-black'} rounded-md p-2`}
            />
            {errMessage && (
              <div className="text-red-800 text-xs mt-2">
                Please input a valid e-mail
              </div>
            )}
          </form>
        </div>
        <div className="my-5 w-full">
          <input
            type="button"
            value="Subscribe for monthly newsletter"
            onClick={() => toggle()}
            className="
                p-6 rounded-md flex text-white items-center justify-center bg-background 
                text-md w-full 
                hover:bg-tomato hover:cursor-pointer transition-all ease-out duration-300
              "
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
