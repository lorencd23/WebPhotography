const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const pics = require('../sample.json')
console.log(pics);

router.get('/', (req, res) => {
      res.json(pics);
});

// Método para obtener fotos por la propiedad "apart"
router.get('/:apart', (req, res) => {
      const { apart } = req.params;
      const filteredPics = pics.filter((pic) => pic.apart === apart);
    
      if (filteredPics.length > 0) {
        res.json(filteredPics);
      } else {
        res.status(404).json({ error: 'No se encontraron fotos para el valor especificado en "apart".' });
      }
});

router.post('/', (req, res) => {
      const { url, camera, lens } = req.body;
      if(camera && lens && url){
            const id = pics.length + 1;
            const newPic = {id, ...req.body};
            console.log(newPic);
            pics.push(newPic);
            res.json(pics);
      }else{
            res.send('Something in the body of the post is wrong');
      }      
});

router.put('/:id', (req, res) => {
      const { id } = req.params;
      const { url, camera, lens } = req.body;
      if(url && camera && lens) {
            _.each(pics, (pic, i) => {
                  if(pic.id == id){
                        pic.url = url;
                        pic.camera = camera;
                        pic.lens = lens;
                  }
            });
            res.json(pics);
      }else {
            res.status(500).json({error: 'There was an error.'})
      }
});

router.delete('/:id', (req, res) => {
      const { id } = req.params;
      _.each(pics, (pic, i) => {
            if(pic.id == id){
                  pics.splice(i, 1);
            }
      });
      res.send(pics);
})

module.exports = router;