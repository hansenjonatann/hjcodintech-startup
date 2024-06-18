import Link from "next/link";

const Jumbotron = () => {
  return (
    <>
      <section className="bg-indigo-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-4xl text-white">
            Startup yang berdiri untuk membantu Anda yang{" "}
            <span className="font-bold">Pemula , dan awam</span> dalam
            mempelajari Teknologi
          </h1>
          <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 lg:px-48 text-gray-400">
            Kami menyediakan berbagai layanan yang dapat anda gunakan untuk
            membantu anda.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link
              href="/blog"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4  focus:ring-blue-900"
            >
              Kunjungi Blog Kami
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Jumbotron;
