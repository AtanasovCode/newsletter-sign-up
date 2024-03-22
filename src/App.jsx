import Checklist from "./components/Checklist";
import illustration from "./assets/illustration-sign-up-desktop.svg";

const App = () => {
  return (
    <div className="bg-background w-screen font-sans h-screen flex items-center justify-center">
      <div className="bg-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] rounded-md m-5 flex flex-row items-center justify-center p-6">
        <div className="flex flex-col flex-1 items-start justify-center mr-6 w-full">
          <div className="font-bold text-4xl text-background mb-4">
            Stay updated!
          </div>
          <div className="mb-6">
            Join 60,000+ product managers receiving monthly updates on:
          </div>
          <div className="flex flex-col">
            <Checklist text="Product discovery and building what matters" />
            <Checklist text="Measuring to ensure updates are a success" />
            <Checklist text="And much more!" />
          </div>
          <div className="mt-6 w-full">
            <form className="flex flex-col w-full">
              <label htmlFor="email" className="mb-3">
                Email address
              </label>
              <input
                type="text"
                placeholder="email@company.com"
                className="border border-solid border-black rounded-md p-4"
              />
            </form>
          </div>
          <div className="my-6 w-full">
            <input
              type="button"
              value="Subscribe for monthly newsletter"
              className="p-6 rounded-md flex text-white items-center justify-center bg-background text-md w-full"
            />
          </div>
        </div>
        <div className="flex-1">
          <img
            src={illustration}
            alt="illustration for sign up"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
