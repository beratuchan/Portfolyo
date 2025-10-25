import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";


export interface ExperienceItem {
  time: string;
  title: string;
}

export interface EgitimProps {
  experience: ExperienceItem[];
  maintitle: string;
}

export function Egitim(props: EgitimProps) {
  const { experience,maintitle } = props;

  return (
    <div >
        <h5 className="text-2xl font-bold tracking-tight text-pink-500 dark:text-pink-500">
          {maintitle}:
        </h5>
        <Timeline>
          {experience.map((item, index) => (
            <TimelineItem key={index}>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>{item.time}</TimelineTime>
                <TimelineTitle>{item.title}</TimelineTitle>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
    </div>
  );
}

