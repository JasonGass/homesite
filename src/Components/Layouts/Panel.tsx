import * as React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";
import project from "../../store";

interface PanelProps {
  proj: project[];
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  return (
    <Grid container>
      <Grid item>
        <Card>
          {props.proj.map(p => (
            <Card>
              <CardContent>{p.title}</CardContent>
            </Card>
          ))}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Panel;
