import React from 'react';

const CreateCourseModule: React.FC = () => (
  <div className="h-[300px] w-[300px] justify-center items-center px-14 pt-28 text-2xl text-center text-white rounded-3xl aspect-square bg-zinc-800 max-md:px-5 max-md:mt-10">
    Create a new course
  </div>
);

const CourseModule: React.FC<{ title: string }> = ({ title }) => (
  <div className="h-[300px] w-[300px] justify-center items-center p-3  text-xl text-center  rounded-md aspect-square  max-md:px-5 bg-zinc-800 max-md:mt-10">
    <div className="h-[80%] w-full  mb-4 rounded-md bg-slate-800" />
    <div className="flex flex-col justify-between h-[20%]">
      <div className="text-lg font-semibold text-gray-400">{title}</div>
    </div>
  </div>
);

const sampleCourseTitles = [
  "Introduction to React",
  "JavaScript Basics",
  "Data Structures and Algorithms",
  "User Interface Design",
  "Data Structures and Algorithms",
  "User Interface Design",
];

const Page = () => {
  return (
    <div className='text-white grid grid-cols-5 gap-y-16'>
      {sampleCourseTitles.map((title, index) => (
        <CourseModule key={index} title={title} />
      ))}
      <CreateCourseModule />
    </div>
  );
};

export default Page;