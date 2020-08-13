const { Op } = require('sequelize');
const UserModel = require('../models/user/user.model');
const { USER_STATUS } = require('../models/user/user.constant');

const list = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      where: {
        [Op.or]: [
          {
            status: USER_STATUS.NEW,
          },
          {
            status: USER_STATUS.SEARCHING,
            searchedAt: {
              [Op.lt]: (new Date() - 1 * 60 * 60 * 1000),
            },
          },
        ],
      },
      offset: null,
      limit: 10,
    });
    const ids = users.map((item) => item.id);
    UserModel.update({ status: USER_STATUS.SEARCHING, searchedAt: new Date() }, {
      where: {
        id: {
          [Op.in]: ids,
        },
      },
    });
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

const search = async (req, res) => {
  try {
    const { phone } = req.params;
    const checkPhone = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

    if (checkPhone.test(phone) === false) {
      res.send({
        status: true,
        message: 'invalid phone number',
      });
    }
    const [user] = await UserModel.findOrCreate({
      where: { phone },
      defaults: { phone, status: USER_STATUS.NEW },
    });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    dataToUpdate.forEach(user => {
      UserModel.update({ name: user.name, status: USER_STATUS.DONE }, {
        where: {
          phone: user.phone,
        },
      });
    });
    res.send({ message: 'success' });
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  list,
  search,
  update,
};
