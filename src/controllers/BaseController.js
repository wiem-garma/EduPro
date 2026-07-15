const { isValidObjectId } = require("mongoose");

class BaseController {

  constructor(service, entityName = "Entity") {
    this.service = service;
    this.entityName = entityName;

    this.create = this.create.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);

  }

  async create(req,res,next){
    try {
      const data = await this.service.create(req.body);
      res.status(201).json(data);
    } catch(error){ next(error); }
  }

  async getAll(req,res,next){
    try{
      const data = await this.service.getAll(req.query);
      res.json(data);
    }catch(error){ next(error);}
  }

  async getById(req,res,next){
    try{
      const {id}=req.params;
      if(!isValidObjectId(id)){
        return res.status(400).json({
          error:"Invalid ID format"
        });
      }
      const data = await this.service.getById(id);
      if(!data){
        return res.status(404).json({
          error:`${this.entityName} not found`
        });
      } res.json(data);
    }catch(error){ next(error);}
  }

  async update(req,res,next){
    try{
      const {id}=req.params;
      if(!isValidObjectId(id)){
        return res.status(400).json({
          error:"Invalid ID format"
        });
      }
      const data = await this.service.update(
        id, req.body);
      if(!data){
        return res.status(404).json({
          error:`${this.entityName} not found`
        });
      } res.json(data);}
      catch(error){next(error);}
  }

  async delete(req,res,next){
    try{
      const {id}=req.params;
      if(!isValidObjectId(id)){
        return res.status(400).json({
          error:"Invalid ID format"
        });
      }
      const data = await this.service.delete(id);
      if(!data){
        return res.status(404).json({
          error:`${this.entityName} not found`
        });
      }res.json({
        message:"Deleted successfully",
        data
      }); }catch(error){next(error);}
  }
}

module.exports = BaseController;