import React from 'react';
import { SectionHeading, Accordion } from '@/components/ui';
import { FAQ_DATA } from '@/data/faq';

export const L8FAQ: React.FC = () => {
  const accordionItems = FAQ_DATA.map((item) => ({
    id: item.id,
    title: item.title,
    content: <p className="font-body text-base">{item.content}</p>,
  }));

  return (
    <section id="faq" className="py-20 bg-white border-b-[3px] border-[#111111]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED"
          title="Questions & Plain Answers"
          description="Everything you need to know about the spray can metaphor and privacy."
          align="center"
        />

        <Accordion items={accordionItems} />
      </div>
    </section>
  );
};
