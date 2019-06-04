import * as React from "react";
import Grid from "@material-ui/core/Grid";
import project from "../../store";
import ProjectCard from "./ProjectCard";

interface PanelProps {
  proj: project[];
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  return (
    <Grid
      container
      alignContent="center"
      justify="center"
      alignItems="center"
      spacing={1}
    >
      {props.proj.map(p => (
        <Grid item>
          <ProjectCard
            title={p.title}
            img={p.img}
            description={p.description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Panel;
