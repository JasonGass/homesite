import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(
  createStyles({
    card: {},
    media: {
      height: 200,
      width: 350
    }
  })
);
export interface ProjectCardProps {
  title: String;
  img: string;
  description: string;
}

function ProjectCard(props: ProjectCardProps) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Done
        </Button>
        <Button size="small" color="primary">
          Comments
        </Button>
        <Button size="small" color="primary">
          Snooze
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
