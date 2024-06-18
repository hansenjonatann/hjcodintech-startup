import { BookOpen, Group, Icon, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Partner = () => {
  const partnerList = [
    {
      id: 1,
      title: "RHD Graphic",
      description:
        "RHD Graphic adalah sebuah bisnis yang berjalan dibidang jasa desain UI/UX. ",
      path: "",
      logo: "/partners/rhdgraphic.png",
    },
    {
      id: 2,
      title: "Hansen Jaya Plastik",
      description:
        "Hansen Jaya Plastik adalah sebuah bisnis yang berjalan dibidang penjualan aneka plastik yang terletak di kota Batam. ",
      path: "",
      logo: "/partners/hansenjaya.png",
    },
  ];
  return (
    <>
      <section className=" bg-indigo-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Partner</h2>

            <p className="mt-4 text-gray-300">
              HJ Codin Tech telah melakukan kerja sama dengan beberapa startup ,
              instansi , atau bisnis , dan UMKM.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partnerList.map((partner, index) => (
              <>
                <Link
                  key={index}
                  className="block rounded-xl border border-white bg-black p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/10"
                  href={partner.path}
                >
                  <img
                    src={partner.logo}
                    alt=""
                    className="w-40 text-indigo-500 h-40 mx-auto"
                  />

                  <h2 className="mt-4 text-xl font-bold text-white">
                    {partner.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-300">
                    {partner.description}
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

export default Partner;
