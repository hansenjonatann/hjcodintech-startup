import { BookOpen, Group, Icon, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Layanan = () => {
  const layananList = [
    {
      id: 1,
      title: "HJ Codin Tech Academy",
      description:
        "HJ Codin Tech Academy adalah sebuah platform yang dapat anda gunakan dalam mempelajari bidang teknologi. ",
      path: "",
    },
    {
      id: 2,
      title: "HJ Codin Tech Community",
      description:
        "HJ Codin Tech Community adalah sebuah platform yang dapat anda gunakan sebagai tempat interaksi antara anda dengan pengguna lainnya. ",
      path: "",
    },
    {
      id: 3,
      title: "HJ Codin Tech Store",
      description:
        "HJ Codin Tech Store adalah sebuah platform yang dapat anda gunakan untuk memesan jasa pembuatan aplikasi / website kepada tim HJ Codin Tech. ",
      path: "",
    },
  ];
  return (
    <>
      <section className=" bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Layanan</h2>

            <p className="mt-4 text-gray-300">
              HJ Codin Tech menyediakan berbagai jenis layanan yang dapat anda
              gunakan sebagai berikut
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {layananList.map((layanan, index) => (
              <>
                <Link
                  key={index}
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                  href={layanan.path}
                >
                  {layanan.title === "HJ Codin Tech Academy" ? (
                    <div className="text-pink-500 size-10">
                      <BookOpen />
                    </div>
                  ) : layanan.title === "HJ Codin Tech Community" ? (
                    <div className="text-pink-500 size-10">
                      <Group />
                    </div>
                  ) : layanan.title === "HJ Codin Tech Store" ? (
                    <div className="text-pink-500 size-10">
                      <ShoppingBag />
                    </div>
                  ) : null}

                  <h2 className="mt-4 text-xl font-bold text-white">
                    {layanan.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-300">
                    {layanan.description}
                  </p>
                </Link>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Layanan;
