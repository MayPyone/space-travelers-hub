import './dragon.css';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import DragonList from './DragonList';
import { fetchDragons } from '../../redux/dragon/dragonSlice';

export default function Dragons() {
  const { totalDragons } = useSelector((state) => state.dragon);
  const dispatch = useDispatch();
  useEffect(() => {
    if (totalDragons.length === 0) {
      dispatch(fetchDragons());
    }
  }, [dispatch, totalDragons.length]);
  return (
    <Container fluid>
      {totalDragons.map((dragon) => (
        <Row className="container" key={dragon.id}>
          <DragonList
            key={dragon.id}
            id={dragon.id}
            name={dragon.name}
            type={dragon.type}
            image={dragon.flickr_images}
            reserved={dragon.reserved}
          />
        </Row>
      ))}
    </Container>
  );
}
