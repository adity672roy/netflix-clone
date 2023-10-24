import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";

const SelectGenre = ({ genres, type }) => {
  const dispatch = useDispatch();
  return (
    <Select
      className="flex"
      onChange={(e) => {
        dispatch(fetchDataByGenre({ genre: e.target.value, type }));
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
};
const Select = styled.select`
  padding: 10px 20px;
  font-size: larger;
  margin-left: 3rem;
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  color:white;
  background: rgba(0, 0, 0, 0.4);
`;

export default SelectGenre;
