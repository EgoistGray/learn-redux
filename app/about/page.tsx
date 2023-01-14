import Link from "next/link";

export default function About() {
   return (
      <h1>
         What, what do you even what here?{" "}
         <Link href="/" className="italic text-blue-800">
            Get back
         </Link>
      </h1>
   );
}
