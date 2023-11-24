/* eslint-disable */
const {Router} = require("express");
const router = Router();

const admin = require("firebase-admin");

const db = admin.firestore();

router.get("/api/pics/getByApart/:apart", async (req, res) => {
  try {
    const query = db.collection("pics").where("apart", "==", req.params.apart);
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;

    const response = docs.map((doc) => ({
      id: doc.id,
      desc: doc.data().desc,
      camera: doc.data().camera,
      lens: doc.data().lens,
      url: doc.data().url,
      apart: doc.data().apart,
    }));

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json();
  }
});

router.post("/api/pics", async (req, res) => {
  try {
    await db
      .collection("pics")
      .doc("/" + req.body.id + "/")
      .create({
        id: req.body.id,
        desc: req.body.desc,
        camera: req.body.camera,
        lens: req.body.lens,
        url: req.body.url,
        apart: req.body.apart,
      });
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
});

router.get("/api/pics/getById/:pic_id", async (req, res) => {
  try {
    const doc = db.collection("pics").doc(req.params.pic_id);
    const pic = await doc.get();
    const response = pic.data();
    console.log(response);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/api/pics", async (req, res) => {
  try {
    const query = db.collection("pics");
    const querySnapshot = await query.get();
    const docs = querySnapshot.docs;

    const response = docs.map((doc) => ({
      id: doc.id,
      desc: doc.data().desc,
      camera: doc.data().camera,
      lens: doc.data().lens,
      url: doc.data().url,
      apart: doc.data().apart,
    }));
    console.log(query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json();
  }
});

router.delete("/api/pics/:pic_id", async (req, res) => {
  try {
    const document = db.collection("pics").doc(req.params.pic_id);
    await document.delete();
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

router.put("/api/pics/:pic_id", async (req, res) => {
  try {
    const document = db.collection("pics").doc(req.params.pic_id);
    await document.update({
      name: req.body.name,
    });
    return res.status(200).json();
  } catch (error) {
    return res.status(500).json();
  }
});

module.exports = router;
