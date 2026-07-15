// src/services/BaseService.js

class BaseService {

  constructor(model, populateFields = []) {
    this.model = model;
    this.populateFields = populateFields;
  }


  async create(data) {
    return await this.model.create(data);
  }


  async getAll(filters = {}) {
        let query = this.model.find(filters);

        if(this.populateFields.length > 0){
            query = query.populate(this.populateFields);
        }
        return await query.exec();
    }

  async getById(id) {
    let query = this.model.findById(id);

    if (this.populateFields.length > 0) {
      query = query.populate(this.populateFields);
    }

    return await query;
  }


  async update(id, data) {

    return await this.model.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
        runValidators: true
      }
    );
  }


  async delete(id) {

    return await this.model.findByIdAndDelete(id);

  }

}


module.exports = BaseService;