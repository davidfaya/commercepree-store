module.exports = (sequelize, Sequelize) => {
    const ProductOption = sequelize.define("product_option", {
      display_name: {
        type: Sequelize.STRING
      },
      product_id: {
        type: Sequelize.NUMBER
      },
      sort_order: {
        type: Sequelize.NUMBER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
      
    });

  
    return ProductOption;
  };
  