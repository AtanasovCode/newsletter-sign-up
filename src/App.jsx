import Checklist from "./components/Checklist";

const App = () => {
  return (
    <div className="bg-background w-screen min-h-screen flex items-center justify-center">
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
            <form className="flex flex-col w-full">
              <label htmlFor="email" className="mb-3 text-sm">
                Email address
              </label>
              <input
                type="text"
                placeholder="email@company.com"
                className="border border-solid border-black rounded-md p-4 font-bold"
              />
            </form>
          </div>
          <div className="my-5 w-full">
            <input
              type="button"
              value="Subscribe for monthly newsletter"
              className="p-6 rounded-md flex text-white items-center justify-center bg-background text-md w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
