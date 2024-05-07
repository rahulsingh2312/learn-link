
import { Tabs } from "./ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "hangman",
      value: "hangman",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Hangman </p>
          <DummyContent1 />
        </div>
      ),
    },
    {
      title: "sat test",
      value: "Sat test",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Sat test</p>
          <DummyContent2 />
        </div>
      ),
    },
    {
      title: "memory",
      value: "memory",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Memory game</p>
          <DummyContent3 />
        </div>
      ),
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px]  relative  md:flex md:flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent1 = () => {
  return (
    <div className="bg-black">
    <img
      src="/Screenshot (504).png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
    </div>
  );
};
const DummyContent2 = () => {
  return (
    <div className="bg-black">
    <img
      src="/Screenshot (505).png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
    </div>
  );
};const DummyContent3 = () => {
  return (
    <div className="bg-black">
    <img
      src="/Screenshot (506).png"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
    </div>
  );
};
