const express = require('express')

const { body, validationResult } = require("express-validator");
const router = express.Router();
const db = {
    the: { chunks: ['th', 'e'], phones: ['DH', 'AH'] },
    of: { chunks: ['o', 'f'], phones: ['AH', 'V'] },
    and: { chunks: ['a', 'n', 'd'], phones: ['AH', 'N', 'D'] },
    to: { chunks: ['t', 'o'], phones: ['T', 'UW'] },
    a: { chunks: ['a'], phones: ['AH'] },
    in: { chunks: ['i', 'n'], phones: ['IH', 'N'] },
    for: { chunks: ['f', 'o', 'r'], phones: ['F', 'AO', 'R'] },
    is: { chunks: ['i', 's'], phones: ['IH', 'Z'] },
    on: { chunks: ['o', 'n'], phones: ['AA', 'N'] },
    that: { chunks: ['th', 'a', 't'], phones: ['DH', 'AE', 'T'] },
    by: { chunks: ['b', 'y'], phones: ['B', 'AY'] },
    this: { chunks: ['th', 'i', 's'], phones: ['DH', 'IH', 'S'] },
    with: { chunks: ['w', 'i', 'th'], phones: ['W', 'IH', 'DH'] },
    i: { chunks: ['i'], phones: ['AY'] },
    you: { chunks: ['y', 'ou'], phones: ['Y', 'UW'] },
    it: { chunks: ['i', 't'], phones: ['IH', 'T'] },
    not: { chunks: ['n', 'o', 't'], phones: ['N', 'AA', 'T'] },
    or: { chunks: ['o', 'r'], phones: ['AO', 'R'] },
    be: { chunks: ['b', 'e'], phones: ['B', 'IY'] },
    are: { chunks: ['a', 're'], phones: ['AA', 'R'] },
    from: { chunks: ['f', 'r', 'o', 'm'], phones: ['F', 'R', 'AH', 'M'] },
    at: { chunks: ['a', 't'], phones: ['AE', 'T'] },
    as: { chunks: ['a', 's'], phones: ['AE', 'Z'] },
    your: { chunks: ['y', 'ou', 'r'], phones: ['Y', 'AO', 'R'] },
    all: { chunks: ['a', 'll'], phones: ['AO', 'L'] },
    have: { chunks: ['h', 'a', 've'], phones: ['HH', 'AE', 'V'] },
    new: { chunks: ['n', 'ew'], phones: ['N', 'UW'] },
    more: { chunks: ['m', 'o', 're'], phones: ['M', 'AO', 'R'] },
    an: { chunks: ['a', 'n'], phones: ['AE', 'N'] },
    was: { chunks: ['w', 'a', 's'], phones: ['W', 'AA', 'Z'] },
    we: { chunks: ['w', 'e'], phones: ['W', 'IY'] },
  };

router.post('/', 
body("word", "Invalid word").isLength({min:1}),
async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const myError = errors["errors"][0]["msg"];
        return res.status(400).json({ errorMessage: myError });
    }
    try{
        const {word} = req.body;
        if(db[word]){
            return res.status(200).json({ successMessage: db[word] });
        }else{
            return res.status(200).json({ successMessage: "No word found" });
        }
        
    }catch(error){
        return res.status(400).json({ errorMessage: "Pass valid values" });
    }
})

module.exports = router