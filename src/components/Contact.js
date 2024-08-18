const Contact = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h1>
      <form className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          className="border border-gray-300 p-3 mb-6 w-full rounded-lg focus:ring-2 focus:ring-pink-400"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-gray-300 p-3 mb-6 w-full rounded-lg focus:ring-2 focus:ring-pink-400"
          placeholder="Message"
        />
        <button className="w-full py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600 transition">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
