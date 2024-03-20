import './dragon.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { reserveDragon, cancelDragon } from '../../redux/dragon/dragonSlice';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default function DrgaonList(props) {
  const dispatch = useDispatch();
  const {
    id, name, type, image, reserved,
  } = props;
  return (
          <li className="dragon-list" key={id}>
      <div className='image-container'><img className="dragonimage" src={image} alt="" /></div>
      <div className="about">
        <div className="dragon">{name}</div>
        {
          reserved ? (
            <div>
              <div>
                <span className="reserved">Reserved</span>
                <span className="type">{type}</span>
              </div>
              <Button data-testid="cancel-btn" type="button" className="cancel" variant="light" onClick={() => dispatch(cancelDragon(id))}>
                Cancle Reservation
              </Button>
            </div>
          )
            : (
              <div>
                <div className="type">{type}</div>
                <Button className="d-reserve" variant="primary" onClick={() => dispatch(reserveDragon(id))}>Reserve Dragon</Button>
              </div>
            )
        }
      </div>
    </li>
  );
}
DrgaonList.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
