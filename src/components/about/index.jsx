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
    <section className="py-24 md:py-32 w-full">
      <div className="grid grid-cols-12 gap-6 xs:gap-8 md:gap-10 lg:gap-12 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full max-w-prose capitalize mb-6">
            Who am I?
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base w-full max-w-prose text-left leading-relaxed tracking-wide">
            I&apos;m Anton Isoaho, a Swedish <b>system developer</b> and
            co-owner of <b>GoLife AB</b>. I build practical SaaS and cloud
            software that turns messy workflows into clear, usable tools.
            <br />
            <br />
            I care about <b>focused product experiences</b>: reducing friction,
            respecting people&apos;s time, and making technology feel calm
            instead of complicated. My work combines coding, product thinking,
            and business understanding so the end result is not only technically
            sound, but also genuinely useful in day-to-day operations.
            <br />
            <br />
            With a background in <b>development, operations, and leadership</b>,
            I enjoy solving real problems with no ego and clear communication.
            I&apos;m always learning, always building, and always aiming to ship
            software people can trust.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <dl className="w-full">
            <dt className="sr-only">Age</dt>
            <dd className="font-semibold w-full text-left text-2xl sm:text-5xl">
              {age} <sub className="font-semibold text-base">years old</sub>
            </dd>
          </dl>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <dl className="w-full">
            <dt className="sr-only">Development experience</dt>
            <dd className="font-semibold w-full text-left text-2xl sm:text-5xl">
              {new Date().getFullYear() - new Date(2023, 8, 1).getFullYear()}
              {"+ "}
              <sub className="font-semibold text-base">years of experience</sub>
            </dd>
          </dl>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/top-langs?username=antonisoaho&&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER&theme=transparent&hide_border=true&title_color=FEBE5B&icon_color=FEBE5B&text_bold=false`}
            alt="Most used programming languages across Anton's GitHub activity."
            loading="lazy"
            decoding="async"
            width="495"
            height="195"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}?username=antonisoaho&&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER&theme=transparent&hide_border=true&title_color=FEBE5B&text_color=FFFFFF&icon_color=FEBE5B&text_bold=false`}
            alt="GitHub profile statistics for Anton Isoaho, including repositories and contribution metrics."
            loading="lazy"
            decoding="async"
            width="495"
            height="195"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={
              "https://skillicons.dev/icons?i=aws,azure,cs,css,docker,dotnet,dynamodb,express,github,githubactions,heroku,html,js,materialui,mongodb,nextjs,nodejs,npm,postman,react,redux,sass,sqlite,tailwind,ts,visualstudio,vscode"
            }
            alt="Skill icons representing Anton's core technologies, including JavaScript, React, Next.js, Node.js, .NET, and cloud tooling."
            loading="lazy"
            decoding="async"
            width="1160"
            height="160"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=antonisoaho&theme=dark&background=EB545400&currStreakLabel=FEBE5B&ring=FEBE5B`}
            alt="GitHub contribution streak statistics for Anton Isoaho."
            loading="lazy"
            decoding="async"
            width="495"
            height="195"
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
