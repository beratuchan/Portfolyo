import { Card } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export interface SSSItem {
  question: string;
  answer: string;
}

export interface SSSProps {
  questions: SSSItem[];
  title?: string;
}

export function SSS(props: SSSProps) {
  const { questions, title = "Sık Sorulan Sorular" } = props;

  return (
    <Card className="col-span-3">
      <h5 className="text-2xl font-bold tracking-tight text-pink-500 dark:text-pink-500">
        {title}
      </h5>
      <Accordion>
        {questions.map((item, index) => (
          <AccordionPanel key={index}>
            <AccordionTitle>{item.question}</AccordionTitle>
            <AccordionContent>
              <p className="text-gray-500 dark:text-gray-400">
                {item.answer}
              </p>
            </AccordionContent>
          </AccordionPanel>
        ))}
      </Accordion>
    </Card>
  );
}


