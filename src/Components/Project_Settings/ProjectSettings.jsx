import "./projectsettings.scss";

const ProjectSettings = () => {
  return (
    <>
      <div className="project-settings-container">
        <div className="project-settings-inner">
          <h3>Project Details</h3>

          <form className="project-details">
            <label>Name</label>
            <input type="text" placeholder="Project Name Here.." />

            <label>URL</label>
            <input type="text" placeholder="Website Link Here.." />

            <label>Description</label>
            <textarea cols="30" rows="10" placeholder="This Project..." ></textarea>
            <p>Describe the project in as much detail as you'd like.</p>

            <label>Project Category</label>
            <select>
              <option>None</option>
              <option>Software</option>
              <option>Management</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProjectSettings;
