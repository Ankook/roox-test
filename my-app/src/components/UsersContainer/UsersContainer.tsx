import React, { useState, useEffect } from "react";
import styles from "./usersContainer.module.scss";
import Users from "./Users";
import { useAppSelector } from "../../app/hooks";

import { IUser } from "../../features/users/types/index";
import Loader from "../Ui-kit/loader/loader";

const UsersContainer: React.FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const sortType = useAppSelector((state) => state.sort.sortType);
  const isLoad = useAppSelector((state) => state.users.isLoad);
  const [sortedUsers, setSortedUsers] = useState<Array<IUser>>([]);
  const [usersCount, setUsersCount] = useState(0);

  const sortByType = (sortType: string, usersForSort: Array<IUser>): any => {
    if (sortType === "city") {
      setSortedUsers(usersForSort.sort(sortByCity));
    } else if (sortType === "company") {
      setSortedUsers(usersForSort.sort(sortByCompanyName));
    } else if (sortType === "none") {
      setSortedUsers(usersForSort);
    }
  };

  const sortByCity = (a: IUser, b: IUser): number => {
    if (a.address.city > b.address.city) return 1;
    if (a.address.city < b.address.city) return -1;
    return 0;
  };

  const sortByCompanyName = (a: IUser, b: IUser): number => {
    if (a.company.name > b.company.name) return 1;
    if (a.company.name < b.company.name) return -1;
    return 0;
  };

  useEffect(() => {
    let usersForSort = [...users];
    usersForSort.sort(sortByType(sortType, usersForSort));
    setUsersCount(users.length);
  }, [users, sortType]);

  return (
    <div className={styles.users}>
      <h1 className={styles.header}>Список пользователей</h1>
      {isLoad && <Loader />}
      <div className={styles.users}>
        <Users data={sortedUsers} />
      </div>
      <div className={styles.usersCount}>
        {" "}
        Найдено {usersCount} пользователей
      </div>
    </div>
  );
};
export default UsersContainer;
