"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import Plus from "../../public/assets/Plus.svg";
import Image from "next/image";

const Faq = () => {
  const items = [
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
    {
      question: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
    },
  ];
  return (
    <div className="flex flex-col py-[48px] lg:py-[60px] lg:flex-row lg:gap-x-[24px]">
      <div className="lg:w-1/3 lg:py-[32px] lg:pr-[56px]">
        <h3 className="text-[#EB2891] lg:text-base">
          Frequently Asked Questions
        </h3>
        <h1 className="font-medium text-[24px] leading-9 text-[#172026] py-4 ">
          Let&apos;s clarify some of your questions
        </h1>
        <p className="text-[#36485C]  pb-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore{" "}
        </p>
      </div>
      <div className="lg:w-2/3">
        <Accordion.Root
          type="single"
          defaultValue="item-1"
          collapsible
          className="flex flex-col gap-y-4"
        >
          {items.map((item, index) => (
            <div key={index}>
              <Accordion.Item
                className="bg-[#E3F1FF] p-[16px] rounded-[8px]]"
                value={`item-${index + 1}`}
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between ">
                    <p className="font-medium text-[#172026] text-left lg:text-[18px]">
                      {item.question}
                    </p>
                    <span>
                      <Image
                        className="h-10 w-10 lg:w-6 lg:h-6"
                        src={Plus}
                        alt="See More"
                      />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content>
                  <p className="text-[#36485C] pt-2">{item.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            </div>
          ))}
        </Accordion.Root>
      </div>
    </div>
  );
};

export default Faq;
