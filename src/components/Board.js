import React from "react";
import Cell from "./Cell";

export default function Board({ list }) {
  const row1 = (
    <tr>
      {list.map((x, i) => (x.id <= 5 ? <Cell data={x} key={x.id} /> : null))}
    </tr>
  );
  const row2 = (
    <tr>
      {list.map((x, i) =>
        x.id <= 10 && x.id > 5 ? <Cell data={x} key={x.id} /> : null
      )}
    </tr>
  );
  const row3 = (
    <tr>
      <Cell data={list[9]}></Cell>
      <Cell data={list[10]}></Cell>
      <Cell data={"free"}></Cell>
      <Cell data={list[11]}></Cell>
      <Cell data={list[12]}></Cell>
    </tr>
  );
  const row4 = (
    <tr>
      {list.map((x, i) =>
        i <= 20 && i > 15 ? <Cell data={x} key={x.id} /> : null
      )}
    </tr>
  );
  const row5 = (
    <tr>
      {list.map((x, i) =>
        i <= 25 && i > 20 ? <Cell data={x} key={x.id} /> : null
      )}
    </tr>
  );
  return (
    <table id="bingo-table">
      <thead>
        <tr>
          <th>B</th>
          <th>I</th>
          <th>N</th>
          <th>G</th>
          <th>O</th>
        </tr>
      </thead>
      <tbody>
        {row1}
        {row2}
        {row3}
        {row4}
        {row5}
      </tbody>
    </table>
  );
}
