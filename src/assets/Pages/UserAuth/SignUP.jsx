
import { Link } from 'react-router-dom';

const SignUP = () => {
      return (
            <section className="flex flex-col md:flex-row min-h-screen items-center w-5/6 mx-auto">
                  <div className="  lg:block w-full md:w-1/2 xl:w-1/2">
                        <img src="https://i.ibb.co/LCsvdQG/Blue-Flat-Color-Ui-Login-Page-Desktop-Prototype.png" className=" object-cover" />
                  </div>
                  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                        <div className="w-full pb-[500px] md:pb-0 lg:pb-0">
                              <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Create an account</h1>

                              {/* here form starts  */}
                              <form className="mt-6">
                                    <div>
                                          <label className="block text-gray-700">Name</label>
                                          <input
                                                type="text"
                                                name="name"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                autoFocus
                                                autoComplete
                                                required
                                          />
                                    </div>
                                    <div className="mt-4">
                                          <label className="block text-gray-700">Email</label>
                                          <input
                                                type="email"
                                                name="email"
                                                placeholder="your@gmail.com"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                required
                                          />
                                    </div>
                                    <div className="mt-4">
                                          <label className="block text-gray-700">Password</label>
                                          <input
                                                type="password"
                                                name="password"
                                                placeholder="Enter Password"
                                                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                                                required
                                          />

                                    </div>

                                    <div className="text-right mt-2">
                                          <a className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">
                                                Forgot Password?
                                          </a>
                                    </div>
                                    <button
                                          type="submit"
                                          className="w-full  bg-[#abc7cb] hover:bg-[#cbe4eb] focus:bg-[#cbe4eb] text-[#1f2937] font-semibold rounded-lg px-4 py-3 mt-6"
                                    >
                                          Sign up
                                    </button>
                              </form>
                              <hr className="my-6 border-gray-300 w-full" />

                              <p className="mt-8">
                                    Already have account? <Link to="/login"><a className="text-[#1f2937] hover:text-blue-700 font-semibold">Log in</a></Link>
                              </p>
                        </div>
                  </div>
            </section>
      );
};

export default SignUP;