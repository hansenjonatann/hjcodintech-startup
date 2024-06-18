const MemberPage = () => {
  return (
    <div className="h-screen w-full bg-gray-900">
      <h1 className="text-center text-xl font-bold text-white">Anggota </h1>
      <div className="mt-5 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <a href="#" className="group relative block bg-black">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div className="relative p-4 sm:p-6 lg:p-8">
            <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
              CEO
            </p>

            <p className="text-xl font-bold text-white sm:text-2xl">
              Hansen Jonatan
            </p>

            <div className="mt-32 sm:mt-48 lg:mt-64">
              <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm text-white">
                  Hansen Jonatan adalah seorang mahasiswa semester 4 yang
                  memiliki hobi dan ketertarikan di bidang teknologi.
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MemberPage;
