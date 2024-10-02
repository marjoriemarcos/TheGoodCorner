import express from "express";
import "reflect-metadata";
import { In } from 'typeorm';
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";
import { Tag } from "./entities/Tag";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.get("/ads", async (req, res) => {
   try {
       const ad = await Ad.find({
        relations: {
            category: true,
            tags: true
        },
        // where: {
        //     category: {
        //         name: 'Autre'
        //     }
        // }
       })
       if (ad.length === 0) return res.status(404).send('No ads found');
       return res.json(ad);
   } catch (err) {
       console.error(err);
       return res.status(500).send(err);
   }
});

app.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find()
        if (categories.length === 0) return res.status(404).send('No cateories found');
        return res.json(categories);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
 });

 app.get("/tags", async (req, res) => {
    try {
        const tags = await Tag.find()
        if (tags.length === 0) return res.status(404).send('No tags found');
        return res.json(tags);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
 });

 app.delete("/tags/:id", async (req, res) => {
	const id = parseInt(req.params.id)
    console.log(id)
    try {
        const tag = await Tag.findOneBy({ id })
        if (!tag) return res.status(404).send('Tag not found');
        await Tag.delete({ id })
        return res.status(204).send('Tag deleted');
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

app.get("/ads/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const ad = await Ad.find({
            relations: {
                category: true,
                tags: true
            },
            where: {
                id: id
            }
        });
        if (!ad) return res.status(404).send('Ad not found');
        return res.json(ad);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
 });

interface Params {
    title: string;
    description: string;
    owner: string;
    price: number;
    createdAt: string;
    picture: string;
    location: string;
    categoryId: Category;
    tags: Tag[];
}


const requestParamsFromUrl = async (params: Params, ad: Ad): Promise<void> => {
    ad.title = params.title;
    ad.description = params.description;
    ad.owner = params.owner;
    ad.price = params.price;
    ad.createdAt = params.createdAt;
    ad.picture = params.picture;
    ad.location = params.location;

    if (params.categoryId) ad.category = params.categoryId;

    const tags = await Tag.find({
        where: {
            id: In(params.tags)
          }
    });
    ad.tags = tags;
    
    ad.save();
}

app.post("/ads", async (req, res) => {
    try {
        const ads = new Ad();

        requestParamsFromUrl(req.body, ads)
        return res.status(201).send('Ad added');

    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

app.put("/ads/:id", async (req, res) => {
	const id = parseInt(req.params.id)
    const ads = await Ad.findOneBy({ id })

    try {
        if (!ads) return res.status(404).send('Ad not found');
        
        requestParamsFromUrl(req.body, ads)
        return res.status(200).send('Ad updated');

    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

app.delete("/ads/:id", async (req, res) => {
	const id = parseInt(req.params.id)
    try {
        const ad = await Ad.findOneBy({ id })
        if (!ad) return res.status(404).send('Ad not found');
        await Ad.delete({ id })
        return res.status(204).send('Ad deleted');
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

app.listen(port, async ()  => {
    await dataSource.initialize();
	console.log(`Example app listening on port ${port}`);
});


