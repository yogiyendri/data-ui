import Counter from "@/components/counter";
import { faker } from "@faker-js/faker";
import React from "react";

function JumlahPelanggan() {
  return (
    <div className="flex flex-col items-center p-4 hover:border hover:border-gray-200 rounded-xl">
      <Counter number={faker.number.int({ min: 900, max: 1000 })} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-16 h-16 mt-4"
      >
        <path
          fillRule="evenodd"
          d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
          clipRule="evenodd"
        />
      </svg>
      <h6 className="text-sm font-medium mt-2">Jumlah Pelanggan</h6>
    </div>
  );
}

function JumlahPenduduk() {
  return (
    <div className="flex flex-col items-center p-4 hover:border hover:border-gray-200 rounded-xl">
      <Counter number={faker.number.int({ min: 1050, max: 2000 })} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-16 h-16 mt-4"
      >
        <path
          fillRule="evenodd"
          d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
          clipRule="evenodd"
        />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>
      <h6 className="text-sm font-medium mt-2">Jumlah Pelanggan</h6>
    </div>
  );
}

function TotalPemakaian() {
  return (
    <div className="flex flex-col items-center p-4 hover:border hover:border-gray-200 rounded-xl">
      <Counter number={faker.number.int({ min: 10500, max: 20000 })} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mt-4"
        viewBox="0 0 512 512"
        style={{ fill: "#ffffff" }}
      >
        <path d="M224 0c17.7 0 32 14.3 32 32V44l96-12c17.7 0 32 14.3 32 32s-14.3 32-32 32L256 84l-31-3.9-1-.1-1 .1L192 84 96 96C78.3 96 64 81.7 64 64s14.3-32 32-32l96 12V32c0-17.7 14.3-32 32-32zM0 224c0-17.7 14.3-32 32-32h96l22.6-22.6c6-6 14.1-9.4 22.6-9.4H192V116.2l32-4 32 4V160h18.7c8.5 0 16.6 3.4 22.6 9.4L320 192h32c88.4 0 160 71.6 160 160c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32s-14.3-32-32-32H315.9c-20.2 29-53.9 48-91.9 48s-71.7-19-91.9-48H32c-17.7 0-32-14.3-32-32V224zM436.8 423.4c1.9-4.5 6.3-7.4 11.2-7.4s9.2 2.9 11.2 7.4l18.2 42.4c1.8 4.1 2.7 8.6 2.7 13.1V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-1.2c0-4.5 .9-8.9 2.7-13.1l18.2-42.4z" />
      </svg>
      <h6 className="text-sm font-medium mt-2">Total Pemakaian (m3)</h6>
    </div>
  );
}

function RataPemakaian() {
  return (
    <div className="flex flex-col items-center p-4 hover:border hover:border-gray-200 rounded-xl">
      <Counter number={faker.number.int({ min: 10500, max: 20000 })} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-16 h-16 mt-4 text-white"
        viewBox="0 0 384 512"
        style={{ fill: "#ffffff" }}
      >
        <path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" />
      </svg>
      <h6 className="text-sm font-medium mt-2">Rata-rata Pemakaian (m3)</h6>
    </div>
  );
}

export default function Data() {
  return (
    <>
      <section className="w-screen h-screen bg-[#0099ff]">
        <main className="max-w-7xl h-full mx-auto py-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <JumlahPelanggan />
            <JumlahPenduduk />
            <TotalPemakaian />
            <RataPemakaian />
          </div>
        </main>
      </section>
    </>
  );
}
