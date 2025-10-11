import { Card, Rating, RatingStar } from "flowbite-react";

export function Beceriler() {
  return (
    <Card className="bg-gray-200">
      <h5 className="text-2xl font-bold tracking-tight text-pink-500  dark:text-white mb-6">
        Uzmanlık Alanları:
      </h5>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Microservices Architecture Design
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.9/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
          </Rating>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              AI Model Deployment & MLOps
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.8/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
          </Rating>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Cloud Native Development (AWS/Azure)
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.9/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
          </Rating>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Distributed Systems & Scalability
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.7/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
          </Rating>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Real-time Data Processing
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.8/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
          </Rating>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              DevOps & Kubernetes Orchestration
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.9/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
          </Rating>
        </div>

        <div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              Natural Language Processing (NLP)
            </span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">4.6/5</span>
          </div>
          <Rating>
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={true} />
            <RatingStar filled={false} />
          </Rating>
        </div>
      </div>

      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h5 className="text-2xl font-bold tracking-tight text-pink-500 dark:text-white ">
        Sertifikalar & Özel Yetkinlikler:
      </h5>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li className="flex items-center text-sm font-medium text-gray-900 dark:text-white mt-7">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            AWS Certified Solutions Architect - Professional
          </li>
          <li className="flex items-center text-sm font-medium text-gray-900 dark:text-white mt-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            Certified Kubernetes Administrator (CKA)
          </li>
          <li className="flex items-center text-sm font-medium text-gray-900 dark:text-white mt-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            TensorFlow Developer Certified
          </li>
          <li className="flex items-center text-sm font-medium text-gray-900 dark:text-white mt-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            Scrum Master Certified (SMC)
          </li>
        </ul>
      </div>
    </Card>
  );
}