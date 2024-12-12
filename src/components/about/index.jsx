/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const birthYear = 1994;
  const birthMonth = 1;

  let age = currentYear - birthYear;

  if (currentMonth < birthMonth) {
    age -= 1;
  }

  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Who am I?
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I have a passion for several things that bring me both joy and
            balance in life. Spending time with my <b>family and friends</b> is
            something I truly cherish, as it’s always rewarding to share laughs,
            meaningful conversations, and unforgettable moments with the people
            closest to me. <br />I love playing <b>floorball</b> because it’s
            fast-paced and keeps me active while enjoying teamwork and strategy
            on the field. Another passion of mine is <b>coding</b> — I enjoy the
            challenge of problem-solving, creating something from nothing, and
            constantly learning new skills in a field that’s always evolving.
            Lastly, I find playing <b>computer games </b>
            incredibly fun; it’s a great way to unwind, explore virtual worlds,
            and sometimes even connect with others who share similar interests.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {age} <sub className="font-semibold text-base">years old</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            {new Date().getFullYear() - new Date(2023, 8, 1).getFullYear()}
            {"+ "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/top-langs?username=antonisoaho&&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER&theme=transparent&hide_border=true&title_color=FEBE5B&icon_color=FEBE5B&text_bold=false`}
            alt="Used languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}?username=antonisoaho&&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER&theme=transparent&hide_border=true&title_color=FEBE5B&text_color=FFFFFF&icon_color=FEBE5B&text_bold=false`}
            alt="Anton Isoaho"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={
              "https://skillicons.dev/icons?i=aws,azure,cs,css,docker,dotnet,dynamodb,express,github,githubactions,heroku,html,js,materialui,mongodb,nextjs,nodejs,npm,postman,react,redux,sass,sqlite,tailwind,ts,visualstudio,vscode"
            }
            alt="Anton Isoaho"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=antonisoaho&theme=dark&background=EB545400&currStreakLabel=FEBE5B&ring=FEBE5B`}
            alt="Anton Isoaho"
            loading="lazy"
          />
        </ItemLayout>

        {/* <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>

          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=antonisoaho&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
            alt="Anton Isoaho"
            loading="lazy"
          />

        </ItemLayout> */}
      </div>
    </section>
  );
};

export default AboutDetails;
