import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementAsync } from "./counterSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function Counter() {
  const dispatch = useDispatch();
  const { value, status } = useSelector((state) => state.counter);
  console.log("counter", value);
  useEffect(() => {
    dispatch(incrementAsync());
  }, [dispatch]);

  return (
    <div>
      <h3 className="text-danger">Income Details</h3>
      <h1>{status}</h1>

      <div className="d-flex flex-wrap ">
        {value.map((user) => {
          return (
            <Card style={{ width: "18rem" }} className="m-2">
              <Card.Img variant="top" src={user.preview} alt={user.preview} style={{width: "100%", height: "50vh", objectFit: "cover"}} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>$ {user.price}</Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
