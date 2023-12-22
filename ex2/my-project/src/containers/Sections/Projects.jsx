import ProjectsCard from "../../components/Projects/ProjectCard";
import cards from "../../components/Projects/projects.json";
import SectionsTitle from "../../components/SectionsTitle";

const Projects = () => {
  return (
    <section id="projects" className="my-24 scroll-mt-24">
      <div className="container grid gap-y-10 md:gap-y-12 lg:gap-y-24">
        <SectionsTitle text={"What we do"} isBgDark={false} isTitle={true} />
        <div className="grid gap-y-6 md:gap-y-12 lg:gap-y-[140px]">
          {cards.map(
            ({ id, subTitle, title, description, location, image, href }) => (
              <ProjectsCard
                key={id}
                subTitle={subTitle}
                title={title}
                description={description}
                location={location}
                image={image}
                href={href}
                isNumber={id % 2 === 0 ? true : false}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
