// 'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('users', [{
        firstName: 'Muhammad',
        lastName: "Muzammal",
        email:"muzammalbinirshad@gmail.com",
        phoneNumber:"03077831244",
        type:"seeker"  
       },{
        firstName: 'Muhammad',
        lastName: "Hamza",
        email:"hamzaibneirshad@gmail.com",
        phoneNumber:"030197831244",
        type:"seeker"  
       },{
        firstName: 'Muhammad',
        lastName: "Talha",
        email:"talhaibnekhalid@gmail.com",
        phoneNumber:"03000419070",
        type:"seeker"  
       }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
