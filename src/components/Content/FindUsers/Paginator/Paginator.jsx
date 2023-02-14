import React, { useState } from "react";
import { set } from "react-hook-form";
import styles from "../FindUsers.module.css";

function Paginator(props) {
 
  let portionSize = 5;
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pagesNum = [];
  for (let i = 1; i <= pagesCount; i++) {
    pagesNum.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <>
      <div className={styles.pagination}>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            prev
          </button>
        )}
        <ul className={styles.list}>
          {pagesNum
            .filter(
              (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
            )
            .map((p) => {
              return (
                <li
                  className={props.currentPage === p && styles.listItem}
                  onClick={(e) => {
                    props.onPageChange(p);
                  }}
                >
                  {p}
                </li>
              );
            })}
        </ul>
        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            next
          </button>
        )}
      </div>
    </>
  );
}

export default Paginator;
