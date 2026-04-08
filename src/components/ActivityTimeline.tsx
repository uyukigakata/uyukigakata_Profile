'use client';

type Activity = {
  date: string;
  title: string;
  description?: string;
  side: "left" | "right";
};

type Props = {
  items: Activity[];
};

export default function ActivityTimeline({ items }: Props) {
  return (
    <section className="relative w-full py-20">
      <h2 className="mb-16 text-center text-4xl font-extrabold">
        軌跡
      </h2>

      <div className="relative mx-auto max-w-5xl px-4">
        {/* 中央ライン */}
        <div className="absolute left-1/2 top-0 h-full w-4 -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-400 via-orange-400 to-orange-600" />

        <div className="flex flex-col gap-16">
          {items.map((item, i) => {
            const isLeft = item.side === "left";

            return (
              <div key={i} className="relative min-h-[120px]">
                {/* 丸 */}
                <div className="absolute left-1/2 top-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-500 bg-white" />

                {isLeft ? (
                  <>
                    <div className="mr-[52%] text-right">
                      <p className="text-xl font-bold">{item.date}</p>
                      <p className="text-lg">{item.title}</p>
                      {item.description && (
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="absolute left-1/2 top-1/2 h-[2px] w-[calc(50%-3rem)] -translate-x-full -translate-y-1/2 bg-yellow-500" />
                  </>
                ) : (
                  <>
                    <div className="ml-[52%] text-left">
                      <p className="text-xl font-bold">{item.date}</p>
                      <p className="text-lg">{item.title}</p>
                      {item.description && (
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="absolute left-1/2 top-1/2 h-[2px] w-[calc(50%-3rem)] -translate-y-1/2 bg-yellow-500" />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}