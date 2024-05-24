import Counter from "@/components/counter";
import FormLogin from "@/components/form-login";
import FormLogin2 from "@/components/form-login2";
import Hero from "@/components/hero";
import ItemCard from "@/components/item-card";
import Navbar from "@/components/navbar";
import Todo from "@/components/todo";

export default function Home() {
  let linkImage = "https://cdn2.thecatapi.com/images";

  return (
    <main className="">
      <Navbar />
      <Counter/>

      <div className="m-5 w-60">
        <FormLogin2 />
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-5">
          <ItemCard name="Abyssinian" imgCat={`${linkImage}/0XYvRd7oD.jpg`} />
          <ItemCard name="Bombay" imgCat={`${linkImage}/5iYq9NmT1.jpg`} />
          <ItemCard name="Cheetoh" imgCat={`${linkImage}/IFXsxmXLm.jpg`} />
          <ItemCard name="Donskoy" imgCat={`${linkImage}/3KG57GfMW.jpg`} />
        </div>
      </div>

      <div className="m-5 w-60">
        <Todo />
      </div>
    </main>
  );
}
