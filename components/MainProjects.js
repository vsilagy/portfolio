import Card from "../components/Card";
import project1 from "../public/project-1.png";
import project2 from "../public/project-2.png";
import project3 from "../public/project-3.png";
import project4 from "../public/project-4.png";

export default function MainProjects() {
  return (
    <section className="min-w-full mb-5">
          <h3 className="text-3xl text-center underline py-1 font-bold font-mono md:text-start">
            Projects
          </h3>
          <p className="text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus
            posuere sem, nec malesuada risus ultrices non. Suspendisse potenti!
          </p>
          <div className="flex flex-col items-center gap-10 py-10 md:flex-row md:flex-wrap  ">
            <Card
              title={"Calculator"}
              image={project1}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/calculator/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/calculator/"}
            />
            <Card
              title={"Tic-Tac-Toe"}
              image={project2}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/tic-tac-toe/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/tic-tac-toe/"}
            />
            <Card
              title={"Library app"}
              image={project3}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/library/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/library/"}
            />
            <Card
              title={"Rock Paper Scissors"}
              image={project4}
              live={"Live"}
              liveLink={"https://vsilagy.github.io/rock-paper-scissors/"}
              source={"Source"}
              sourceLink={"https://github.com/vsilagy/rock-paper-scissors/"}
            />
          </div>
        </section>
  )
}