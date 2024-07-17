"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MemberPage = () => {
  const [members, setMembers] = useState([]);

  const fetchMembers = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/member`
    );

    if (response) {
      setMembers(response.data.data);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);
  return (
    <div className="py-8 w-full bg-gray-900">
      <h1 className="text-center text-xl font-bold text-white">Anggota </h1>
      <div className="mt-5 mx-4 gap-x-4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
        {members.map((member: any, index) => (
          <div
            key={index}
            className="w-full  mt-8 md:mt-0     bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col mt-8 items-center pb-10">
              <Image
                className=" mb-3 rounded-full shadow-lg"
                src={member.profileUrl}
                alt={member.name}
                width={96}
                height={96}
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {member.name}
              </h5>
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400">
                {member.job.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
