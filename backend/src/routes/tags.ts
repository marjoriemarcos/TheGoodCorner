// import { Router } from "express";
// import { Tag } from "../entities/Tag";

// const tagsRouter = Router()

// // BROWSE
// tagsRouter.get("/", async (req, res) => {
//     try {
//         const tags = await Tag.find({
//             order: {
//                 name: "ASC",
//             },
//         });
//         if (tags.length === 0) return res.status(404).send('No tags found');
//         return res.json(tags);
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // READ
// tagsRouter.get("/:id", async (req, res) => {
//     const id = parseInt(req.params.id)
//     try {
//         const tag = await Tag.find({
//             where: {
//                 id: id
//             }
//         });
//         if (!tag) return res.status(404).send('Tag not found');
//         return res.json(tag);
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // CREATE
// tagsRouter.post("/", async (req, res) => {
//     try {
//         const tag = new Tag();
//         tag.name = req.body.name;
//         tag.createdAt = req.body.createdAt;

//         tag.save();
//         return res.status(201).send('Tag added');

//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // UPDATE
// tagsRouter.put("/:id", async (req, res) => {
// 	const id = parseInt(req.params.id)
//     const tag = await Tag.findOneBy({ id })

//     try {
//         if (!tag) return res.status(404).send('Tag not found');
        
//         tag.name = req.body.name;
//         tag.createdAt = req.body.createdAt;
//         tag.save();
//         return res.status(200).send('Tag updated');

//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // DELETE
// tagsRouter.delete("/:id", async (req, res) => {
// 	const id = parseInt(req.params.id)
//     try {
//         const tag = await Tag.findOneBy({ id })
//         if (!tag) return res.status(404).send('Tag not found');
//         await Tag.delete({ id })
//         return res.status(204).send('Tag deleted');
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// export default tagsRouter;
