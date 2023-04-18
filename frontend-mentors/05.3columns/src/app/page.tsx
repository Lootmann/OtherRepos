type TCarinfo = {
  id: number;
  name: string;
  description: string;
  color: {
    bgColor: string;
    fgColor: string;
  };
};

function getData(): TCarinfo[] {
  const infos: TCarinfo[] = [
    {
      id: 1,
      name: "sedans",
      description:
        "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      color: {
        bgColor: "bg-orange-500",
        fgColor: "text-orange-500",
      },
    },
    {
      id: 2,
      name: "SUVS",
      description:
        "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      color: {
        bgColor: "bg-green-600",
        fgColor: "text-green-600",
      },
    },
    {
      id: 3,
      name: "LUXURY",
      description:
        "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      color: {
        bgColor: "bg-cyan-600",
        fgColor: "text-cyan-600",
      },
    },
  ];
  return infos;
}

export default function Home() {
  const carInfos = getData();

  return (
    <main
      className="w-full flex md:flex-row flex-col gap-4
      justify-around text-xl px-10"
    >
      {carInfos.map((info) => (
        <div
          key={info.id}
          className={`flex-1 ${info.color.bgColor} h-[500px] md:h-[400px]
          flex flex-col gap-4 justify-between rounded-md py-8 px-6`}
        >
          <header>-</header>
          <h2 className="text-4xl uppercase text-white">{info.name}</h2>
          <p>{info.description}</p>
          <p
            className={`self-start bg-white rounded-xl ${info.color.fgColor} p-2`}
          >
            Learn More
          </p>
        </div>
      ))}
    </main>
  );
}
