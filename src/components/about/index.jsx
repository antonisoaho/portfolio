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
    <section className="w-full py-24 md:py-32">
      <div className="grid w-full grid-cols-12 gap-6 xs:gap-8 md:gap-10 lg:gap-12">
        <ItemLayout
          className={
            "col-span-full row-span-2 flex-col items-start lg:col-span-8"
          }
        >
          <h2 className="mb-6 w-full max-w-prose text-left text-xl capitalize md:text-2xl">
            Who am I?
          </h2>
          <p className="w-full max-w-prose text-left text-xs font-light leading-relaxed tracking-wide sm:text-sm md:text-base">
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
          className={" col-span-full text-accent xs:col-span-6 lg:col-span-4"}
        >
          <dl className="w-full">
            <dt className="sr-only">Age</dt>
            <dd className="w-full text-left text-2xl font-semibold sm:text-5xl">
              {age}{" "}
              <sub className="text-base font-semibold">years old</sub>
            </dd>
          </dl>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full text-accent xs:col-span-6 lg:col-span-4"}
        >
          <dl className="w-full">
            <dt className="sr-only">Development experience</dt>
            <dd className="w-full text-left text-2xl font-semibold sm:text-5xl">
              {new Date().getFullYear() - new Date(2023, 8, 1).getFullYear()}
              {"+ "}
              <sub className="text-base font-semibold">years of experience</sub>
            </dd>
          </dl>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full !p-0 sm:col-span-6 md:col-span-4"}
        >
          <img
            className="h-auto w-full"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/top-langs?username=antonisoaho&&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER&theme=transparent&hide_border=true&title_color=52E0FF&text_color=C9D8FF&icon_color=8C72FF&text_bold=false`}
            alt="Most used programming languages across Anton's GitHub activity."
            loading="lazy"
            decoding="async"
            width="495"
            height="195"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full !p-0 md:col-span-8"}>
          <img
            className="h-auto w-full"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}?username=antonisoaho&&role=OWNER,COLLABORATOR,ORGANIZATION_MEMBER&theme=transparent&hide_border=true&title_color=52E0FF&text_color=DDE7FF&icon_color=8C72FF&text_bold=false`}
            alt="GitHub profile statistics for Anton Isoaho, including repositories and contribution metrics."
            loading="lazy"
            decoding="async"
            width="495"
            height="195"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="h-auto w-full"
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

        <ItemLayout className={"col-span-full !p-0 md:col-span-6"}>
          <img
            className="h-auto w-full"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=antonisoaho&theme=transparent&background=00000000&currStreakLabel=52E0FF&ring=8C72FF&fire=52E0FF&sideNums=DDE7FF&currStreakNum=DDE7FF&sideLabels=A2B4D9&dates=A2B4D9`}
            alt="GitHub contribution streak statistics for Anton Isoaho."
            loading="lazy"
            decoding="async"
            width="495"
            height="195"
          />
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
