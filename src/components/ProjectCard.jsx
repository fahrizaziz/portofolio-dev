/* eslint-disable no-unused-vars */
import { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const ProjectCard = ({
  title,
  description,
  subDescription,
  href,
  links,
  image,
  tags,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-white/10 hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] transition-all duration-300 group cursor-pointer bg-[#0f101d]"
      >
        {/* Background Image / Placeholder (Clean & Clear by Default) */}
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#18192a] via-[#121320] to-[#0c0d17] flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-3">
              <svg
                className="w-8 h-8 text-purple-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-white mb-1 line-clamp-1">
              {title}
            </h4>
            <p className="text-xs text-neutral-400 line-clamp-1">
              {tags?.map((t) => t.name).join(" • ")}
            </p>
          </div>
        )}

        {/* Title Bar at Bottom (Visible by Default, fades on hover) */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-5 pt-10 group-hover:opacity-0 transition-opacity duration-300 flex items-end justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white line-clamp-1 drop-shadow-md">
              {title}
            </h3>
            <p className="text-xs text-neutral-300/80 font-medium line-clamp-1 mt-0.5">
              {tags?.slice(0, 3).map((t) => t.name).join(" • ")}
            </p>
          </div>
        </div>

        {/* Translucent Purple Cover (Appears ONLY on HOVER) */}
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/95 via-purple-900/90 to-purple-950/85 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">
            {title}
          </h3>

          <p className="text-xs sm:text-sm font-medium italic text-purple-200/90 max-w-xs mb-5 line-clamp-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
            {tags?.map((t) => t.name).join(" • ")}
          </p>

          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full bg-white/15 hover:bg-white hover:text-black text-white border border-white/30 transition-all shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100">
            View Project <img src="/assets/arrow-right.svg" className="w-4 h-4 filter invert group-hover:invert-0" alt="arrow" />
          </span>
        </div>
      </div>

      {/* Project Details Modal */}
      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          links={links}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ProjectCard;
