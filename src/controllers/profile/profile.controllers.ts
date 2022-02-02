import { Request, Response } from "express";

import { connect } from "../../connect_database";

export async function _get_(req: Request, res: Response) {
  const db = await connect();
  const username: string = "iac";
    /*
        MIERDA: ORDERNAR POR FECHA DE MAS RECIENTE A MENOS
    */
  let userData = await db.query("SELECT * FROM users WHERE username = ?", [
    username
  ]);
  const idUser: number = userData[0][0].id;

  let publicationData = await db.query(
    "SELECT * FROM publications WHERE id_user = ?",
    [idUser]
  );
  return res.render("profile/profile", {
    userContent: publicationData[0],
    userInformation: userData[0][0],
  });
}
