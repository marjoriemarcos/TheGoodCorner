// import { Router } from "express";
// import { Category } from "../entities/Category";

// const catsRouter = Router()

// // BROWSE
// catsRouter.get("/", async (req, res) => {
//     try {
//         const categories = await Category.find()
//         if (categories.length === 0) return res.status(404).send('No cateories found');
//         return res.json(categories);
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // READ
// catsRouter.get("/:id", async (req, res) => {
//     const id = parseInt(req.params.id)
//     try {
//         const cat = await Category.find({
//             where: {
//                 id: id
//             }
//         });
//         if (!cat) return res.status(404).send('Category not found');
//         return res.json(cat);
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // CREATE
// catsRouter.post("/", async (req, res) => {
//     try {
//         const cat = new Category();
//         cat.name = req.body.name;
//         cat.createdAt = req.body.createdAt;

//         cat.save();
//         return res.status(201).send('Cat added');

//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // UPDATE
// catsRouter.put("/:id", async (req, res) => {
// 	const id = parseInt(req.params.id)
//     const cat = await Category.findOneBy({ id })

//     try {
//         if (!cat) return res.status(404).send('Category not found');
        
//         cat.name = req.body.name;
//         cat.createdAt = req.body.createdAt;
//         cat.save();
//         return res.status(200).send('Category updated');

//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // DELETE
// catsRouter.delete("/:id", async (req, res) => {
// 	const id = parseInt(req.params.id)
//     try {
//         const cat = await Category.findOneBy({ id })
//         if (!cat) return res.status(404).send('Category not found');
//         await Category.delete({ id })
//         return res.status(204).send('Category deleted');
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// export default catsRouter;
