import FurnitureModel from '../model/furniture.js';
import MaterialModel from '../model/material.js';

export const crudFurniture = (req, res) => {
    const { crud, id } = req.params;

    switch (crud) {
        case 'add':
            res.send(`Read furniture with id ${id}`);
            break;
        case 'delete':
            res.send(`Update furniture with id ${id}`);
            break;
        case 'edit':
            res.send(`Delete furniture with id ${id}`);
            break;
        default:
            res.status(400).send('Invalid CRUD operation');
    }
};


export async function getFurnitureForm (req, res) {
    const {id } = req.params;
    const furniture = await MaterialModel.findOne({name:id})
    const materials = await MaterialModel.find({});
    res.render('admin/furniture/furniture-form', {materials, furniture});

}

export async function addFurniture (req, res) {

    const { name, description, category, stock, ...materials } = req.body
    const furniture = await FurnitureModel.findOne({name:name})

    if ( furniture ) {
        res.send('product Already exists !!')
    }
    else {
        const newFurniture = new FurnitureModel({
            name,
            description,
            materials,
            stock,
            category,
        })
        await newFurniture.save()
            .then(() => {
                res.redirect('/admin/furniture')
                return
            })

    }
}

export function getFurnitureList (req, res) {
    const { category, materials } = req.query;
    if ( category == undefined || category == "" ) {
        getAllFurniture(req, res)
    }
    else {
        getFilteredFurniture(req, res, category)
    }
}

async function getAllFurniture (req , res) {
    const furnitures = await FurnitureModel.find({});
    res.render('admin/furniture/furniture-listing', {furnitures});

}

async function getFilteredFurniture (req, res, category) {
    const furnitures = await FurnitureModel.find({category: category});
    res.render('admin/furniture/furniture-listing', {furnitures});
}
