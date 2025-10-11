import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { Card } from "flowbite-react";

export function Egitim() {
  return (
    <div className="flex stretch">
    <Card  className="bg-gray-100 dark:bg-gray-700">
      <h5 className="text-2xl font-bold tracking-tight text-pink-500 dark:text-pink-500 ">
        Eğitim:
      </h5>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2013–2017</TimelineTime>
            <TimelineTitle>Boğaziçi Üniversitesi, Bilgisayar Mühendisliği – Lisans</TimelineTitle>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2018–2020</TimelineTime>
            <TimelineTitle>Koç Üniversitesi, Yapay Zekâ ve Veri Bilimi – Yüksek Lisans
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      </Card>

      <Card className="bg-gray-200 dark:bg-gray-600">
      <h5 className="text-2xl font-bold tracking-tight  text-pink-500 dark:text-pink-500 ">
        İş Deneyimi:
      </h5>
      <Timeline>
        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2020–2022</TimelineTime>
            <TimelineTitle> TrendTech – Yazılım Mühendisi</TimelineTitle>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2022-2023</TimelineTime>
            <TimelineTitle>InnovateX – Kıdemli Yazılım Mühendisi
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>

                <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2022-Devam Etmekte</TimelineTime>
            <TimelineTitle>IoT Sensor Hub – Backend Developer
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelinePoint />
          <TimelineContent>
            <TimelineTime>2024-Devam Etmekte</TimelineTime>
            <TimelineTitle>ChatAssist – AI Developer
            </TimelineTitle>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
      
      </Card>
      </div>
  );
}
