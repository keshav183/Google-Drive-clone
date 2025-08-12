const express = require('express');
const router = express.Router();
const multer = require('multer')
const upload = multer({ storage : multer.memoryStorage() });
const supabase = require('../config/supabaseClient');
const fileModel = require('../models/files.model')

router.get('/home' , (req , res)=>{
    res.render('home');
})
router.post('/upload', upload.single('file'), async (req, res) => {

    const newFile = await fileModel.create({
      path:req.file.path,
      originalname:req.file.originalname,
      
    })
    try {
      const file = req.file;
  
      if (!file) {
        return res.status(400).send('No file uploaded');
      }
  
      const { data, error } = await supabase.storage
        .from('uploads')
        .upload(`uploads/${Date.now()}-${file.originalname}`, file.buffer, {
          contentType: file.mimetype,
        });
  
      if (error) throw error;
  
      res.json({ message: 'File uploaded successfully', data });
    } catch (err) {
      console.error(err);
      res.status(500).send('Upload failed');
    }
  });
  

module.exports = router;














