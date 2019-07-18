import React from 'react';
import './projects.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class Projects extends React.Component{
    render(){
      return (
        <div id='cardContainer'>
        <Card className='card'>
        <CardActionArea>
          <CardMedia
            image="https://i.imgur.com/1Em9ZhH.png"
            title="React"
            className='cardImage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Portfolio
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This site was built in React and uses MongoDB, Node, and Express.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/sshuman95/newsite'>
            Github 
          </Button>
        </CardActions>
      </Card>

      <Card className='card'>
        <CardActionArea>
          <CardMedia
            image="https://i.imgur.com/kGYsrFd.png"
            title="upstream store"
            className='cardImage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Upstream Store
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            This project is a mock-up of a front-end application that was built in React and uses the Stripe API to complete orders.<br/><br/>
            It will be used to sell the gym's merchandise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/sshuman95/upstream'>
            Github 
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" color="primary" href='https://sshuman95.github.io/upstream/'>
            Visit
          </Button>
        </CardActions>
      </Card>

      <Card className='card'>
        <CardActionArea>
          <CardMedia
            image="https://i.imgur.com/0oUC7As.png"
            title="ravenous"
            className='cardImage'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Ravenous
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            This project was built in React and uses the Yelp API to fetch data, including location, ratings, and reviews.<br/> <br/> 
            It can be queried using 'Best Match', 'Highest Rated', or 'Most Reviewed'
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href='https://github.com/sshuman95/ravenous'>
            Github 
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" color="primary" href='https://wrong-cherries.surge.sh'>
            Visit
          </Button>
        </CardActions>
      </Card>
      </div>
      )
    }
  
  }
  
  export default Projects;