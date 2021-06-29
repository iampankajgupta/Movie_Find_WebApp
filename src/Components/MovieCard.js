import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css'
import GradeIcon from '@material-ui/icons/Grade';
import ImageNotFound from '../images/imageNotFound.png'
const MovieCard = ({ title, img, stars,handleMovie,val }) => {
    return (
        <>
            <Card classname="card"style={{ width: '15rem'}} onClick={handleMovie} key={val} >
                <Card.Img classname="card__image" variant="top" src={img!==null?img:ImageNotFound}  />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <div className="movie__star">
                        <Card.Text>
                            {stars===0?"":stars}
                        </Card.Text>
                        {stars === 0 ? "Not Rated" : <GradeIcon style={{fill:" #FFDF00"}}/>}
                    </div>
                </Card.Body>
            </Card>

        </>
    );
}

export default MovieCard;