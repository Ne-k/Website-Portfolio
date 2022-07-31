import { BsArrowRightShort } from "../Misc/Icons.collection";

const Skills = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white text-center">Skills</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Photography</span>
          &nbsp;I take photos with a Nikon D7500 DLSR camera
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Javascript </span>
          &nbsp;the language I use for small projects I want done quickly
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">C++ </span>
          &nbsp;the language I use for designing windows apps
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Java </span>
          &nbsp;the language I mainly use for FRC team 7034
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300 text-center">
        ...more skills include <span className="text-white">ReactJS</span>,{" "}
        <span className="text-white">NextJS</span>{" "}
      </p>
    </div>
  );
};

export default Skills;
