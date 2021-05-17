module.exports = (sequelize, Sequelize) => {
    const ProductOptionValue = sequelize.define("product_option_value", {
      is_default: {
        type: Sequelize.STRING
      },
      label: {
        type: Sequelize.NUMBER
      },
      sort_order: {
        type: Sequelize.NUMBER
      },
      value: {
        type: Sequelize.STRING
      }
      
    });

  
    return ProductOptionValue;
  };
  