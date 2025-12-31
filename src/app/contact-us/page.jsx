export default function ContactUs() {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section
        className="relative h-[320px] w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('/images/contact-us.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white">
          <h1 className="text-4xl font-bold tracking-wide text-orange-400">
            CONTACT US
          </h1>

          <div className="flex justify-center my-3">
            <span className="w-10 h-[2px] bg-white"></span>
          </div>

          <p className="text-sm max-w-md mx-auto">
            Need an expert? You are more than welcome to contact us for any queries or support. Our team is here to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

          {/* VISIT US */}
          <div className="text-center">
            <div className="mx-auto mb-4 w-14 h-14 border border-orange-500 rounded-full flex items-center justify-center text-orange-500 text-2xl">
              🏠
            </div>

            <h3 className="font-semibold text-lg">VISIT US</h3>

            <p className="text-gray-500 text-sm mt-2">
              Can visit us at:-
            </p>

            <p className="text-orange-500 text-sm mt-3 font-medium">
              2-B/63A, Noida, UP
            </p>
          </div>

          {/* CALL US */}
          <div className="text-center">
            <div className="mx-auto mb-4 w-14 h-14 border border-orange-500 rounded-full flex items-center justify-center text-orange-500 text-2xl">
              📞
            </div>

            <h3 className="font-semibold text-lg">CALL US</h3>

            <p className="text-gray-500 text-sm mt-2">
              Call Us at:- 
            </p>

            <p className="text-orange-500 text-sm mt-3 font-medium">
              +91 99421 82815 <br>
              </br>
              +91 77368 70713
            </p>
          </div>

          {/* CONTACT US */}
          <div className="text-center">
            <div className="mx-auto mb-4 w-14 h-14 border border-orange-500 rounded-full flex items-center justify-center text-orange-500 text-2xl">
              ✉️
            </div>

            <h3 className="font-semibold text-lg">CONTACT US</h3>

            <p className="text-gray-500 text-sm mt-2">
              Mail us at:-
            </p>

            <p className="text-orange-500 text-sm mt-3 font-medium">
              <b>Info@eddoxtech.com </b>for general querys <br></br>
              <b>Support@eddoxtech.com </b>for support related querys
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
