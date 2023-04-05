import React, { useEffect, useState } from "react";

type TDateOfBirth = {
  year: number;
  month: number;
  day: number;
};

function getInitDate(): TDateOfBirth {
  const currentDate = new Date();
  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
  };
}

export function Calculator() {
  const [dateOfBirth, setDateOfBirth] = useState<TDateOfBirth>({
    year: 1980,
    month: 6,
    day: 15,
  });

  const [currentAge, setCurrentAge] = useState<TDateOfBirth>(getInitDate());

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    const { name, value } = e.target;
    setDateOfBirth({ ...dateOfBirth, [name]: Number(value) });
  }

  const yearSec = (): number => {
    return 12 * 30 * 24 * 60 * 60;
  };

  const monthSec = (): number => {
    return 30 * 24 * 60 * 60;
  };

  const dateSec = (): number => {
    return 24 * 60 * 60;
  };

  function convDateToSeconds(
    year: number,
    month: number,
    date: number
  ): number {
    return year * yearSec() + month * monthSec() + date * dateSec();
  }

  function convSecToDate(sec: number): [number, number, number] {
    const year = Math.floor(sec / yearSec());
    sec %= yearSec();

    const month = Math.floor(sec / monthSec());
    sec %= monthSec();

    const date = Math.floor(sec / dateSec());

    return [year, month, date];
  }

  function calc() {
    const current = new Date();

    const currentSec = convDateToSeconds(
      current.getFullYear(),
      current.getMonth() + 1,
      current.getDate()
    );

    const yourAgeSec = convDateToSeconds(
      dateOfBirth.year,
      dateOfBirth.month,
      dateOfBirth.day
    );

    const diffSec = currentSec - yourAgeSec;

    const [year, month, day] = convSecToDate(diffSec);
    setCurrentAge({ year: year, month: month, day: day });
  }

  useEffect(() => {
    calc();
  }, [dateOfBirth]);

  return (
    <div className="text-2xl">
      <h2 className="mb-6">Caculator</h2>

      <form method="post" className="flex justify-around gap-2 border p-4 mb-4">
        <div className="flex flex-col">
          <label htmlFor="year">Year</label>
          <input
            type="number"
            name="year"
            id="year"
            min={"1900"}
            max={"9999"}
            className="bg-zinc-800 ml-6 px-2"
            value={dateOfBirth.year}
            onChange={(e) => onChange(e)}
            autoFocus
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="month">Month</label>
          <input
            type="number"
            name="month"
            id="month"
            min="1"
            max="12"
            className="bg-zinc-800 ml-6 px-2"
            value={dateOfBirth.month}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="day">Day</label>
          <input
            type="number"
            name="day"
            id="day"
            min={"1"}
            max={"31"}
            className="bg-zinc-800 ml-6 px-2"
            value={dateOfBirth.day}
            onChange={(e) => onChange(e)}
          />
        </div>
      </form>

      <div className="flex justify-around border">
        <div>
          <h2 className="underline mb-4">Show Your Age</h2>

          <div className="flex flex-col text-4xl italic">
            <p>
              <span className="text-purple-500">{currentAge.year}</span> years
            </p>
            <p>
              <span className="text-purple-500">{currentAge.month}</span> months
            </p>
            <p>
              <span className="text-purple-500">{currentAge.day}</span> days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
