type CardProps = {
   text: string;
};

export default function Card({ text }: CardProps) {
   return (
      <div className="w-full px-10 py-4 my-5 border-2 rounded border-zinc-500">
         {text}
      </div>
   );
}
