import MaterialModel from '../model/material.js';

export async function getMaterial (req, res) {
    const { libelle } = req.params;
    const material = await MaterialModel.findOne({libelle: libelle});
    if(material) {
        res.render('admin/material/material-item', {material});
    }
    else{
        res.redirect('admin/furniture');
    }
};
