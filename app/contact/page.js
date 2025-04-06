
export default function ContactUs() {
    return (
        <div className="min-h-screen  flex flex-col items-center justify-center  ">
            
            <h1 className="text-3xl font-bold mb-3 text-center text-yellow-500">Contact Us</h1>
            <div className=" shadow-lg rounded-lg max-w-xl w-full p-8 text-white" style={{
            background: "linear-gradient(135deg, rgba(147, 112, 219, 0.3) 0%, rgba(150, 150, 250, 0.3) 100%)",
          }}>
                <p className="text-center mb-8">
                    We&apos;d love to hear from you! Fill out the form below and we'll <br />
                    get back to you as soon as possible.
                </p>
                <form className="space-y-6 items-center mx-auto max-w-sm">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="mt-1 block w-full px-4 py-2 bg-white text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full px-4 py-2 bg-white  text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 bg-white  text-gray-700 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder=" Write Your Message here...."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-blue-950 text-white font-medium rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}