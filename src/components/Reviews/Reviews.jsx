import MainLayout from "../MainLayout/MainLayout";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Reviews = () => {
  const reviews = [
    {
      name: "Juliana Guevara",
      rating: 5,
      review:
        "I enrolled in the Free Trial and, so far, I've really enjoyed it! As a professional singer and voice coach, it's great to explore different approaches to the learning experience and enrich your abilities with such structured processes and efficient tools. Thank you for making this hard work of compiling techniques and exercises accessible to people out there. I can't afford the full subscription, but I definitely recommend 30 Day Singer to singers and coaches who are curious to try it out, and I look forward to learning as much as I can with this free trial. Keep up the good work!",
    },
    {
      name: "Jasim",
      rating: 4.8,
      review:
        "The course is great, straight to the point, and very easy to follow course. At first, I had my doubts about it, but the the second week, and after doing all the vocals exercises on a daily basis as instructed, I started to feel a difference. My voice is very clear now, and I can easily hit high notes I wasn't able to do so before. And most importantly, I'm confidently now a lead vocal in my band, thanks to 30DaySinger.com!",
    },
    {
      name: "Don Gilkinson",
      rating: 2.9,
      review:
        "I'm a guy who has been singing for a very long time. I get paid and I'm asked to return. Recently, I had been concentrating on studying guitar for several months and hardly sang at all. I decided to try the '30 Day Singer' course to get my voice back in shape. The course was insightful, well organized, well taught and worked beautifully for me.",
    },
  ];

  return (
    <MainLayout>
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-slate-800 dark:text-slate-700">
          Student Reviews
        </h1>
        <div className="max-w-4xl mx-auto px-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 shadow-md rounded-md p-6 mb-6"
            >
              <h2 className="text-xl font-semibold mb-2">{review.name}</h2>
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex gap-1">
                  {[...Array(Math.floor(review.rating))].map((_, i) => (
                    <BsStarFill />
                  ))}
                  {review.rating % 1 !== 0 && <BsStarHalf />}
                  {[...Array(Math.floor(5 - review.rating))].map((_, i) => (
                    <BsStar />
                  ))}
                </div>
                <span className="text-slate-500 dark:text-slate-200 ml-2">
                  {review.rating}/5
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-200">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};
export default Reviews;
