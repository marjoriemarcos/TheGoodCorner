// import { Router } from "express";
// import { Ad } from "../entities/Ad";
// import { Category } from "../entities/Category";
// import { Tag } from "../entities/Tag";
// import { In, Like } from "typeorm";

// const adsRouter = Router()

// // BROWSE
// adsRouter.get("/", async (req, res) => {
//     const categoryId = req.query.categoryId;
//     const tagId = req.query.tagId;
//     const needle = req.query.needle;
//     let whereClause = {}
//     if (categoryId) {
//         whereClause = {
// 			category: { id: categoryId },
// 		};
//     }
//     if (needle) {
//         whereClause = { 
//             title: Like(`%${needle}%`) 
//         }
//     }
//    try {
//        const ad = await Ad.find({
//         relations: {
//             category: true,
//             tags: true
//         },
//         where: whereClause,
//        })
//        if (ad.length === 0) return res.status(404).send('No ads found');
//        return res.json(ad);
//    } catch (err) {
//        console.error(err);
//        return res.status(500).send(err);
//    }
// });

// // SEARCH
// adsRouter.get("/search", async (req, res) => {
//     const test = req.body.title;
//    try {
//        const ad = await Ad.find({
//         relations: {
//             category: true,
//             tags: true
//         },
//         where: {
//             title: In(test)
//           }
//        })
//        if (ad.length === 0) return res.status(404).send('No ads found');
//        return res.json(ad);
//    } catch (err) {
//        console.error(err);
//        return res.status(500).send(err);
//    }
// });

// // READ
// adsRouter.get("/:id", async (req, res) => {
//     const id = parseInt(req.params.id)
//     try {
//         const ad = await Ad.findOne({
//             relations: {
//                 category: true,
//                 tags: true
//             },
//             where: {
//                 id: id
//             }
//         });
//         if (!ad) return res.status(404).send('Ad not found');
//         return res.json(ad);
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
//  });

// interface Params {
//     title: string;
//     description: string;
//     owner: string;
//     price: number;
//     createdAt: string;
//     picture: string;
//     location: string;
//     categoryId: number;
//     tags: Tag[];
// }


// const requestParamsFromUrl = async (params: Params, ad: Ad): Promise<void> => {
//     ad.title = params.title;
//     ad.description = params.description;
//     ad.owner = params.owner;
//     ad.price = params.price;
//     ad.createdAt = params.createdAt;
//     ad.picture = params.picture;
//     ad.location = params.location;

//     const category = await Category.findOneBy({ id: params.categoryId });
//     if (category) ad.category = category;


//     const tags = await Tag.find({
//         where: {
//             id: In(params.tags)
//           }
//     });
//     ad.tags = tags;
 
//     ad.save();
// }

// // CREATE
// adsRouter.post("/", async (req, res) => {
//     try {
//         const ads = new Ad();

//         requestParamsFromUrl(req.body, ads)
//         return res.status(201).send('Ad added');

//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // UPDATE
// adsRouter.put("/:id", async (req, res) => {
// 	const id = parseInt(req.params.id)
//     const ads = await Ad.findOneBy({ id })

//     try {
//         if (!ads) return res.status(404).send('Ad not found');
        
//         requestParamsFromUrl(req.body, ads)
//         return res.status(200).send('Ad updated');

//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// // DELETE
// adsRouter.delete("/:id", async (req, res) => {
// 	const id = parseInt(req.params.id)
//     try {
//         const ad = await Ad.findOneBy({ id })
//         if (!ad) return res.status(404).send('Ad not found');
//         await Ad.delete({ id })
//         return res.status(204).send('Ad deleted');
//     } catch (err) {
//         console.error(err);
//         return res.status(500).send(err);
//     }
// });

// export default adsRouter