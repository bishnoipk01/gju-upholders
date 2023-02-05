import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <Link href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <Image
            className="rounded-t-lg"
            src={props.src}
            alt=""
            width={400}
            height={400}
          />
        </Link>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base mb-4">{props.desc}</p>
          <Link
            href={props.navigate}
            className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            {props.btn}
          </Link>
        </div>
      </div>
    </div>
  );
}
