import React from "react";
import styles from "./styles/admin.module.css";
import Link from "next/link";
import { IoGameControllerOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const layout = ({ children }) => {
  return (
    <main className="min-vh-100 w-100 mt-5 pt-3">
      <div className="d-flex">
        <div className={styles.sidebar}>
          <ul className={styles.sidebarUL}>
            <li className={styles.sidebarItem}>
              <Link className={styles.sidebarLink} href="/admin/porto">
                <div className="d-flex align-items-center gap-2">
                  <IoGameControllerOutline />
                  Edit Portofolio
                </div>
              </Link>
            </li>
            <li className={styles.sidebarItem}>
              <Link className={styles.sidebarLink} href="/admin/profil">
                <div className="d-flex align-items-center gap-2">
                  <CgProfile />
                  Edit Profil
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.konten}>
          <div className={styles.kontenSidebar}>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default layout;
