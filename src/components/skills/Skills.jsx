import "./skills.css";
import projectIcon from "../../assets/tool.png";
import CircleCard from "../../cards/circleCards/CircleCard";
import skillData from "../../Object Files/skillData";

const Skills = () => {
  return (
    <section id="skill">
      <div className="skills-container">
        <div className="flex">
          <div className="abt-image-div">
            <img src={projectIcon} alt="" className="about-image" />
          </div>
          <div>
            <h1 className="project-head-text alt-text"> Skills and Tools</h1>
            <hr className="short-hr project-hr" />
          </div>
        </div>
        <div className="my-skills-container">
          {skillData.map((items) => {
            return <CircleCard key={items.id} {...items} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
