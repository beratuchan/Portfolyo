
import {Rating, RatingStar } from "flowbite-react";

export interface BecerilerProps {
  skills: {
    name: string;
    rating: number;
    displayRating: string;
  }[];
  maintitle: string;
}

const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(<RatingStar key={i} filled={true} />);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(<RatingStar key={i} filled={true} />);
    } else {
      stars.push(<RatingStar key={i} filled={false} />);
    }
  }
  return stars;
};

export function Beceriler(props:BecerilerProps) {
  const {skills, maintitle} = props
  return (
    <div>
      <h5 className="text-2xl font-bold tracking-tight text-pink-500 dark:text-pink-500 mb-6">
        {maintitle}
      </h5>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {skill.name}
              </span>
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                {skill.displayRating}
              </span>
            </div>
            <Rating>
              {renderStars(skill.rating)}
            </Rating>
          </div>
        ))}
      </div>
    </div>
  );
}