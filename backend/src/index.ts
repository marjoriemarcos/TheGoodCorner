import express from "express";
import "reflect-metadata";
import { In, Like } from 'typeorm';
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";
import { Tag } from "./entities/Tag";
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

// Ads

// BROWS
app.get("/ads", async (req, res) => {
    const categoryId = req.query.categoryId;
    const tagId = req.query.tagId;
    const needle = req.query.needle;
    let whereClause = {}
    if (categoryId) {
        whereClause = {
			category: { id: categoryId },
		};
    }
    if (needle) {
        whereClause = { 
            title: Like(`%${needle}%`) 
        }
    }
   try {
       const ad = await Ad.find({
        relations: {
            category: true,
            tags: true
        },
        where: whereClause,
       })
       if (ad.length === 0) return res.status(404).send('No ads found');
       return res.json(ad);
   } catch (err) {
       console.error(err);
       return res.status(500).send(err);
   }
});

// SEARCH
app.get("/ads/search", async (req, res) => {
    const test = req.body.title;
   try {
       const ad = await Ad.find({
        relations: {
            category: true,
            tags: true
        },
        where: {
            title: In(test)
          }
       })
       if (ad.length === 0) return res.status(404).send('No ads found');
       return res.json(ad);
   } catch (err) {
       console.error(err);
       return res.status(500).send(err);
   }
});

// READ
app.get("/ads/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const ad = await Ad.findOne({
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

// CREATE
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

// UPDATE
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

// DELETE
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

// Category

// BROWSE
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

// READ
app.get("/categories/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const cat = await Category.find({
            where: {
                id: id
            }
        });
        if (!cat) return res.status(404).send('Category not found');
        return res.json(cat);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// CREATE
app.post("/categories", async (req, res) => {
    try {
        const cat = new Category();
        cat.name = req.body.name;
        cat.createdAt = req.body.createdAt;

        cat.save();
        return res.status(201).send('Cat added');

    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// UPDATE
app.put("/categories/:id", async (req, res) => {
	const id = parseInt(req.params.id)
    const cat = await Category.findOneBy({ id })

    try {
        if (!cat) return res.status(404).send('Category not found');
        
        cat.name = req.body.name;
        cat.createdAt = req.body.createdAt;
        cat.save();
        return res.status(200).send('Category updated');

    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// DELETE
app.delete("/categories/:id", async (req, res) => {
	const id = parseInt(req.params.id)
    try {
        const cat = await Category.findOneBy({ id })
        if (!cat) return res.status(404).send('Category not found');
        await Category.delete({ id })
        return res.status(204).send('Category deleted');
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

 // Tags

// BROWSE
app.get("/tags", async (req, res) => {
    try {
        const tags = await Tag.find({
            order: {
                name: "ASC",
            },
        });
        if (tags.length === 0) return res.status(404).send('No tags found');
        return res.json(tags);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// READ
app.get("/tags/:id", async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const tag = await Tag.find({
            where: {
                id: id
            }
        });
        if (!tag) return res.status(404).send('Tag not found');
        return res.json(tag);
    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// CREATE
app.post("/tags", async (req, res) => {
    try {
        const tag = new Tag();
        tag.name = req.body.name;
        tag.createdAt = req.body.createdAt;

        tag.save();
        return res.status(201).send('Tag added');

    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// UPDATE
app.put("/tags/:id", async (req, res) => {
	const id = parseInt(req.params.id)
    const tag = await Tag.findOneBy({ id })

    try {
        if (!tag) return res.status(404).send('Tag not found');
        
        tag.name = req.body.name;
        tag.createdAt = req.body.createdAt;
        tag.save();
        return res.status(200).send('Tag updated');

    } catch (err) {
        console.error(err);
        return res.status(500).send(err);
    }
});

// DELETE
app.delete("/tags/:id", async (req, res) => {
	const id = parseInt(req.params.id)
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



app.listen(port, async ()  => {
    await dataSource.initialize();
	console.log(`Example app listening on port ${port}`);
});


